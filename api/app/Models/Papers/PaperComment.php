<?php

namespace App\Models\Papers;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaperComment extends Model
{
    use HasFactory;

    protected $table = 'papers_comments';
    protected $fillable = ['id', 'paper_id', 'nombre', 'email', 'profesion', 'descripcion', 'aprobado'];


    public function paper()
    {
        return $this->belongsTo(Paper::class, 'paper_id','id');
    }
}
