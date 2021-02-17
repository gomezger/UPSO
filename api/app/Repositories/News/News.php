<?php

namespace App\Repositories\News;

use App\Models\News\News;

class NewsRepo {

    public static function find($id){
        return News::find($id);
    }

    public static function all(){
        return News::orderBy('created_at','DESC')->get();
    }

    public static function insert($data){
        return News::create($data);
    }

    public static function update($id, $data){
        $news = self::find($id);
        $news->update($data);
        return $news;
    }

    public static function delete($id){
        $news = self::find($id);
        $news->delete();
        return $news;
    }
}
