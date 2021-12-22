<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserBet extends Model
{
    use HasFactory;
    protected $fillable = [
        'event_id', 'user_id', 'market_id', 'options', 'answer', 'quantity', 'status'
    ];

    public function user(){

        return $this->belongsTo(User::class);
    }

    public function transaction(){

        return $this->belongsTo(Transaction::class);
    }
}
