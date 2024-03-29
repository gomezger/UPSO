<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        // \App\Http\Middleware\TrustHosts::class,
        \App\Http\Middleware\TrustProxies::class,
        \Fruitcake\Cors\HandleCors::class,
        \App\Http\Middleware\CheckForMaintenanceMode::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \App\Http\Middleware\TrimStrings::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            // \Illuminate\Session\Middleware\AuthenticateSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

        'api' => [
            'throttle:60,1',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,

        //auth
        'auth.login' => \App\Http\Middleware\Auth\LoginMiddleware::class,
        'auth.signup' => \App\Http\Middleware\Auth\SignupMiddleware::class,

        //user
        'user.data' => \App\Http\Middleware\Auth\UserData::class,
        'user.password' => \App\Http\Middleware\Auth\UserPassword::class,
        'user.email' => \App\Http\Middleware\Auth\UserEmail::class,
        'user.email.repeat' => \App\Http\Middleware\Auth\UserEmailRepeat::class,

        //news
        'news.data' => \App\Http\Middleware\News\Data::class,
        'news.id' => \App\Http\Middleware\News\Id::class,

        //investigators
        'investigator.data' => \App\Http\Middleware\Investigators\Data::class,
        'investigator.id' => \App\Http\Middleware\Investigators\Id::class,

        //papers
        'paper.data' => \App\Http\Middleware\Papers\Data::class,
        'paper.id' => \App\Http\Middleware\Papers\Id::class,

        //papers comments
        'paper.comment.data' => \App\Http\Middleware\Papers\PapersComments\Data::class,
        'paper.comment.id' => \App\Http\Middleware\Papers\PapersComments\Id::class,

        //papers downloads
        'paper.download.data' => \App\Http\Middleware\Papers\PapersDownloads\Data::class,
        'paper.download.id' => \App\Http\Middleware\Papers\PapersDownloads\Id::class,

        //projects
        'project.data' => \App\Http\Middleware\Projects\Data::class,
        'project.id' => \App\Http\Middleware\Projects\Id::class,

        //storage
        'storage.image' => \App\Http\Middleware\Storage\Image::class,
        'storage.pdf' => \App\Http\Middleware\Storage\PDF::class,

        //message
        'contact.message' => \App\Http\Middleware\Avisos\Message::class,

    ];
}
