<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MatchResult extends Model
{
    use HasFactory;

    protected $fillable = [
        'id', 'event_id', 'time', 'time_status', 'scores_first_half', 'scores_second_half', 'stats', 'extra', 'events',
        'has_lineup', 'matching_dir'
    ];

    protected $casts = [
        'scores_first_half' => 'array',
        'scores_second_half' => 'array',
        'stats' => 'array',
        'extra' => 'array',
        'events' => 'array',
        'id' => 'string',
        'event_id' => 'string',
    ];


    public function event(){

        return $this->belongsTo(Event::class);
    }
}
