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


}
