<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            CategoriesSeeder::class,
            RoleSeeder::class,
            UserSeeder::class,
            ProductSeeder::class,
            ProductCartSeeder::class,
            OrderSeeder::class
        ]);
    }
}
