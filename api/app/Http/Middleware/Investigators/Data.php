<?php

namespace App\Http\Middleware\Investigators;

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
                'nombre'       => 'required|string|max:191',
                'imagen'       => 'required|string|max:191',
                'linkedin'       => 'nullable|url|string|max:191',
                'pagina'       => 'nullable|url|string|max:191',
                'mail'       => 'required|email|string|max:191',
                'imagen'       => 'required|string|max:191',
                'descripcion' => 'required|string|max:191',
                'show' => 'required|boolean|max:191'
            )
        );

        return $next($request);
    }
}
