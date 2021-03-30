<?php

namespace App\Http\Middleware\Avisos;

use App\Helpers\Validator\Validator;
use Closure;
use Illuminate\Http\Request;

class Message
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
                'nombre'       => 'required|string|max:191',
                'correo'       => 'required|string|max:191',
                'telefono'       => 'required|string|max:191',
                'mensaje' => 'required|string'
            )
        );

        return $next($request);
    }
}
