<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMatchResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('match_results', function (Blueprint $table) {
            $table->string('id', 100)->primary();
            $table->string('event_id', 100);
            $table->timestamp('time')->nullable();
            $table->integer('time_status')->nullable();
            $table->string('scores_first_half', 100)->nullable();
            $table->string('scores_second_half', 100)->nullable();
            $table->text('stats')->nullable();
            $table->text('extra')->nullable();
            $table->text('events')->nullable();
            $table->boolean('has_lineup')->default(false);
            $table->integer('matching_dir')->nullable();
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
        Schema::dropIfExists('match_results');
    }
}
