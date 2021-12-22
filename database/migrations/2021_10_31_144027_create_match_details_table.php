<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMatchDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('match_details', function (Blueprint $table) {
            $table->string('event_id', 100)->primary();
            $table->unsignedInteger('period_id')->nullable();
            $table->string('match_status', 30)->nullable();
            $table->string('winner', 30)->nullable();
            $table->time('match_length')->nullable();
            $table->text('period')->nullable();
            $table->text('scores')->nullable();
            $table->timestamps();
            $table->foreign('event_id')->references('id')->on('events');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('match_details');
    }
}
