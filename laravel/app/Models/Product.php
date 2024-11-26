<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'id',
        'name',
        'description',
        'price',
        'image',
        'quantity_available',
        'categories_id'
    ];
    public function categories()
    {
        return $this->belongsTo(Categories::class);
    }
}
