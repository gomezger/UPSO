<?php

namespace App\Http\Controllers\News;

use App\Helpers\Response\JSONResponse as Response;
use App\Http\Controllers\Controller;
use App\Repositories\News\NewsRepo;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function all()
    {
        return Response::success(NewsRepo::all());
    }

    public function insert(Request $request)
    {
        $data =  $request->all();
        $data['titulo_url'] = $this->replace_specials_characters($data['titulo']);
        return Response::success(NewsRepo::insert($data));
    }

    public function update(Request $request)
    {
        $data =  $request->all();
        $data['titulo_url'] = $this->replace_specials_characters($data['titulo']);
        return Response::success(NewsRepo::update($data['id'], $data));
    }

    public function delete(Request $request, int $id)
    {
        return Response::success(NewsRepo::delete($id));
    }

    public function find(Request $request, $id)
    {
        return Response::success(NewsRepo::find($id));
    }

    private function replace_specials_characters($s)
    {
        $s = preg_replace("/á|à|â|ã|ª/", "a", $s);
        $s = preg_replace("/Á|À|Â|Ã/", "A", $s);
        $s = preg_replace("/é|è|ê/", "e", $s);
        $s = preg_replace("/É|È|Ê/", "E", $s);
        $s = preg_replace("/í|ì|î/", "i", $s);
        $s = preg_replace("/Í|Ì|Î/", "I", $s);
        $s = preg_replace("/ó|ò|ô|õ|º/", "o", $s);
        $s = preg_replace("/Ó|Ò|Ô|Õ/", "O", $s);
        $s = preg_replace("/ú|ù|û/", "u", $s);
        $s = preg_replace("/Ú|Ù|Û/", "U", $s);
        $s = str_replace(" ", "-", $s);
        $s = str_replace("ñ", "n", $s);
        $s = str_replace("Ñ", "N", $s);
        $s = str_replace("'", "", $s);
        $s = str_replace('"', '', $s);
        $s = preg_replace('/[^a-zA-Z0-9_.-]/', '', $s);
        return strtolower($s);
    }
}
