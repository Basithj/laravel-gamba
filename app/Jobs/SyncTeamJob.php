<?php

namespace App\Jobs;

use App\Models\League;
use App\Models\Sport;
use App\Models\Team;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Queue\Middleware\ThrottlesExceptions;

class SyncTeamJob extends Job
{
    protected $sport;
    protected $page;
    protected $resumeAt;
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
    public function middleware()
    {
        return [(new ThrottlesExceptions(10, 5))->by('betsApi')];

    }

    /**
     * Determine the time at which the job should timeout.
     *
     * @return \DateTime
     */
    public function retryUntil()
    {
        return new \DateTime($this->resumeAt);
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $client = new Client(['base_uri' => env('BETS_API_ENDPOINT')]);
        $apiToken = env('BETS_API_TOKEN');
        try{
            $sport_id = $this->sport->id;
            $perPage = 100;
            do {
                $params = [
                    'sport_id' => $sport_id,
                    'page' => $this->page,
                    'token' => $apiToken,
                ];
                $response = $client->get('/v1/team', ['query' => $params]);
                $rate_limit_remaining = $response->getHeaderLine('X-RateLimit-Remaining');
                if($rate_limit_remaining == 0){
                    $this->resumeAt = $response->getHeaderLine('X-RateLimit-Reset');
                    throw new \Exception('Rate limit is reached');
                }
                $leagues = json_decode($response->getBody()->getContents(), true);
                $records = $leagues['results'];
                foreach ($records as $record) {
                    $record['sport_id'] = $sport_id;
                    Team::create($record);
                }
                //if($this->page > 2) break; //temporary
                $this->page++;
            } while (count($records) >= $perPage);
            $this->sport->touch();

        }catch (BadResponseException | GuzzleException $e){
            $rate_limit_remaining = $response->getHeaderLine('X-RateLimit-Remaining');
            if($rate_limit_remaining == 0){
                $this->resumeAt = $response->getHeaderLine('X-RateLimit-Reset');
                throw new \Exception('Rate limit is reached');
            }else{
                //$this->resumeAt = $response->getHeaderLine('X-RateLimit-Reset');
                throw new \Exception($e->getMessage());
            }
        }
    }
}
