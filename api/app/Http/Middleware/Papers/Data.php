<?php

namespace App\Http\Middleware\Papers;

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
                'titulo'       => 'required|string|max:191',
                'pdf'       => 'required|string|max:191',
                'descripcion' => 'required|string|max:191',
                'investigators' => 'required'
            )
        );

        foreach ($data['investigators'] as $investigator) {

            Validator::validator(
                [
                    "id" => $investigator['id']
                ],
                [
                    "id" => 'required|exists:investigadores,id'
                ]
            );
        }

        return $next($request);
    }
}
