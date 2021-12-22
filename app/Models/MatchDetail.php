<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MatchDetail extends Model
{
    use HasFactory;
    protected $fillable = [
        'event_id', 'period_id', 'match_status', 'winner', 'match_length', 'period', 'scores'
    ];

    protected $casts = [
        'period' => 'array',
        'scores' => 'array',
        'event_id' => 'string'
    ];
}
