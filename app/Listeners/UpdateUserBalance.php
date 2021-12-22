<?php

namespace App\Listeners;

use App\Events\TransactionCreated;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdateUserBalance
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  TransactionCreated  $event
     * @return void
     */
    public function handle(TransactionCreated $event)
    {
        if($event->transaction){
            $transaction = $event->transaction;
            $user = User::find($transaction->user->id);
            if($user){
                $balance = $user->balance;
                $newBalance = round($balance + $transaction->amount, 2);
                $user->balance = $newBalance;
                $user->save();
            }
        }
    }
}
