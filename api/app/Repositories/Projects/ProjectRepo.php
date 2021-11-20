<?php

namespace App\Repositories\Projects;

use App\Models\Projects\Project;

class ProjectRepo {

    public static function find($id){
        return Project::find($id)->load('investigators');
    }

    public static function all(){
        return Project::orderBy('created_at','DESC')->get()->load('investigators');
    }

    public static function insert($data){
        return Project::create($data);
    }

    public static function update($id, $data){
        $project = self::find($id);
        $project->update($data);
        return $project;
    }

    public static function delete($id){
        $project = self::find($id);
        $project->delete();
        return $project;
    }
}
