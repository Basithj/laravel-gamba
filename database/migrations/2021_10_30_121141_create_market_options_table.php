<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMarketOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('market_options', function (Blueprint $table) {

            $table->string('id', 100)->primary();
            $table->string('name');
            $table->string('odds');
            $table->string('value');
            $table->string('status')->nullable();
            $table->string('market_id');
            $table->timestamps();
            $table->foreign('market_id')->references('id')->on('markets');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('market_options');
    }
}
