<?php
namespace App\Exceptions\Envios;
 
use App\Exceptions\ExceptionManager;

class EnvioException extends ExceptionManager{

    public function __construct($errors){
        parent::__construct(400, "Error en Envios", $errors);
    }
       
}