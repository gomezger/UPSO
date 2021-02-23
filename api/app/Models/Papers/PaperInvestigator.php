<?php

namespace App\Models\Papers;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaperInvestigator extends Model
{
    use HasFactory;

    protected $table = 'papers_investigators';
    protected $fillable = ['id', 'paper_id', 'investigator_id'];
}
