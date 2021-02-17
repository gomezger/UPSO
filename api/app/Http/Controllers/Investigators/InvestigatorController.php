<?php

namespace App\Http\Controllers\Investigators;

use App\Helpers\Response\JSONResponse as Response;
use App\Http\Controllers\Controller;
use App\Repositories\Investigators\InvestigatorRepo;
use Illuminate\Http\Request;

class InvestigatorController extends Controller
{
    public function all()
    {
        return Response::success(InvestigatorRepo::all());
    }

    public function insert(Request $request)
    {
        $data =  $request->all();
        return Response::success(InvestigatorRepo::insert($data));
    }

    public function update(Request $request)
    {
        $data =  $request->all();
        return Response::success(InvestigatorRepo::update($data['id'], $data));
    }

    public function delete(Request $request, int $id)
    {
        return Response::success(InvestigatorRepo::delete($id));
    }

    public function find(Request $request, $id)
    {
        return Response::success(InvestigatorRepo::find($id));
    }
}
