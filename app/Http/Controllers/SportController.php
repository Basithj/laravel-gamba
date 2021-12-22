<?php

namespace App\Http\Controllers;

use App\Models\Sport;


class SportController extends Controller
{
    public function index(){

        return response()->json(['status' => 'success', 'data' => Sport::all()]);

    }

    public function liveEvents($sportId){
        try{
            $sport = Sport::findOrFail($sportId);
            $events = $sport->events->where('time_status', 1);
            return response()->json(['status' => 'success', 'data' => $events]);

        }catch (\Exception $e){
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    public function upcomingEvents($sportId){
        try{
            $sport = Sport::findOrFail($sportId);
            $events = $sport->events->where('time_status', 0);
            return response()->json(['status' => 'success', 'data' => $events]);

        }catch (\Exception $e){
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
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
