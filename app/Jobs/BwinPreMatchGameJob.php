<?php

namespace App\Jobs;

use App\Models\BwinLiveGame;
use App\Models\BwinPrematchGame;
use App\Models\BwinQuestion;
use App\Models\Sport;
use App\Services\BetWinAPI;


class BwinPreMatchGameJob extends Job
{
    protected $sport;
    protected $page;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Sport $sport)
    {
        $this->sport = $sport;
        $this->page = 1;
    }

    /**
     * Get the middleware the job should pass through.
     *
     * @return array
     */
    /*public function middleware()
    {
        return [(new ThrottlesExceptions(10, 5))->by('betsApi')];

    }*/


    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(BetWinAPI $client)
    {
       // print_r($this->sport->toArray());
        $sport_id = $this->sport->bwin_sport_id;
        $perPage = 100;
        do {
            $result = $client->getBwinPreMatchGames($sport_id, $this->page);
            if(isset($result['pager'])){
                $perPage = $result['pager']['per_page'];
            }
            $records = $result['results'];
            //print_r($result);
            foreach ($records as $result) {
                $game = BwinPrematchGame::where('api_id', $result['Id'])->first();
                $game = $game ?? new BwinPrematchGame();

                $game->api_id = $result['Id'];
                $game->sport_id = $result['SportId'];
                $game->league_id = $result['LeagueId'];
                $game->league_name = $result['LeagueName'];
                $home_team = $result['HomeTeam'] ?? '';
                $away_team = $result['AwayTeam'] ?? '';
                $game->name = implode(' Vs ', [$home_team, $away_team]);
                $game->import_date_time = date("Y-m-d H:i:s");
                $date = new \DateTime($result['Date']);
                $game->start_date_time = $date->format("Y-m-d H:i:s");
                $game->end_date_time = $date->format("Y-m-d H:i:s");
                $game->bet365_id = 0;
                $game->question_count = count($result['Markets']);
                $game->save();
                /*if(count($result['Markets']) > 0){
                    foreach($result['Markets'] as $market){
                        print_r($market);
                        $question = new BwinQuestion();
                        $question->name = $market['Name'] ?? '';
                        $question->game_id = $game->id;
                        $question->market_id = $market['Id'] ?? '';
                        $date = new \DateTime($market['OpenDate']);
                        $question->open_date = $date->format("Y-m-d H:i:s");
                        $question->market_order = $market['MarketOrder'] == null ? $market['MarketOrder'] : 0;
                        $question->result_order = $market['ResultOrder'] == null ? $market['ResultOrder'] : 0;
                        $question->is_main = $market['IsMain'];
                        $question->is_ext = $market['IsExt'];
                        $question->is_visible = $market['Visible'];
                        $question->is_main_book = $market['IsMainbook'];
                        $question->results = json_encode($market['Results']);
                        $question->self = $market['Self'];
                        $question->save();
                    }
                }*/
            }
            //if($this->page > 2) break; //temporary
            $this->page++;
        } while (count($records) >= $perPage);
        $this->sport->touch();
    }
}
