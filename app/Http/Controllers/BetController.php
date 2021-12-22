<?php

namespace App\Http\Controllers;

use App\Events\TransactionCreated;
use App\Models\Market;
use App\Models\MarketOption;
use App\Models\Transaction;
use App\Models\UserBet;
use Illuminate\Http\Request;

class BetController extends Controller
{
    public function index(){

        $bets = auth()->user()->bets;
        return response(['data' => $bets]);
    }

    public function show($bet_id){

        $bet = UserBet::where('user_id', auth()->id())
            ->where('id', $bet_id)
            ->with('transaction')
            ->get()->first();
        if($bet)
            return response(['data' => $bet]);
        else
            return response(['message'=> 'wrong or invalid bet id'], 422);
    }

    public function store(Request $request){
        $data = $this->validate($request, [
            'option_id' => 'required',
            'quantity' => 'required|numeric',
        ]);
        $marketOption = MarketOption::find($data['option_id']);
        if($marketOption){
            //refresh event data from api
            $event = $marketOption->market->event->refresh();

            //check status of the match
            $matchDetail = $event->matchDetail;
            if($matchDetail && $matchDetail->match_status == 'Played'){
                return response(['message'=> 'Match has been over/played'], 422);
            }
            $amount = round($marketOption->odds * $data['quantity'], 2);

            $balance = auth()->user()->balance;
            if($balance < $amount) {
                return response(['message'=> 'insufficient balance'], 422);
            }
            $transaction = Transaction::create([
                'user_id' => auth()->id(),
                'amount' => $amount * -1,
                'type' => 'debit',
            ]);

            $bet = new UserBet();
            $bet->option_id = $marketOption->id;
            $bet->user_id = auth()->id();
            $bet->quantity = $data['quantity'];
            $bet->odds = $marketOption->odds;
            $bet->transaction_id = $transaction->id;
            if($bet->save()){
                TransactionCreated::dispatch($transaction);
                return response(['message' => 'Bet placed successfully', 'data' => $bet ]);
            }else{
                return response(['message'=> 'something went wrong'], 422);
            }
        }else{
            return response(['message'=> 'suspended or invalid option'], 422);
        }

    }
}
