<?php

namespace App\Http\Controllers\Papers;

use App\Helpers\Response\JSONResponse as Response;
use App\Http\Controllers\Controller;
use App\Repositories\Papers\PaperCommentRepo;
use Illuminate\Http\Request;

class PapersCommentsController extends Controller
{
    public function all()
    {
        return Response::success(PaperCommentRepo::all());
    }

    public function insert(Request $request)
    {
        $data =  $request->all();
        $paperComment = PaperCommentRepo::insert($data);
        return Response::success(PaperCommentRepo::find($paperComment->id));
    }

    public function update(Request $request)
    {
        $data =  $request->all();
        $paperComment = PaperCommentRepo::update($data['id'], $data);
        return Response::success(PaperCommentRepo::update($data['id'], $data));
    }

    public function delete(Request $request, int $id)
    {
        $paperComment = PaperCommentRepo::find($id);
        PaperCommentRepo::delete($id);
        return Response::success($paperComment);
    }

}
