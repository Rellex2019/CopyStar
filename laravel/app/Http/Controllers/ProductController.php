<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Categories;
use App\Models\Product;



class ProductController extends Controller
{
    public function index()
    {
        return ProductResource::collection(Product::all());
    }


    public function oneProduct($id){
        return new ProductResource(Product::find($id));
    }
    public function showCategories()
    {
        return response(Categories::all());
    }
}
