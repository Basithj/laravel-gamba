<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBwinQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bwin_questions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('market_id');
            $table->unsignedBigInteger('game_id');
            $table->string('name', 200);
            $table->dateTime("open_date")->nullable();
            $table->boolean('is_ext');
            $table->string("market_order");
            $table->string("result_order");
            $table->boolean("is_main_book");
            $table->string("self", 200);
            $table->text("results");
            $table->boolean("is_visible");
            $table->boolean("is_main");
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
        Schema::dropIfExists('bwin_questions');
    }
}
