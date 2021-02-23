<?php

namespace App\Repositories\Projects;

use App\Models\Projects\ProjectInvestigator;

class ProjectInvestigatorRepo
{

    public static function find($id)
    {
        return ProjectInvestigator::find($id);
    }

    public static function findByIds($project_id, $investigator_id)
    {
        return ProjectInvestigator::where("project_id", "=", $project_id)->where("investigator_id", "=", $investigator_id)->first();
    }

    public static function all()
    {
        return ProjectInvestigator::orderBy('created_at', 'DESC')->get();
    }

    public static function insert($data)
    {
        return ProjectInvestigator::create($data);
    }

    public static function insertCollection($data, $project_id)
    {
        foreach ($data as $investigator)
            self::insert(["project_id" => $project_id, "investigator_id" => $investigator['id']]);
    }

    public static function update($id, $data)
    {
        $projectInvestigator = self::find($id);
        $projectInvestigator->update($data);
        return $projectInvestigator;
    }

    public static function delete($id)
    {
        $projectInvestigator = self::find($id);
        $projectInvestigator->delete();
        return $projectInvestigator;
    }

    public static function deleteByProject($project_id)
    {
        $project = ProjectRepo::find($project_id);
        foreach ($project->investigators as $investigator) {
            $projectInvestigator = self::findByIds($project_id, $investigator->id);
            self::delete($projectInvestigator->id);
        }
        return self::find($project_id);
    }
}
