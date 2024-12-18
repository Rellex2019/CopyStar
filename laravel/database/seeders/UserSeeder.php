<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'login' => 'admin',
            'password' => 'QWEasd123',
            'role_id' => Role::where('code', 'admin')->first()->id
        ]);

        User::factory()->create([
            'login' => 'user',
            'role_id' => Role::where('code', 'user')->first()->id
        ]);

        User::factory()->count(10)->create([
            'role_id' => Role::where('code', 'user')->first()->id
        ]);
    }
}
