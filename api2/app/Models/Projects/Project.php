<?php

namespace App\Models\Projects;

use App\Models\Investigators\Investigator;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';
    protected $fillable = ['id', 'titulo', 'titulo_url', 'subtitulo', 'descripcion'];


    public function investigators()
    {
        return $this->belongsToMany(Investigator::class, 'projects_investigators', 'project_id', 'investigator_id');
    }

}
