<?php

namespace App\Models\Investigators;

use App\Models\Papers\Paper;
use App\Models\Papers\PaperInvestigator;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Investigator extends Model
{
    use HasFactory;

    protected $table = 'investigadores';
    protected $fillable = ['id', 'nombre', 'titulo', 'imagen', 'descripcion', 'linkedin', 'pagina', 'mail'];


    public function papers()
    {
        return $this->belongsToMany(Paper::class, 'papers_investigators', 'investigator_id', 'paper_id');
    }
}
