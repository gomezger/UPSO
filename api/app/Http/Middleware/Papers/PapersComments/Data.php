<?php

namespace App\Http\Middleware\Papers\PapersComments;

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

        $data = $request->all();

        Validator::validator(
            $data,
            array(
                'nombre'       => 'required|string|max:191',
                'email'       => 'required|email|string|max:191',
                'profesion'       => 'required|string|max:191',
                'descripcion' => 'required|string',
                'paper_id' => 'required|exists:papers,id'
            )
        );

        return $next($request);
    }
}
