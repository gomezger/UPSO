<?php

namespace App\Models\Investigators;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Investigator extends Model
{
    use HasFactory;

    protected $table = 'investigadores';
    protected $fillable = ['id', 'nombre', 'titulo', 'imagen', 'descripcion', 'linkedin', 'pagina', 'mail'];
}
