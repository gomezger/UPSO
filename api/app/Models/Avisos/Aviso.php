<?php

namespace App\models\avisos;

use Illuminate\Database\Eloquent\Model;

class Aviso extends Model
{
    protected $table = 'avisos';
    protected $fillable = ['id','from', 'to', 'subject', 'name', 'view', 'data','enviado', 'file'];
}
