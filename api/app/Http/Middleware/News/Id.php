<?php

namespace App\Http\Middleware\News;

use App\Helpers\Validator\Validator;
use Closure;
use Illuminate\Http\Request;

class Id
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        $id = (isset($request->all()['id']))
            ? $request->all()['id']
            : $request->route('id', null);

        Validator::validator(
            ["id" => $id],
            ["id" => 'required|exists:news,id']
        );

        return $next($request);
    }
}
