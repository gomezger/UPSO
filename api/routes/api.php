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

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}) */;


/** -----------------------------------------
 * --------------- AUTH----------------------
 * -------------------------------------- **/
/* Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'Users\AuthController@login')->middleware('auth.login');
    Route::post('signup', 'Users\AuthController@signup')->middleware('auth.signup');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'Users\AuthController@logout');
        Route::get('user', 'Users\AuthController@user');
    });
}); */

/** -----------------------------------------
 * --------------- USER----------------------
 * -------------------------------------- **/
/* Route::group(['prefix' => 'user'], function () {
    Route::get('', 'Users\UserController@all');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('', 'Users\UserController@insert')->middleware('user.data', 'user.password', 'user.email.repeat');
        Route::put('', 'Users\UserController@update')->middleware('user.data');
        Route::post('/{email}', 'Users\UserController@delete')->middleware('user.email');
    });
}); */


/** -----------------------------------------
 * --------------- NEWS----------------------
 * -------------------------------------- **/
/* Route::group(['prefix' => 'news'], function () {
    Route::get('', 'News\NewsController@all');
    Route::get('/{id}', 'News\NewsController@find')->middleware('news.id');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('', 'News\NewsController@insert')->middleware('news.data');
        Route::put('', 'News\NewsController@update')->middleware('news.data', 'news.id');
        Route::delete('/{id}', 'News\NewsController@delete')->middleware('news.id');
    });
}); */

/** -----------------------------------------
 * ------------ Investigators----------------
 * -------------------------------------- **/
/* Route::group(['prefix' => 'investigators'], function () {
    Route::get('', 'Investigators\InvestigatorController@all');
    Route::get('/{id}', 'Investigators\InvestigatorController@find')->middleware('investigator.id');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('', 'Investigators\InvestigatorController@insert')->middleware('investigator.data');
        Route::put('', 'Investigators\InvestigatorController@update')->middleware('investigator.data', 'investigator.id');
        Route::delete('/{id}', 'Investigators\InvestigatorController@delete')->middleware('investigator.id');
    });
}); */

/** -----------------------------------------
 * --------------- Papers ------------------
 * -------------------------------------- **/
/* Route::group(['prefix' => 'papers'], function () {
    Route::get('', 'Papers\PapersController@all');
    Route::get('/{id}', 'Papers\PapersController@find')->middleware('paper.id');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('', 'Papers\PapersController@insert')->middleware('paper.data');
        Route::put('', 'Papers\PapersController@update')->middleware('paper.data', 'paper.id');
        Route::delete('/{id}', 'Papers\PapersController@delete')->middleware('paper.id');
    });

}); */

/** -----------------------------------------
 * ----------- Papers Comment ---------------
 * -------------------------------------- **/
/* Route::group(['prefix' => 'comments/papers'], function () {

    Route::post('', 'Papers\PapersCommentsController@insert')->middleware('paper.comment.data'); // porque es alguien no logueado

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('', 'Papers\PapersCommentsController@all'); // solo el admin puede ver todos los mensajes
        Route::put('', 'Papers\PapersCommentsController@update')->middleware('paper.comment.data', 'paper.comment.id'); // solo puede el admin
        Route::delete('/{id}', 'Papers\PapersCommentsController@delete')->middleware('paper.comment.id'); // solo puede el admin
    });
}); */

/** -----------------------------------------
 * ----------- Papers Download ---------------
 * -------------------------------------- **/
/* Route::group(['prefix' => 'downloads/papers'], function () {

    Route::get('/{id}', 'Papers\PapersDownloadController@find')->middleware('paper.download.id'); // porque es alguien no logueado
    Route::post('', 'Papers\PapersDownloadController@insert')->middleware('paper.download.data'); // porque es alguien no logueado
    Route::put('', 'Papers\PapersDownloadController@update')->middleware('paper.download.data', 'paper.download.id'); // solo puede el admin

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('', 'Papers\PapersDownloadController@all'); // solo el admin puede ver todos los mensajes
        Route::delete('/{id}', 'Papers\PapersDownloadController@delete')->middleware('paper.comment.id'); // solo puede el admin
    });
});
 */

/** -----------------------------------------
 * ---------------- Projects ----------------
 * -------------------------------------- **/
/* Route::group(['prefix' => 'projects'], function () {
    Route::get('', 'Projects\ProjectController@all');
    Route::get('/{id}', 'Projects\ProjectController@find')->middleware('project.id');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('', 'Projects\ProjectController@insert')->middleware('project.data');
        Route::put('', 'Projects\ProjectController@update')->middleware('project.data', 'project.id');
        Route::delete('/{id}', 'Projects\ProjectController@delete')->middleware('project.id');
    });
}); */


/** -----------------------------------------
 * --------------- STORAGE ------------------
 * -------------------------------------- **/
/* Route::group(['prefix' => 'storage'], function () {
    Route::post('image', 'Storage\StorageController@uploadImage')->middleware('storage.image');
    Route::post('pdf', 'Storage\StorageController@uploadPdf')->middleware('storage.pdf');

    Route::group(['middleware' => 'auth:api'], function () {

    });
}); */

/**
 * para enviar todos los mensajes
 */
/* Route::group (['prefix' => '/avisos'], function () {
    Route::get('send-all', 'Avisos\AvisosController@sendAll');
}); */


/**
 * Mensajes
 */
/* Route::group (['prefix' => '/contact'], function () {
    Route::post('message', 'Avisos\MensajeController@enviarCorreo')->middleware('contact.message');
}); */
