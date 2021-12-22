<?php

namespace App\Http\Controllers;

use App\Jobs\BwinLiveGameJob;
use App\Jobs\BwinPreMatchGameJob;
use App\Models\BwinPrematchGame;
use App\Models\Event;
use App\Models\Market;
use App\Models\MarketOption;
use App\Models\Sport;
use App\Services\BetWinAPI;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Artisan;


class BwinController extends Controller
{

    public function sports(){

        return response()->json(['status' => 'success',
            'data' => Sport::select('id', 'name')
                ->withCount('games')
                ->where('bwin_sport_id', '<>', null)
                ->get()
        ]);
    }

    public function liveEvents($sportId){
        $sport = Sport::findOrFail($sportId);
        $events = $sport->bwinEvents()
            //->where('home_team_id' , '<>', '')
            ->withCount('markets')
            //->has('markets', '>', 0)
            ->liveMatch()
            ->get();
        return response(['data' => $events]);
    }

    public function upcomingEvents($sportId, Request $request){
        $sport = Sport::findOrFail($sportId);

        if($request->has('date') && $request->filled('date')){
            $date = $request->get('date');
            $events = $sport->bwinEvents()
                ->whereDate('date', '=', Carbon::parse($date)->toDateString())
                ->preMatch()
                ->simplePaginate(10);
        }else{
            $events = $sport->bwinEvents()
                ->preMatch()
                ->simplePaginate(10);
        }


        return response([ $events]);
    }

    public function event(Event $event){

        // Refresh event data before returning it
        //Artisan::call('bwin:events ' . $event->id);
        //$event->refresh();

        $event = Event::where('id', '=', $event->id)
            ->get()->map(function ($e){
                $e->setRelation('markets', $e->markets->take(5)->map(function ($m){
                    $m->setRelation('options', $m->options->where('status', '=', 'Visible'));
                    return $m;
                }));
                return $e;
            });

        if($event){
            return response(['data' => $event->first()]);
        }
        return response(['message' => 'event not found'], 422);

    }

    public function endedEvents($sportId){
        try{
            $sport = Sport::findOrFail($sportId);
            $events = $sport->events->where('time_status', '>', 1);
            return response()->json(['status' => 'success', 'data' => $events]);

        }catch (\Exception $e){
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

}
