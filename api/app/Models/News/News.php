<?php

namespace App\Models\Models\News;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $table = 'news';
    protected $fillable = ['id', 'titulo', 'imagen', 'descripcion'];

}
