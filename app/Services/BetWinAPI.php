<?php

namespace App\Services;
use GuzzleHttp\Client;
class BetWinAPI
{
    protected $url;
    protected $http;
    protected $headers;
    private $apiToken;

    public function __construct(Client $client){

        $this->apiToken = env('BETS_API_TOKEN');
        $this->url = env('BETS_API_ENDPOINT');
        $this->http = $client;
        $this->headers = [
            'cache-control' => 'no-cache',
            'content-type' => 'application/x-www-form-urlencoded',
        ];
    }

    private function getResponse(string $uri = null, array $params = [])
    {
        $full_path = $this->url;
        $full_path .= $uri;

        $params['token'] = $this->apiToken;
        $request = $this->http->get($full_path, [
            'headers'         => $this->headers,
            'timeout'         => 30,
            'connect_timeout' => true,
            'http_errors'     => true,
            'query' => $params
        ]);
        $rate_limit_remaining = $request->getHeaderLine('X-RateLimit-Remaining');
        if($rate_limit_remaining <= 0){
            $exception = new \Exception('Rate limit is reached');
            $exception->resetTime = $request->getHeaderLine('X-RateLimit-Reset');
            throw $exception;
        }
        $response = $request ? $request->getBody()->getContents() : null;

        $status = $request ? $request->getStatusCode() : 500;

        if ($response && $status === 200 && $response !== 'null') {
            return  json_decode($response, true);
        }

        return null;
    }

    public function getBwinLiveGames($sport_id, $page = 1){
        return $this->getResponse('/v1/bwin/inplay', ['sport_id' => $sport_id, 'page' => $page]);
    }
    public function getBwinPreMatchGames($sport_id, $page = 1){
        return $this->getResponse('/v1/bwin/prematch', ['sport_id' => $sport_id, 'page' => $page]);
    }

    public function getEvent($event_id){
        return $this->getResponse('/v1/bwin/event', ['event_id' => $event_id]);
    }
    public function getEventResult($event_id){
    return $this->getResponse('/v1/bwin/result', ['event_id' => $event_id]);
}
}
