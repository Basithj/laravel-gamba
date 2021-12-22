<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Artisan;

class Event extends Model
{
    protected $fillable = [
        'id', 'sport_id', 'sports_name', 'region_id', 'region_name', 'league_id', 'league_name', 'bet_radar_id',
        'their_event_id','is_prematch','date', 'home_team','home_team_id', 'home_team_short',
        'away_team', 'away_team_id', 'away_team_short'
    ];
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'scoreboard' => 'array',
        'id' => 'string'
    ];
    protected $hidden = [
        'scoreboard'
    ];
    protected $appends = [
        'score', 'timer'
    ];

    public function getTimerAttribute(){
        if($this->scoreboard){
            if(isset($this->scoreboard['timer']))
                return $this->scoreboard['timer'];
        }else{
            return null;
        }
    }

    public function refresh()
    {
        if($this->id) {
            //echo 'bwin:events ' . $this->id; die;
            Artisan::call('bwin:events ' . $this->id);
           // Artisan::call('bwin:events ' . $this->id, ['--type' => 'result']);
        }
        return parent::refresh();
    }

    public function getScoreAttribute(){
        if($this->scoreboard){
            if(isset($this->scoreboard['score'])) {
                $score = explode(':', $this->scoreboard['score']);
                return [
                    'home' => $score[0],
                    'away' => $score[1],
                ];
            }

        }else{
            return ['home' => null, 'away' => null];
        }
    }
    public function sport() {
        return $this->belongsTo(Sport::class, 'sport_id', 'bwin_sport_id');
    }

    public function scopePreMatch($query){

        return $query->where('is_prematch', 1);
    }

    public function scopeLiveMatch($query){

        return $query->where('is_prematch', 0);
    }

    public function markets(){
        return $this->hasMany(Market::class);
    }

    public function matchResult(){

        return $this->hasOne(MatchResult::class);
    }

    public function matchDetail(){

        return $this->hasOne(MatchDetail::class);
    }

}
