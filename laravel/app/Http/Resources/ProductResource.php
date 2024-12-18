<?php

namespace App\Http\Resources;

use App\Models\Categories;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{

    public function toArray($request)
    {
        return [
          'id'=>$this->id,
          'name'=>$this->name,
          'description'=>$this->description,
          'price'=>(int)$this->price,
          'quantity'=>(int)$this->quantity_available,
          'categories'=> Categories::find($this->categories_id)->name,
          'image'=>$this->image
        ];
    }
}
