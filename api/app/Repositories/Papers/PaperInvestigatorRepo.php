<?php

namespace App\Repositories\Papers;

use App\Models\Papers\PaperInvestigator;
use App\Repositories\Papers\PaperRepo;

class PaperInvestigatorRepo
{

    public static function find($id)
    {
        return PaperInvestigator::find($id);
    }

    public static function findByIds($paper_id, $investigator_id)
    {
        return PaperInvestigator::where("paper_id", "=", $paper_id)->where("investigator_id", "=", $investigator_id)->first();
    }

    public static function all()
    {
        return PaperInvestigator::orderBy('created_at', 'DESC')->get();
    }

    public static function insert($data)
    {
        return PaperInvestigator::create($data);
    }

    public static function insertCollection($data, $paper_id)
    {
        foreach ($data as $investigator)
            self::insert(["paper_id" => $paper_id, "investigator_id" => $investigator['id']]);
    }

    public static function update($id, $data)
    {
        $paperInvestigator = self::find($id);
        $paperInvestigator->update($data);
        return $paperInvestigator;
    }

    public static function delete($id)
    {
        $paperInvestigator = self::find($id);
        $paperInvestigator->delete();
        return $paperInvestigator;
    }

    public static function deleteByPaper($paper_id)
    {
        $paper = PaperRepo::find($paper_id);
        foreach ($paper->investigators as $investigator) {
            $paperInvestigator = self::findByIds($paper_id, $investigator->id);
            self::delete($paperInvestigator->id);
        }
        return self::find($paper_id);
    }
}
