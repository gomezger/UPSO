<?php

namespace App\Helpers\Factories;

use App\Exceptions\Envios\EnvioException;
use App\Helpers\Avisos\AvisosContacto;
use App\Helpers\Avisos\AvisosPaper;

class AvisosFactory {

    /**
     *
     */
    public static function init($tipo, $user){


        switch($tipo) {
            case 'papers':
                return new AvisosPaper($user);
            break;
            case 'contact':
                return new AvisosContacto($user);
            break;
            default:
                return 'hola'; //throw new EnvioException(["El aviso ". $tipo . " no existe"]);
            break;
        }

    }
}
