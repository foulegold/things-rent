<?php

namespace Database\Seeders;

use App\Models\Deal;
use Faker\Factory;
use Illuminate\Database\Seeder;

class DealsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param Deal $deal
     * @return void
     */
    public function run(Deal $deal): void
    {
        $deal->insert($this->getDataDeal());
    }

    /**
     * @return array
     */
    public function getDataDeal() : array
    {
        $faker = Factory::create('ru_RU');
        $data = [];
        for($i=1; $i <= 10; $i++) {
            $data[] = [
                'announcement_id' => $i,
                'price' => $faker->randomNumber(),
                'sum' => $faker->randomNumber(),
                'date_from' => $faker->date(),
                'date_to' => $faker->date(),
            ];
        }

        return $data;
    }
}
