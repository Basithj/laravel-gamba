<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property $api_id
 * @property $sport_id
 * @property $league_id
 * @property $league_name
 * @property $import_date_time
 * @property $start_date_time
 * @property $end_date_time
 * @property $name
 * @property $home_team_name
 * @property $home_team_id
 * @property $away_team_name
 * @property $away_team_id
 * @property $game_time
 * @property $home_score
 * @property $away_score
 * @property $question_count
 * @property $home_team_logo
 * @property $away_team_logo
 * @property $time_status
 * @property $stats
 * @property $bet365_id
 * @property $timer
 * @property $game_events
 */
class BwinLiveGame extends Model
{
    public function sport() {
        return $this->belongsTo(Sport::class, 'sport_id', 'bwin_sport_id');
    }
}
