<?php

namespace App\Repositories\News;

use App\Models\News\News as NewsItem;

class News {

    public static function find($id){
        return NewsItem::find($id);
    }

    public static function all(){
        return NewsItem::orderBy('created_at','DESC')->get();
    }

    public static function insert($data){
        return NewsItem::create($data);
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
