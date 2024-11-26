<?php

namespace App\Http\Resources;

use App\Models\Product;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductCartResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'product_id' => $this->product->id,
            'name' => $this->product->name,
            'price' => (int)$this->product->price,
            'quantity' => (int)$this->quantity,
            'image'=> Product::find($this->product->id)->image
        ];
    }
}
