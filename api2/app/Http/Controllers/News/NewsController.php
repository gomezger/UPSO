<?php

namespace App\Http\Controllers\News;

use App\Helpers\Response\JSONResponse as Response;
use App\Helpers\StringFormatter\StringFormatter;
use App\Http\Controllers\Controller;
use App\Repositories\News\News as NewsRepo;
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
        $data['titulo_url'] = StringFormatter::stringToUrlString($data['titulo']);
        return Response::success(NewsRepo::insert($data));
    }

    public function update(Request $request)
    {
        $data =  $request->all();
        $data['titulo_url'] = StringFormatter::stringToUrlString($data['titulo']);
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


}
