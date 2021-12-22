<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MarketOption extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'name', 'odds', 'status', 'value'
    ];

    protected $casts = [
        'id' => 'string'
    ];

    public function market(){

        return $this->belongsTo(Market::class);
    }


}
