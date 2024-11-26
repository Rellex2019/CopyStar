<?php

namespace App\Http\Resources;

use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'products' =>$this->getIdPositions(),
            'order_price' => $this->getPrice(),
            'user'=> User::find($this->user_id),
            'status' => Order::find($this->id)->status
        ];
    }
}
