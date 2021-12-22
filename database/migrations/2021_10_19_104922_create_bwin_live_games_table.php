<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBwinLiveGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bwin_live_games', function (Blueprint $table) {
            $table->id();
            $table->string('api_id');
            $table->unsignedBigInteger('sport_id');
            $table->unsignedBigInteger('league_id');
            $table->string('league_name', 100);
            $table->dateTime('import_date_time');
            $table->dateTime('start_date_time');
            $table->dateTime('end_date_time');
            $table->string('name', 250);
            $table->string('home_team_name', 100)->nullable();
            $table->unsignedBigInteger('home_team_id')->nullable();
            $table->string('away_team_name', 100)->nullable();
            $table->unsignedBigInteger('away_team_id')->nullable();
            $table->dateTime("game_time");
            $table->string("home_score", 10);
            $table->string("away_score", 10);
            $table->unsignedInteger("question_count");
            $table->string("home_team_logo", 100);
            $table->string("away_team_logo", 100);
            $table->string("time_status", 10);
            $table->text("stats");
            $table->unsignedBigInteger("bet365_id");
            $table->text("timer");
            $table->text("game_events");
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
        Schema::dropIfExists('bwin_live_games');
    }
}
