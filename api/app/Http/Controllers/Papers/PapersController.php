<?php

namespace App\Http\Controllers\Papers;

use App\Http\Controllers\Controller;
use App\Helpers\Response\JSONResponse as Response;
use App\Helpers\StringFormatter\StringFormatter;
use App\Repositories\Papers\PaperInvestigatorRepo;
use App\Repositories\Papers\PaperRepo;
use Illuminate\Http\Request;

class PapersController extends Controller
{
    public function all()
    {
        return Response::success(PaperRepo::all());
    }

    public function insert(Request $request)
    {
        $data =  $request->all();

        $data['titulo_url'] = StringFormatter::stringToUrlString($data['titulo']); // agrego titulo_url
        $paper = PaperRepo::insert($data); // agrego el paper
        PaperInvestigatorRepo::insertCollection($data['investigators'], $paper->id); // agrego los investigadores

        return Response::success(PaperRepo::find($paper->id));
    }

    public function update(Request $request)
    {
        $data =  $request->all();
        $data['titulo_url'] = StringFormatter::stringToUrlString($data['titulo']);

        PaperInvestigatorRepo::deleteByPaper($data['id']); // elimino los investigadores actuales
        $paper = PaperRepo::update($data['id'], $data); // actualizo los datos actuales del paper
        PaperInvestigatorRepo::insertCollection($data['investigators'], $paper->id); // agrego los investigadores

        return Response::success(PaperRepo::update($data['id'], $data));
    }

    public function delete(Request $request, int $id)
    {
        $paper = PaperRepo::find($id);
        PaperInvestigatorRepo::deleteByPaper($id); // elimino los investigadores
        PaperRepo::delete($id); // elimino el paper
        return Response::success($paper);
    }

    public function find(Request $request, $id)
    {
        return Response::success(PaperRepo::find($id));
    }


}
