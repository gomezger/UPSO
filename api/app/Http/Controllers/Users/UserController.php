<?php

namespace App\Http\Controllers\Users;

use App\Helpers\Response\Response;
use App\Http\Controllers\Controller;
use App\Repositories\Users\UserRepo;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function all()
    {
        $users = UserRepo::all();
        return Response::success('Usuarios', 'users', $users);
    }

    public function delete(Request $request)
    {
        $user = UserRepo::delete($request->all()['email']);
        return Response::success('Usuario eliminado', 'user', $user);
    }


    public function update(Request $request)
    {
        $data =  $request->all();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        return Response::success('Usuario actualizado', 'user', UserRepo::update($data['id'], $data));
    }

    public function insert(Request $request)
    {
        $data =  $request->all();
        $data['password'] = bcrypt($data['password']);
        return Response::success('Usuario actualizado', 'user', UserRepo::insert($data));
    }

    public function userById(Request $request, $id)
    {
        return Response::success('Usuario existente', 'user', UserRepo::find($id));
    }
}
