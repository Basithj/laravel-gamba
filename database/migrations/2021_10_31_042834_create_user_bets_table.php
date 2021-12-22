<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserBetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_bets', function (Blueprint $table) {
            $table->id();
            $table->string('option_id', 100);
            $table->unsignedBigInteger('user_id');
            $table->string('odds');
            $table->unsignedInteger('quantity');
            $table->unsignedBigInteger('transaction_id');
            $table->enum('status', ['win', 'loss', 'pending'])->default('pending');
            $table->timestamps();
            $table->foreign('option_id')->references('id')->on('market_options');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('transaction_id')->references('id')->on('transactions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_bets');
    }
}
