<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMarketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('markets', function (Blueprint $table) {

            $table->string('id', 100)->primary();
            $table->string('event_id', 100);
            $table->string('name',100);
            $table->string('visibility', 20);
            $table->string('template_id', 50);
            $table->text('results');
            $table->text('grouping');
            $table->boolean('is_main')->default(false);
            $table->string('category_id', 50);
            $table->string('result_order', 50);
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
        Schema::dropIfExists('markets');
    }
}
