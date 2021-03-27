<?php

namespace App\Http\Controllers\Avisos;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Helpers\Avisos\Avisos;
use App\Repositories\Avisos\AvisosRepo;
use App\Mail\AvisoMail;


class AvisosController extends Controller
{
    protected $correo_negocio, $correo_soporte, $correo_cliente, $nombre_negocio, $correo_noreply, $correo_send;

    public function __construct(){
        $this->support = config('from.support');
    }

    /**
     * Envia todos los mails encolados (eestan en espera)
     */
    public function sendAll(){
        $avisos = AvisosRepo::sinEnviar();
        foreach($avisos as $aviso){
            if($this->send($aviso->from,$aviso->to,$aviso->subject,$aviso->name,$aviso->view,json_decode($aviso->data,true),$aviso->file))
                AvisosRepo::update(
                    Array(
                        "id" => $aviso->id,
                        "enviado" => true
                    )
                );
        }
    }

    private function send ($from, $to, $subject, $name, $view, $data, $file){

        try{
            Mail::to($to)->send(new AvisoMail($from, $subject, $name, $view, $data, $file));
            return true;
        }catch(\Exception $e){
            $avisos = new Avisos($this->support);
            $avisos->fatal_error('Error en la web', []);
        }

    }

}
