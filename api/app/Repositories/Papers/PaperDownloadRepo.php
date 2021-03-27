<?php

namespace App\Repositories\Papers;

use App\Models\papers\paperDownload;

class PaperDownloadRepo {

    public static function find($id){
        return paperDownload::find($id)->load('paper');
    }

    public static function all(){
        return PaperDownload::orderBy('created_at','ASC')->get()->load('paper');
    }

    public static function insert($data){
        return PaperDownload::create($data);
    }

    public static function update($id, $data){
        $paperDownload = self::find($id);
        $paperDownload->update($data);
        return $paperDownload;
    }

    public static function delete($id){
        $paperDownload = self::find($id);
        $paperDownload->delete();
        return $paperDownload;
    }
}
