<?php

namespace App\Http\Controllers;

use App\Jobs\BwinLiveGameJob;
use App\Jobs\BwinPreMatchGameJob;
use App\Jobs\SyncTeamJob;
use App\Models\BwinLiveGame;
use App\Models\Event;
use App\Models\League;
use App\Models\Sport;
use App\Models\Team;
use App\Services\BetWinAPI;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Support\Facades\Queue;

class SyncController extends Controller
{
    private $client;
    private $apiToken;

    public function __construct(){
        $this->client = new Client(['base_uri' => env('BETS_API_ENDPOINT')]);
        $this->apiToken = env('BETS_API_TOKEN');
    }

    public function leagues(){
        try{

            $sports = Sport::all();
            foreach($sports as $sport) {
                $sport_id = $sport->id;
                $page = 1;
                do {
                    $response = $this->client->get('/v1/league?token=' . $this->apiToken . '&sport_id=' . $sport_id . '&page=' . $page);
                    $leagues = json_decode($response->getBody()->getContents(), true);
                    $records = $leagues['results'];
                    foreach ($records as $record) {
                        $record['sport_id'] = $sport_id;
                        League::create($record);
                    }
                    $page++;
                } while (count($records) >= 100);
            }
            //dd($leagues);
        }catch (BadResponseException $e){
            echo $e->getMessage();
        }
    }

    public function teams(){
        try{

            $sports = Sport::all();
            foreach($sports as $sport) {
                dispatch(new SyncTeamJob($sport));
                break;
            }
            //dd($leagues);
        }catch (BadResponseException $e){
            echo $e->getMessage();
        }
    }

    public function bwinInPlay(){
        try{

            $sports = Sport::all()->where('bwin_sport_id', '<>', null);
            foreach($sports as $sport) {
                dispatch(new BwinLiveGameJob($sport));
            }

        }catch (BadResponseException $e){
            echo $e->getMessage();
        }
    }
    public function bwinPreMatch(){
        try{

            $sports = Sport::all()->where('bwin_sport_id', '<>', null);
            foreach($sports as $sport) {
                dispatch(new BwinPreMatchGameJob($sport));
            }

        }catch (BadResponseException $e){
            echo $e->getMessage();
        }
    }
    public function inPlay(){
        try{

            $sports = Sport::all();
            foreach($sports as $sport) {
                $sport_id = $sport->id;
                $page = 1;
                $perPage = 100;
                do {
                    $params = [
                        'sport_id' => $sport_id,
                        'page' => $page,
                        'token' => $this->apiToken,
                    ];
                    $response = $this->client->get('/v1/events/inplay', ['query' => $params]);
                    $leagues = json_decode($response->getBody()->getContents(), true);
                    $records = $leagues['results'];
                    foreach ($records as $record) {
                        $record['sport_id'] = $sport_id;
                        $record['league_id'] = $record['league']['id'];
                        if(isset($record['home'])) {
                            $record['home_team_id'] = $record['home']['id'];
                        }
                        if(isset($record['away'])) {
                            $record['away_team_id'] = $record['away']['id'];
                        }
                        Event::create($record);
                    }

                    $page++;
                } while (count($records) >= $perPage);
                $sport->touch();
            }
            //dd($leagues);
        }catch (BadResponseException $e){
            echo $e->getMessage();
        }
    }

    public function upcoming(){
        try{

            $sports = Sport::all();
            foreach($sports as $sport) {
                $sport_id = $sport->id;
                $page = 1;
                $perPage = 100;
                do {
                    $params = [
                        'sport_id' => $sport_id,
                        'page' => $page,
                        'token' => $this->apiToken,
                    ];
                    $response = $this->client->get('/v1/events/upcoming', ['query' => $params]);
                    $leagues = json_decode($response->getBody()->getContents(), true);
                    $records = $leagues['results'];
                    foreach ($records as $record) {
                        $record['sport_id'] = $sport_id;
                        $record['league_id'] = $record['league']['id'];
                        if(isset($record['home'])) {
                            $record['home_team_id'] = $record['home']['id'];
                        }
                        if(isset($record['away'])) {
                            $record['away_team_id'] = $record['away']['id'];
                        }
                        Event::create($record);
                    }

                    $page++;
                } while (count($records) >= $perPage);
                $sport->touch();
            }
            //dd($leagues);
        }catch (BadResponseException $e){
            echo $e->getMessage();
        }
    }
}
