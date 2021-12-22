<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Team extends Model
{
    protected $fillable = ['id', 'name', 'cc', 'image_id', 'has_squad', 'sport_id'];

    /**
     * @return BelongsTo
     */
    public function sport(): BelongsTo
    {

        return $this->belongsTo(Sport::class);
    }
}
