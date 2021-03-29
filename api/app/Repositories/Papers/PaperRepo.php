<?php

namespace App\Repositories\Papers;

use App\Models\Papers\Paper;

class PaperRepo {

    public static function find($id){
        return Paper::find($id)->load('investigators', 'comments');
    }

    public static function all(){
        return Paper::orderBy('created_at','DESC')->get()->load('investigators', 'comments');
    }

    public static function insert($data){
        return Paper::create($data);
    }

    public static function update($id, $data){
        $paper = self::find($id);
        $paper->update($data);
        return $paper;
    }

    public static function delete($id){
        $paper = self::find($id);
        $paper->delete();
        return $paper;
    }
}
