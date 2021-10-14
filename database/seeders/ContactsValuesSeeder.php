<?php

namespace Database\Seeders;

use App\Models\Contacts_value;
use Exception;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ContactsValuesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param Contacts_value $contacts_value
     * @return void
     * @throws Exception
     */
    public function run(Contacts_value $contacts_value): void
    {
        $contacts_value->insert($this->getDataContacts_value());
    }

    /**
     * @return array
     * @throws Exception
     */
    public function getDataContacts_value() : array
    {
        $faker = Factory::create('ru_RU');
        $data = [];
        for($i=1; $i <= 10; $i++) {
            $data[] = [
                'user_id' => $i,
                'contacts_type_id' => $i,
                'value' => $faker->realText(random_int(10,20)),
                'description' => $faker->realText(random_int(100,200)),
            ];
        }

        return $data;
    }
}
