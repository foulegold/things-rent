<?php

namespace Database\Seeders;

use App\Models\Category;
use Exception;
use Faker\Factory;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param Category $category
     * @return void
     * @throws Exception
     */
    public function run(Category $category): void
    {
        $category->insert($this->getDataCategory());
    }

    /**
     * @return array
     * @throws Exception
     */
    public function getDataCategory() : array
    {
        $faker = Factory::create('ru_RU');
        $data = [];
        for($i=0; $i < 10; $i++) {
            $data[] = [
                'title' => $faker->realText(10),
                'description' => $faker->realText(random_int(300,500)),
            ];
        }

        return $data;
    }
}
