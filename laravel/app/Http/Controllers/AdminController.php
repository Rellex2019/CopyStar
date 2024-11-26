<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\OrderCollection;
use App\Models\Categories;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Cache\Repository;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{

    public function showAllOrder()
    {
        return new OrderCollection(Order::all());
    }

    public function changeStatus($id, Request $request)
    {
        Order::find($id)->update(['status'=>$request->status]);
        return response('Статус изменен',200);
    }

    public function deleteCategory($id){
        Categories::find($id)->delete();
    }

    public function storeCategory(Request $request){
        $category = Categories::create($request->only(['name']));

        return response()->json($category, 201);
        return response($request);
    }

    public function isRole()
    {
         $user = Auth::user()->role->code;
         return response($user);
    }

    public function store(ProductRequest $request)
    {   


        // $product = Product::factory()->create($request->all());


        $product = new Product($request->all());

        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
            $product->image = 'images/' . $imageName;
        }
        $product->save();


        return response()->json([
            'content' => [
                'id' => $product->id,
                'message' => 'Товар добавлен',
                'product' => $product
            ]
        ])->setStatusCode(201);
    }

    public function remove(Product $product)
    {
        $product->delete();
        return [
            'content' => [
                'message' => 'Товар удален',
            ]
        ];
    }

    public function update($product,Request $request)
    {
        $product = Product::find($product);
        // if ($request->hasFile('image')) {
        //     $imageName = time() . '.' . $request->image->extension();
        //     $request->image->move(public_path('images'), $imageName);
        //     $img_url = 'images/' . $imageName;    
        //     $product->update(['image'=>$img_url]);
        // }
        if($request->quantity)
        {
            $product->update(['quantity_available'=>$request->quantity]);
        }
        $product->update($request->all());


        return [
            'content' => [
                'id' => $product->id,
                'message' => 'Данные обновлены',
                'product' => $product
            ]
        ];
    }

}
