<?php


use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/login', ['App\Http\Controllers\AuthController', 'login']);
Route::post('/register', ['App\Http\Controllers\AuthController', 'register']);
Route::get('/sports', ['App\Http\Controllers\BwinController', 'sports']);

Route::group(['prefix' => 'games'], function () {
    Route::get('/live/{sportId}', ['App\Http\Controllers\BwinController', 'liveEvents']);
    Route::get('/prematch/{sportId}', ['App\Http\Controllers\BwinController', 'upcomingEvents']);
    Route::get('/event/{event}', ['App\Http\Controllers\BwinController', 'event']);
});

Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::post('/logout', ['App\Http\Controllers\AuthController', 'logout']);

    Route::apiResource('users', 'App\Http\Controllers\UserController')
        ->only(['index', 'update']);
    Route::post('avatar', ['App\Http\Controllers\UserController', 'updateAvatar']);

    Route::group(['prefix' => 'bets'], function() {
        Route::get('/', ['App\Http\Controllers\BetController', 'index']);
        Route::get('/{bet_id}', ['App\Http\Controllers\BetController', 'show']);
        Route::post('/', ['App\Http\Controllers\BetController', 'store']);
    });


});


