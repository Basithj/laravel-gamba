<?php

namespace App\Jobs;

use App\Models\BwinLiveGame;
use App\Models\Sport;
use App\Services\BetWinAPI;


class BwinLiveGameJob extends Job
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
        $sport_id = $this->sport->bwin_sport_id;
        $perPage = 100;
        do {
            $result = $client->getBwinLiveGames($sport_id, $this->page);
            if(isset($result['pager'])){
                $perPage = $result['pager']['per_page'];
            }
            $records = $result['results'];
            //print_r($result);die;
            foreach ($records as $result) {
                $game = BwinLiveGame::where('api_id', $result['Id'])->first();

                $game = $game ?? new BwinLiveGame();
                $game->api_id = $result['Id'];
                $game->sport_id = $result['SportId'];
                $game->league_id = $result['LeagueId'];
                $game->league_name = $result['LeagueName'];
                $home_team = $result['HomeTeam'];
                $away_team = $result['AwayTeam'];
                $game->home_team_name = $home_team;
                //$game->home_team_id = '';
                $game->away_team_name = $away_team;
                // $game->away_team_id = '';
                $game->name = $home_team . ' Vs ' . $away_team;
                $game->import_date_time = date("Y-m-d H:i:s");
                $date = new \DateTime($result['Date']);
                $game->start_date_time = $date->format("Y-m-d H:i:s");
                $game->end_date_time = $date->format("Y-m-d H:i:s");
                $game->game_time = $date->format("Y-m-d H:i:s");
                $game->home_score = '';
                $game->away_score = '';
                $game->home_team_logo = '';
                $game->away_team_logo = '';
                $game->time_status = '';
                $game->stats = json_encode($result['Scoreboard']);
                $game->bet365_id = 0;
                $game->timer = '';
                $game->game_events = '';
                $game->question_count = 0;
                $game->save();
            }
            //if($this->page > 2) break; //temporary
            $this->page++;
        } while (count($records) >= $perPage);
        $this->sport->touch();
    }
}
