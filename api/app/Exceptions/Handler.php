<?php

namespace App\Exceptions;

use App\Helpers\Avisos\Avisos;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var string[]
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var string[]
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

      /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        if ($exception instanceof \App\Exceptions\ExceptionManager) {
            return \App\Helpers\Response\JSONResponse::error($exception->getErrorCode(), $exception->getErrors());

        }else if ($exception->getMessage() !== '' && $exception->getMessage() !== 'Unauthenticated') {

            $avisos = new Avisos(config('mail.from.support'));
            $avisos->fatal_error(
                'Error en la web',
                [
                    'message' => $exception->getMessage(),
                    'code' => $exception->getCode(),
                    'file' => $exception->getFile(),
                    'line' => $exception->getLine(),
                    'trace' => $exception->getTrace(),
                    'trace_string' => $exception->getTraceAsString(),
                ]
            );
        }
        return parent::render($request, $exception);
    }
}
