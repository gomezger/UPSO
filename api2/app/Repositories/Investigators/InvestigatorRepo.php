<?php

namespace App\Repositories\Investigators;

use App\Models\Investigators\Investigator;

class InvestigatorRepo {

    public static function find($id){
        return Investigator::find($id)->load('papers');
    }

    public static function all(){
        return Investigator::orderBy('nombre','ASC')->get();
    }

    public static function insert($data){
        return Investigator::create($data);
    }

    public static function update($id, $data){
        $investigator = self::find($id);
        $investigator->update($data);
        return $investigator;
    }

    public static function delete($id){
        $investigator = self::find($id);
        $investigator->delete();
        return $investigator;
    }
}
