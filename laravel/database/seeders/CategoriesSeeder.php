<?php

namespace Database\Seeders;

use App\Models\Categories;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Categories::factory()->create([
            'name'=>'лазерный'
        ]);
        Categories::factory()->create([
            'name'=>'струйный'
        ]);
        Categories::factory()->create([
            'name'=>'термо'
        ]);
    }
}
