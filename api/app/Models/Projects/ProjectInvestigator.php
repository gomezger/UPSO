<?php

namespace App\Models\Projects;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectInvestigator extends Model
{
    use HasFactory;

    protected $table = 'projects_investigators';
    protected $fillable = ['id', 'project_id', 'investigator_id'];
}
