<?php

namespace App\Console\Commands;

use App\Models\Event;
use App\Models\MatchResult;
use App\Services\BetWinAPI;
use Carbon\Carbon;
use Illuminate\Console\Command;

class BwinResults extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'bwin:results';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Synchronise result data from BWIN Api';

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

    public function handle(){
        $this->info('Starting to fetch live games');
        $events = Event::all()->where('is_prematch', '=', 0);
        /*$bar = $this->output->createProgressBar($events->count());
        $bar->start();*/
        $count = 1;
        $ids = [];
        foreach ($events as $event) {
            if($count == 10){


                $response = $this->apiClient->getEventResult(implode(',', $ids));

                $data = [];
                if(isset($response['success']) && $response['success'] == 1) {
                    if (isset($response['results']) && count($response['results'])) {
                        foreach ($response['results'] as $result) {
                            try {
                                if(isset($result['success']) && $result['success'] == 0) continue;
                                $data[] = $this->buildResultData($result);
                            }catch (\Exception $e){
                                echo $e->getMessage();
                                print_r($response['results']);die;
                            }
                        }
                    }
                }
               // print_r($data); die;
                count($data) && MatchResult::upsert($data, 'id');
                $count = 1;
                $ids = [];
            }else{
                $ids[] = $event->id;
                $count++;
            }

        }

    }

    private function buildResultData($data){
        $scores = $data['scores'] ?? null;
        $time = isset($data['time']) ? Carbon::createFromTimestamp($data['time'])->toDateTime() : null;
        $len = strlen($data['bwin_id']);
        if(substr($data['bwin_id'],0, 2) == '20'){
            $event_id = '2:' . substr($data['bwin_id'],2, $len-2);
        }else{
            $event_id = $data['bwin_id'];
        }
        return [
            'event_id' => $event_id,
            'id' => $data['id'],
            'time' => $time,
            'time_status' => $data['time_status'] ?? null,
            'has_lineup' => $data['has_lineup'] ?? false,
            'matching_dir' => $data['matching_dir'] ?? null,
            'stats' => isset($data['stats']) ? json_encode($data['stats']) : null,
            'extra' => isset($data['extra']) ? json_encode($data['extra']) : null,
            'events' => isset($data['events']) ? json_encode($data['events']) : null,
            'scores_first_half' => isset($scores[1]) ? json_encode($scores[1]) : null,
            'scores_second_half' => isset($scores[2]) ? json_encode($scores[2]) : null,
        ];

    }
}
