<?php

namespace App\Models\Papers;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaperDownload extends Model
{
    use HasFactory;

    protected $table = 'papers_downloads';
    protected $fillable = ['id', 'paper_id', 'nombre', 'email', 'profesion', 'nacimiento', 'download'];


    public function paper()
    {
        return $this->belongsTo(Paper::class, 'paper_id','id');
    }
}
