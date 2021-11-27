<?php

namespace App\Http\Controllers\Papers;

use App\Helpers\Factories\AvisosFactory;
use App\Helpers\Response\JSONResponse as Response;
use App\Http\Controllers\Controller;
use App\Repositories\Papers\PaperDownloadRepo;
use Illuminate\Http\Request;

class PapersDownloadController extends Controller
{
    public function all()
    {
        return Response::success(PaperDownloadRepo::all());
    }

    public function find($id)
    {
        return Response::success(PaperDownloadRepo::find($id));
    }

    public function insert(Request $request)
    {
        $data =  $request->all();
        $paperDownload = PaperDownloadRepo::insert($data);
        $avisos = AvisosFactory::init('papers', $paperDownload->email);
        $avisos->sendPaperDownload(['id' => $paperDownload->id]);
        $avisos->sendAll();
        return Response::success(PaperDownloadRepo::find($paperDownload->id));
    }

    public function update(Request $request)
    {
        $data =  $request->all();
        $paperDownload = PaperDownloadRepo::update($data['id'], $data);
        return Response::success(PaperDownloadRepo::update($data['id'], $data));
    }

    public function delete(Request $request, int $id)
    {
        $paperDownload = PaperDownloadRepo::find($id);
        PaperDownloadRepo::delete($id);
        return Response::success($paperDownload);
    }

}
