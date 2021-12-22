<?php

namespace Database\Seeders;

use App\Models\Sport;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SportTableSeeder extends Seeder
{
    private $data = [
        ['name' => 'Soccer', 'sport_id' => 1, 'bwin_sport_id' => 4],
        ['name' => 'Tennis', 'sport_id' => 13, 'bwin_sport_id' => 5],
        ['name' => 'Handball', 'sport_id' => 78, 'bwin_sport_id' => 16],
        ['name' => 'Horse Racing', 'sport_id' => 2],
        ['name' => 'Ice Hockey', 'sport_id' => 17, 'bwin_sport_id' => 12],
        ['name' => 'American Football', 'sport_id' => 12, 'bwin_sport_id' => 11],
        ['name' => 'Futsal', 'sport_id' => 83, 'bwin_sport_id' => 70],
        ['name' => 'Table Tennis', 'sport_id' => 92, 'bwin_sport_id' => 56],
        ['name' => 'Rugby Union', 'sport_id' => 8, 'bwin_sport_id' => 32],
        ['name' => 'Australian Rules', 'sport_id' => 36, 'bwin_sport_id' => 36],
        ['name' => 'Boxing/UFC', 'sport_id' => 9, 'bwin_sport_id' => 24],
        ['name' => 'Floorball', 'sport_id' => 90],
        ['name' => 'Water Polo', 'sport_id' => 110],
        ['name' => 'E-sports', 'sport_id' => 151, 'bwin_sport_id' => 100],
        ['name' => 'Basketball', 'sport_id' => 18, 'bwin_sport_id' => 7],
        ['name' => 'Volleyball', 'sport_id' => 91, 'bwin_sport_id' => 18],
        ['name' => 'Baseball', 'sport_id' => 16, 'bwin_sport_id' => 23],
        ['name' => 'Greyhounds', 'sport_id' => 4],
        ['name' => 'Snooker', 'sport_id' => 14, 'bwin_sport_id' => 33],
        ['name' => 'Cricket', 'sport_id' => 3, 'bwin_sport_id' => 22],
        ['name' => 'Darts', 'sport_id' => 15, 'bwin_sport_id' => 34],
        ['name' => 'Badminton', 'sport_id' => 94, 'bwin_sport_id' => 44],
        ['name' => 'Rugby League', 'sport_id' => 19, 'bwin_sport_id' => 31],
        ['name' => 'Bowls', 'sport_id' => 66],
        ['name' => 'Gaelic Sports', 'sport_id' => 75],
        ['name' => 'Beach Volleyball', 'sport_id' => 95],
        ['name' => 'Squash', 'sport_id' => 107],
        ['name' => 'Golf', 'bwin_sport_id' => 13],
        ['name' => 'Cycling', 'bwin_sport_id' => 10],
        ['name' => 'Biathlon', 'bwin_sport_id' => 64],
        ['name' => 'Motorbikes', 'bwin_sport_id' => 40],
        ['name' => 'Formula 1', 'bwin_sport_id' => 6],
        ['name' => 'Alpine Skiing', 'bwin_sport_id' => 9],
    ];



    /**
     * Run the database seeds.
     *
     */
    public function run()
    {

        foreach($this->data as $data)
            Sport::insert($data);
    }
}
