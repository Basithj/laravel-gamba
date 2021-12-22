<?php

namespace App\Models;

use App\Jobs\BwinLiveGameJob;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sport extends Model
{
    /**
     * @return HasMany
     */
    public function leagues(): HasMany
    {
        return $this->hasMany(League::class);
    }

    public function games() {

        return $this->hasMany(Event::class, 'sport_id', 'bwin_sport_id');
    }

    /**
     * @return HasMany
     */
    public function BwinEvents(): HasMany
    {
        return $this->hasMany(Event::class, 'sport_id', 'bwin_sport_id');
    }

}
