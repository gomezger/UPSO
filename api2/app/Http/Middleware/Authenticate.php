<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Closure;
use App\Helpers\Response\JSONResponse as Response;
use Illuminate\Support\Facades\Auth;

class Authenticate extends Middleware
{
    // /**
    //  * Get the path the user should be redirected to when they are not authenticated.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return string|null
    //  */
    // protected function redirectTo($request)
    // {
    //     if (! $request->expectsJson()) {
    //         return route('login');
    //     }
    // }

    public function handle($request, Closure $next, ...$guards)
    {
        if (Auth::guard('api')->check()) {
            return $next($request);
        }
        return Response::error("401", ['No inició sesión']);
    }
}
