<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBwinPrematchGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bwin_prematch_games', function (Blueprint $table) {
            $table->id();
            $table->string('api_id');
            $table->unsignedBigInteger('sport_id');
            $table->unsignedBigInteger('league_id');
            $table->string('league_name', 100);
            $table->dateTime('import_date_time');
            $table->dateTime('start_date_time');
            $table->dateTime('end_date_time');
            $table->string('name', 250);
            $table->unsignedInteger("question_count");
            $table->unsignedBigInteger("bet365_id");
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
        Schema::dropIfExists('bwin_prematch_games');
    }
}
