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
        $categories = [
            'Автомобили',
            'Недвижимость',
            'Одежда и обувь',
            'Детские товары',
            'Красота и здоровье',
            'Украшения',
            'Электроника',
            'Игры и приставки',
            'Книги и журналы',
            'Фототехника',
            'Товары для животных',
            'Другое',
        ];

        $faker = Factory::create('ru_RU');
        $data = [];
        foreach ($categories as $category) {
            $data[] = [
                'title' => $category,
                'description' => $faker->realText(random_int(300,500)),
            ];
        }

        return $data;
    }
}
