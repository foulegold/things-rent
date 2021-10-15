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
        $announcement->insert($this->getDataAnnouncement());
    }

    /**
     * @return array
     * @throws Exception
     */
    public function getDataAnnouncement() : array
    {
        $faker = Factory::create('ru_RU');
        $data = [];
        for($i=1; $i <= 10; $i++) {
            $data[] = [
                'user_id' => $i,
                'category_id' => $i,
                'title' => $faker->realText(random_int(50,200)),
                'content' => $faker->realText(random_int(500,1000)),
                'price' => $faker->randomNumber(),
                'address_tran' => $faker->address(),
            ];
        }

        return $data;
    }
}
