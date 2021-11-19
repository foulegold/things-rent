<?php

namespace Database\Seeders;

use App\Models\ContactsType;
use Exception;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ContactsTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param ContactsType $contactsType
     * @return void
     * @throws Exception
     */
    public function run(ContactsType $contactsType): void
    {
        $contactsType->insert($this->getDataContacts_type());
    }

    /**
     * @return array
     * @throws Exception
     */
    public function getDataContacts_type(): array
    {
        $faker = Factory::create('ru_RU');
        $data = [];
        for ($i = 0; $i < 10; $i++) {
            $data[] = [
                'title' => $faker->realText(random_int(50, 100)),
                'regular_mask' => $faker->realText(random_int(100, 200)),
            ];
        }

        return $data;
    }
}
