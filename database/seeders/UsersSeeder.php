<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param User $user
     * @return void
     */
    public function run(User $user): void
    {
        $user->insert($this->getDataUser());
    }

    /**
     * Пароль для каждого пользователя - 12345678
     * @return array
     */
    public function getDataUser() : array
    {
        $faker = Factory::create('ru_RU');
        $data = [];
        for($i=0; $i < 10; $i++) {
            $data[] = [
                'email' => $faker->unique()->email(),
                'email_verified_at' => '2021-10-14 07:20:21',
                'password' => '$2y$10$VU9X7y2AqMtm1Z5a/J0JcOS2mVx70KiYOCgbWvonZUZDap7xlHVB6'
            ];
        }

        return $data;
    }
}
