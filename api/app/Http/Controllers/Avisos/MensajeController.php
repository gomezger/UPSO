<?php
namespace App\Http\Controllers\Avisos;

use App\Http\Controllers\Controller;
use App\Helpers\Factories\AvisosFactory;
use App\Helpers\Response\Response;
use Illuminate\Http\Request;

class MensajeController extends Controller
{

      public function enviarCorreo(Request $request){

        $data = $request->all();

        //enviar notificacion
        $avisos = AvisosFactory::init('contact', $data['correo']);
        $avisos->sendContactMessage(
            array(
                'nombre' => $data['nombre'],
                'apellido' => $data['apellido'],
                'correo' => $data['correo'],
                'telefono' => $data['telefono'],
                'mensaje' => $data['mensaje']
            )
        );
        $avisos->sendAll();
        return Response::success('Mensaje enviado');
    }
}
