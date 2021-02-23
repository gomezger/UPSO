<?php

namespace App\Http\Controllers\Projects;

use App\Helpers\Response\JSONResponse as Response;
use App\Helpers\StringFormatter\StringFormatter;
use App\Http\Controllers\Controller;
use App\Repositories\Projects\ProjectInvestigatorRepo;
use App\Repositories\Projects\ProjectRepo;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function all()
    {
        return Response::success(ProjectRepo::all());
    }

    public function insert(Request $request)
    {
        $data =  $request->all();

        $data['titulo_url'] = StringFormatter::stringToUrlString($data['titulo']); // agrego titulo_url
        $project = ProjectRepo::insert($data); // agrego el paper
        ProjectInvestigatorRepo::insertCollection($data['investigators'], $project->id); // agrego los investigadores

        return Response::success(ProjectRepo::find($project->id));
    }

    public function update(Request $request)
    {

        $data =  $request->all();
        $data['titulo_url'] = StringFormatter::stringToUrlString($data['titulo']);

        ProjectInvestigatorRepo::deleteByProject($data['id']); // elimino los investigadores actuales
        $project = ProjectRepo::update($data['id'], $data); // actualizo los datos actuales del paper
        ProjectInvestigatorRepo::insertCollection($data['investigators'], $project->id); // agrego los investigadores

        return Response::success(ProjectRepo::update($data['id'], $data));
    }

    public function delete(Request $request, int $id)
    {
        $project = ProjectRepo::find($id);
        ProjectInvestigatorRepo::deleteByProject($id); // elimino los investigadores
        ProjectRepo::delete($id); // elimino el paper
        return Response::success($project);
    }

    public function find(Request $request, $id)
    {
        return Response::success(ProjectRepo::find($id));
    }

}
