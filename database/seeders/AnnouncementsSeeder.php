<?php

namespace Database\Seeders;

use App\Models\Announcement;
use Exception;
use Faker\Factory;
use Illuminate\Database\Seeder;

class AnnouncementsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param Announcement $announcement
     * @return void
     * @throws Exception
     */
    public function run(Announcement $announcement): void
    {
        $faker = Factory::create('ru_RU');
        for ($i = 1; $i <= 100; $i++) {
            $announcement->create([
                'user_id' => random_int(1, 10),
                'category_id' => random_int(1, 13),
                'title' => $faker->realText(random_int(50, 200)),
                'content' => $faker->realText(random_int(500, 1000)),
                'price' => $faker->randomNumber(),
                'address_tran' => $faker->address(),
            ]);
        }
    }
}
