<?php

namespace App\Repositories\Papers;

use App\Models\Papers\PaperComment;

class PaperCommentRepo {

    public static function find($id){
        return PaperComment::find($id)->load('paper');
    }

    public static function all(){
        return PaperComment::orderBy('created_at','ASC')->get()->load('paper');
    }

    public static function insert($data){
        return PaperComment::create($data);
    }

    public static function update($id, $data){
        $paperComment = self::find($id);
        $paperComment->update($data);
        return $paperComment;
    }

    public static function delete($id){
        $paperComment = self::find($id);
        $paperComment->delete();
        return $paperComment;
    }
}
