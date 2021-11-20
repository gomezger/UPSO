<?php

namespace App\Models\Papers;

use App\Models\Investigators\Investigator;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paper extends Model
{
    use HasFactory;

    protected $table = 'papers';
    protected $fillable = ['id', 'titulo', 'titulo_url', 'pdf', 'descripcion'];


    public function investigators()
    {
        return $this->belongsToMany(Investigator::class, 'papers_investigators', 'paper_id', 'investigator_id');
    }

    public function comments()
    {
        return $this->hasMany(PaperComment::class)->where('aprobado', '>', '0')->orderBy('created_at', 'ASC');
    }
}
