<?php

namespace App\Http\Middleware\News;

use App\Helpers\Validator\Validator;
use Closure;
use Illuminate\Http\Request;

class Data
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
        Validator::validator(
            $request->all(),
            array(
                'titulo'       => 'required|string|max:191',
                'imagen'       => 'required|string|max:191',
                'descripcion' => 'required|string',
                'show'       => 'nullable|boolean',
            )
        );

        return $next($request);
    }
}
