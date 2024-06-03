<?php

use App\Http\Controllers\PokemonController;
use App\Http\Controllers\PokemonDataController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

require __DIR__ . '/auth.php';

Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', function () {
        return Auth::user();
    });
    Route::apiResource('users', UserController::class);
    Route::apiResource('show', UserController::class);
    Route::post('users/{user}/avatar', [UserController::class, 'uploadAvatar']);
});

Route::get('/pokemon', [PokemonDataController::class, 'index']);
Route::get('/pokemon/{id}', [PokemonDataController::class, 'show']);
