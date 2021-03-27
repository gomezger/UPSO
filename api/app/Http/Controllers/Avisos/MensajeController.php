<?php
namespace App\Http\Controllers\Avisos;

use App\Http\Controllers\Controller;
use App\Helpers\Factories\AvisosFactory;
use App\Helpers\Response\Response;
use Illuminate\Http\Request;

class MensajeController extends Controller
{

    public function enviarPaper(Request $request){

        $data = $request->all();

        //enviar notificacion
        $avisos = AvisosFactory::init('papers', $data['correo']);
        $avisos->enviarPaper(
            array(
                'nombre' => $data['nombre'],
                'apellido' => $data['apellido'],
                'correo' => $data['correo'],
                'telefono' => $data['telefono'],
                'mensaje' => $data['mensaje']
            )
        );

        return Response::success('Mensaje enviado');
    }


    public function enviarCorreo(Request $request){

        $data = $request->all();

        //enviar notificacion
        $avisos = AvisosFactory::init('usuarios', $data['correo']);
        $avisos->enviarMensaje(
            array(
                'nombre' => $data['nombre'],
                'apellido' => $data['apellido'],
                'correo' => $data['correo'],
                'telefono' => $data['telefono'],
                'mensaje' => $data['mensaje']
            )
        );

        return Response::success('Mensaje enviado');
    }
}
