<?php

use Illuminate\Http\Request;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


/** -----------------------------------------
 * --------------- AUTH----------------------
 * -------------------------------------- **/
Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'Users\AuthController@login')->middleware('auth.login');
    Route::post('signup', 'Users\AuthController@signup')->middleware('auth.signup');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'Users\AuthController@logout');
        Route::get('user', 'Users\AuthController@user');
    });
});

/** -----------------------------------------
 * --------------- USER----------------------
 * -------------------------------------- **/
Route::group(['prefix' => 'user'], function () {
    Route::get('', 'Users\UserController@all');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('', 'Users\UserController@insert')->middleware('user.data', 'user.password', 'user.email.repeat');
        Route::put('', 'Users\UserController@update')->middleware('user.data');
        Route::post('/{email}', 'Users\UserController@delete')->middleware('user.email');
    });
});


/** -----------------------------------------
 * --------------- NEWS----------------------
 * -------------------------------------- **/
Route::group(['prefix' => 'news'], function () {
    Route::get('', 'News\NewsController@all');
    Route::get('/{id}', 'News\NewsController@find')->middleware('news.id');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('', 'News\NewsController@insert')->middleware('news.data');
        Route::put('', 'News\NewsController@update')->middleware('news.data', 'news.id');
        Route::delete('/{id}', 'News\NewsController@delete')->middleware('news.id');
    });
});

/** -----------------------------------------
 * ------------ Investigators----------------
 * -------------------------------------- **/
Route::group(['prefix' => 'investigators'], function () {
    Route::get('', 'Investigators\InvestigatorController@all');
    Route::get('/{id}', 'Investigators\InvestigatorController@find')->middleware('investigator.id');
    Route::post('', 'Investigators\InvestigatorController@insert')->middleware('investigator.data');
    Route::put('', 'Investigators\InvestigatorController@update')->middleware('investigator.data', 'investigator.id');
    Route::delete('/{id}', 'Investigators\InvestigatorController@delete')->middleware('investigator.id');

    Route::group(['middleware' => 'auth:api'], function () {
    });
});

/** -----------------------------------------
 * --------------- STORAGE ------------------
 * -------------------------------------- **/
Route::group(['prefix' => 'storage'], function () {
    Route::post('image', 'Storage\StorageController@upload')->middleware('storage.image');

    Route::group(['middleware' => 'auth:api'], function () {

    });
});
