<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {

            $table->string('id', 100)->primary();
            $table->unsignedInteger('sport_id');
            $table->string('sports_name', 50);
            $table->unsignedInteger('region_id');
            $table->string('region_name', 50);
            $table->string('league_id', 50);
            $table->string('league_name', 100);
            $table->string('bet_radar_id', 100)->nullable();
            $table->string('their_event_id', 100)->nullable();
            $table->boolean('is_prematch')->default(false);
            $table->timestamp('date');
            $table->string("home_team", 100)->nullable();
            $table->string("home_team_id", 50)->nullable();
            $table->string("home_team_short", 50)->nullable();
            $table->string("away_team", 100)->nullable();
            $table->string("away_team_id", 50)->nullable();
            $table->string("away_team_short", 50)->nullable();
            $table->text("scoreboard")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
