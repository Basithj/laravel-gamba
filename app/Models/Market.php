<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Market extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'event_id', 'name', 'visibility', 'template_id', 'results', 'grouping',
        'is_main','category_id','result_order'
    ];
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'results' => 'array',
        'grouping' => 'array',
        'id' => 'string'
    ];

    protected $hidden = [
        'results', 'grouping'
    ];
    public function event(){
        return $this->belongsTo(Event::class);
    }

    public function options(){

        return $this->hasMany(MarketOption::class);
    }
}
