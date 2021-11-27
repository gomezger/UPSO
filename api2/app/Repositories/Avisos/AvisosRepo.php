<?php

namespace App\Repositories\Avisos;

use App\models\avisos\Aviso;

class AvisosRepo {

    public static function find($id){
        return Aviso::find($id);
    }

    public static function all(){
        return Aviso::all();
    }

    public static function sinEnviar(){
        return Aviso::where('enviado','0')->get();
    }

    public static function insert($params){
        return Aviso::create($params);
    }

    public static function update($params){
        $aviso = self::find($params['id']);
        $aviso->update($params);
        return self::find($params['id']);
    }

}
