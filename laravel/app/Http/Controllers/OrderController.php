<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\Product;
use App\Models\ProductOrder;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function store()
    {
        $this->authorize('store', Order::class);

        $order = Auth::user()->ordering();

        return response()->json([
            'content' => [
                'order_id' => $order->id,
                'message' => 'Заказ оформлен',
            ]
        ])->setStatusCode(201);
    }



    public function destroy($id)
    {

        $products = ProductOrder::where('order_id',$id)->get();
        foreach($products as $product)
        {
            $change =Product::find($product->product_id);
            $change->update(['quantity_available'=>$change->quantity_available+$product->quantity]);
        };
        Order::find($id)->delete();
    }
    
    public function index()
    {
       return new OrderCollection(Auth::user()->orders);
    }
}
