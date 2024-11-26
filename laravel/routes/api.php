<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductCartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/login', [UserController::class, 'login']);
Route::post('/signup', [UserController::class, 'signup']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/product/{id}', [ProductController::class, 'oneProduct']);
Route::post('/change', [ProductCartController::class, 'changeQuantity']);
Route::get('/categories', [ProductController::class, 'showCategories']);




Route::middleware(['auth:api'])->group(function () {

    Route::get('/role', [AdminController::class, 'isRole']);


    Route::get('/logout', [UserController::class, 'logout'])->middleware(['auth:api']);

    Route::prefix('cart')->group(function () {
    Route::post('/{product}', [ProductCartController::class, 'addProduct']);
    Route::get('/', [ProductCartController::class, 'show']);
    Route::delete('/{productCart}', [ProductCartController::class, 'remove']);
    Route::get('/max/{id}', [ProductCartController::class, 'maxQuantity']);

    });
    Route::prefix('order')->group(function () {
        Route::post('/', [OrderController::class, 'store']);
        Route::get('/', [OrderController::class, 'index']);
        Route::delete('/{id}', [OrderController::class, 'destroy']);
    });






    Route::middleware(['can:isAdmin,App\Models\User'])->group(function () {

        Route::prefix('product')->group(function () {
            Route::post('/', [AdminController::class, 'store']);
            Route::delete('/{product}', [AdminController::class, 'remove']);
            Route::patch('/{product}', [AdminController::class, 'update']);
        });
        Route::prefix('admin')->group(function () {
            Route::get('/order', [AdminController::class, 'showAllOrder']);
            Route::patch('/order/change/{id}', [AdminController::class, 'changeStatus']);


            Route::delete('/categories/delete/{id}', [AdminController::class, 'deleteCategory']);  
            Route::post('/categories/add', [AdminController::class, 'storeCategory']);    
        });

    });

});
