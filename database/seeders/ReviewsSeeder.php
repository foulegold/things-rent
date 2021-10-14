<?php

namespace Database\Seeders;

use App\Models\Review;
use Exception;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ReviewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param Review $review
     * @return void
     * @throws Exception
     */
    public function run(Review $review): void
    {
        $review->insert($this->getDataReview());
    }

    /**
     * @return array
     * @throws Exception
     */
    public function getDataReview() : array
    {
        $faker = Factory::create('ru_RU');
        $data = [];
        for($i=1; $i <= 10; $i++) {
            $data[] = [
                'user_id' => $i,
                'deals_id' => $i,
                'review' => $faker->unique()->realText(random_int(100,200)),
                'rating' => $i,
            ];
        }

        return $data;
    }
}
