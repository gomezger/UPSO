<?php

namespace App\Http\Controllers\Storage;

use App\Helpers\File\FileUploader;
use App\Helpers\Response\JSONResponse as Response;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StorageController extends Controller
{

    public function upload(Request $request)
    {
        $file = $request->file('file', null);
        $disk = $request->input('disk', 'public');

        return Response::success(FileUploader::upload($file, $disk));
    }
}
