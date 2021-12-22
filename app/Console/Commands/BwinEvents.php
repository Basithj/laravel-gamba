<?php

namespace App\Console\Commands;

use App\Models\Event;
use App\Models\Market;
use App\Models\MarketOption;
use App\Models\MatchDetail;
use App\Models\MatchResult;
use App\Models\Sport;
use App\Services\BetWinAPI;
use Carbon\Carbon;
use GuzzleHttp\Exception\ConnectException;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class BwinEvents extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'bwin:events {event_id?*} {--type=all} ';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Synchronise events data from BWIN Api';

    protected BetWinAPI $apiClient;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(BetWinAPI $apiClient)
    {
        $this->apiClient = $apiClient;
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     *
     */
    public function handle()
    {
        $type = $this->option('type');
        $event_id = $this->argument('event_id');
        $ids = null;
        if($event_id != null){
            if(count($event_id) <= 10){
                $ids = implode(',', $event_id);

            }else{
                $this->error("Maximum 10 event IDs are allowed");
                return;
            }
        }
        if($type == 'result'){
            if($ids!= null){
                $this->fetchResult($ids);
            }else{
                $this->error("result option requires event id(s)");

            }
        }elseif(in_array($type, ['live', 'upcoming'])){
            $this->fetchEvents($type);
        }elseif($ids != null){
            $this->singleEvent($ids);
        }elseif($type == 'refresh'){
            $this->refresh();
        }elseif($type == 'all'){
            $this->fetchEvents('live');
            $this->fetchEvents('upcoming');
        }else{
            $this->error("Unknown type");
        }
    }

    /**
     * Populate more in-depth details about live matches
     */
    private function refresh(){
        $events = Event::where('is_prematch', '=', '0')->pluck('id');
        if($events->count()){
            $bar = $this->output->createProgressBar($events->count());
            $bar->start();
            $chunks = $events->chunk(10);
            foreach($chunks as $chunk){
                $ids = implode(',', $chunk->toArray());
                $this->singleEvent($ids);
                $bar->advance($chunk->count());
            }
            $bar->finish();
            $this->newLine();

        }
    }

    /** Processes event data for the event_id specified
     * @param $event_id
     */
    private function singleEvent($event_id){

        $retryCount = 0;
        try {
            retry:
            $event = $this->apiClient->getEvent($event_id);
            if($event['success'] == 1 && count($event['results'])){
                $event = $event['results'];
                //echo json_encode($event[0]) . PHP_EOL; die;
                $this->process($event);
            }
        }catch (ConnectException $e){
            if($retryCount > 3){
                return;
            }else{
                $this->newLine();
                $this->warn("Connection error. Retrying again...");
                $retryCount++;
                sleep(5);
                goto retry;
            }

        }

    }

    /** Processes result data for the event_id specified
     * @param $event_id
     */
    private function fetchResult($event_id){
        $response = $this->apiClient->getEventResult($event_id);

        $data = [];
        if(isset($response['results']) && count($response['results'])){
            foreach($response['results'] as $result){
                $data[] = $this->buildResultData($result);
            }
        }

        count($data) && MatchResult::upsert($data, 'id');
    }

    /** Processes event data for live of upcoming events
     * @param string $type
     */
    private function fetchEvents($type = 'upcoming'){
        if($type == 'live'){
            $sports = Sport::all()->where('bwin_sport_id', '<>', null);
        }elseif($type == 'upcoming'){
            $sports = Sport::all()->where('bwin_sport_id', '<>', null);
        }else{
            $this->error("Unknown event type");
            return;
        }
        if($sports->count() > 0){
            $this->info("Starting to fetch $type games");
            $bar = $this->output->createProgressBar($sports->count());
            $bar->start();
            foreach ($sports as $sport) {
                $sport_id = $sport->bwin_sport_id;
                $perPage = 100;
                $page = 1;
                $retryCount = 0;
                $records = [];
                do {
                    try {

                        $result = $type == 'upcoming'
                            ? $this->apiClient->getBwinPreMatchGames($sport_id, $page)
                            : $this->apiClient->getBwinLiveGames($sport_id, $page);

                        if (isset($result['pager'])) {
                            $perPage = $result['pager']['per_page'];
                        }
                        $records = $result['results'];
                        $this->process($records);
                        $page++;
                        $retryCount = 0;
                    }catch (ConnectException $e){
                        if($retryCount > 3){
                            $this->error("Max connection retry attempt exceeded. Retry count is $retryCount. Exiting now...");
                            $bar->clear();
                            return;
                        }
                        $this->warn($e->getMessage());
                        $this->info("Retrying...");
                        $retryCount++;
                    }
                } while (count($records) >= $perPage);
                $sport->touch();
                $bar->advance();
            }
            $this->info('Finished updating upcoming games');
        }
    }

    private function buildResultData($data){
        $scores = $data['scores'];
        $time = isset($data['time']) ? Carbon::createFromTimestamp($data['time'])->toDateTime() : null;
        return [
            'event_id' => '2:' . substr($data['bwin_id'],-7),
            'id' => $data['id'],
            'time' => $time,
            'time_status' => $data['time_status'] ?? null,
            'has_lineup' => $data['has_lineup'] ?? null,
            'matching_dir' => $data['matching_dir'] ?? null,
            'stats' => isset($data['stats']) ? json_encode($data['stats']) : null,
            'extra' => isset($data['extra']) ? json_encode($data['extra']) : null,
            'events' => isset($data['events']) ? json_encode($data['events']) : null,
            'scores_first_half' => isset($scores[1]) ? json_encode($scores[1]) : null,
            'scores_second_half' => isset($scores[2]) ? json_encode($scores[2]) : null,
        ];
    }

    private function buildMatchDetailsData($data, $event_id){
        $length = null;
        if(isset($data['matchLengthMin']) && isset($data['matchLengthSec'])){
            $length = Carbon::createFromTime(0, $data['matchLengthMin'], $data['matchLengthSec'])->format("H:i:s");
        }

        return [
            'event_id' => $event_id,
            'period_id' => $data['periodId'] ?? '',
            'match_status' => $data['matchStatus'] ?? '',
            'winner' => $data['winner'] ?? '',
            'match_length' => $length,
            'period' => isset($data['period']) ? json_encode($data['period']) :  null,
            'scores' => isset($data['scores']) ? json_encode($data['scores']) :  null,
        ];
    }


    /**
     * @param $m array market data
     * @param $event_id string|int event id returned from API
     * @return array
     */
    private function buildMarketData($m, $event_id){
        return [
            'id' => $m['id'],
            'name' => $m['name']['value'],
            'visibility' => $m['visibility'],
            'template_id' => $m['templateId'],
            'category_id' => $m['categoryId'],
            'result_order' => $m['resultOrder'],
            'is_main' => isset($m['isMain']) && $m['isMain']==true,
            'results' => json_encode($m['results']),
            'grouping' => json_encode($m['grouping']),
            'event_id' => $event_id,
        ];

    }

    private function buildOptionMarketData($m, $event_id){
        return [
            'id' => $m['id'],
            'name' => $m['name']['value'],
            'visibility' => $m['status'] ?? '',
            'template_id' => $m['templateId'] ?? '',
            'category_id' => $m['categoryId'] ?? '',
            'result_order' => $m['resultOrder'] ?? '',
            'is_main' => isset($m['isMain']) && $m['isMain']==true,
            'results' => json_encode($m['options']),
            'grouping' => json_encode($m['grouping']),
            'event_id' => $event_id,
        ];

    }

    private function buildOptionData($option, $market_id){

        return [
            'id' => $option['id'],
            'name' => $option['name']['value'],
            'value' => isset($option['sourceName']) ? $option['sourceName']['value'] : $option['name']['value'],
            'odds' => $option['price']['odds'],
            'status' => $option['status'],
            'market_id' => $market_id
        ];
    }

    /**
     * @param $result
     * @return array
     * @throws \Exception
     */
    private function buildEventData($result){
        $date = new \DateTime($result['Date']);
        return [
            'id' => $result['Id'],
            'sport_id' => $result['SportId'],
            'sports_name' => $result['SportName'],
            'league_id' => $result['LeagueId'],
            'league_name' => $result['LeagueName'],
            'home_team' => $result['HomeTeam'] ?? '',
            'home_team_id' => $result['HomeTeamId'] ?? '',
            'away_team' => $result['AwayTeam'] ?? '',
            'away_team_id' => $result['AwayTeamId'] ?? '',
            'home_team_short' => $result['HomeTeamShort'] ?? '',
            'away_team_short' => $result['AwayTeamShort'] ?? '',
            'bet_radar_id' => $result['BetRadarId'] ?? '',
            'their_event_id' => $result['our_event_id'] ?? '',
            'is_prematch' => $result['IsPreMatch'] ?? 0,
            'region_name' => $result['RegionName'],
            'region_id' => $result['RegionId'],
            'scoreboard' => isset($result['Scoreboard']) ? json_encode($result['Scoreboard']) : null,
            'date' => $date->format("Y-m-d H:i:s"),
        ];
    }

    private function process($records){
        try{
            $eventsData = [];
            $marketData = [];
            $marketOptions = [];
            $matchDetailsData = [];

            foreach ($records as $result) {
                $eventsData[] = $this->buildEventData($result);
                if(isset($result['liveData']) && isset($result['liveData']['matchDetails'])){
                    $matchDetailsData[] = $this->buildMatchDetailsData($result['liveData']['matchDetails'], $result['Id']);
                }
                if(isset($result['optionMarkets']) and count($result['optionMarkets'])) {
                    foreach ($result['optionMarkets'] as $m) {
                        $marketData[] = $this->buildOptionMarketData($m, $result['Id']);
                        $results = $m['options'];
                        if(is_array($results) && count($results)) {

                            foreach ($results as $option) {
                                $marketOptions[] = $this->buildOptionData($option, $m['id']);
                            }

                        }
                    }
                }elseif(isset($result['Markets']) and count($result['Markets'])) {
                    foreach ($result['Markets'] as $m) {
                        $marketData[] = $this->buildMarketData($m, $result['Id']);
                        $results = $m['results'];
                        if(is_array($results) && count($results)){

                            foreach($results as $option){
                                try {
                                    $name = is_array($option['name']) ? $option['name']['value'] : $option['name'];
                                    $value = isset($option['sourceName']) ? $option['sourceName']['value'] : $name;
                                    $marketOptions[] = [
                                        'id' => $option['id'],
                                        'name' => $name,
                                        'value' => $value,
                                        'odds' => $option['odds'],
                                        'status' => $option['status'] ?? $option['visibility'],
                                        'market_id' => $m['id'],
                                    ];
                                }catch (\Exception $e){
                                    echo $e->getMessage();
                                    print_r($option); die;
                                }
                            }
                        }
                    }
                }

            }
            DB::statement('SET FOREIGN_KEY_CHECKS=0');
            if(count($eventsData)) {
                foreach (array_chunk($eventsData, 1000) as $t) {
                    Event::upsert($t, 'id');
                }

            }
            if(count($matchDetailsData)){
                foreach (array_chunk($matchDetailsData, 1000) as $t) {
                    MatchDetail::upsert($t, 'event_id');
                }
            }
            if(count($marketData)) {
                foreach (array_chunk($marketData, 1000) as $t) {
                    Market::upsert($t, 'id');
                }
            }
            if(count($marketOptions)) {
                foreach (array_chunk($marketOptions, 1000) as $t) {
                    MarketOption::upsert($t, 'id');
                }
            }
            DB::statement('SET FOREIGN_KEY_CHECKS=1');
        }catch (\Exception $e){
            echo $e->getMessage();
        }
    }


}
