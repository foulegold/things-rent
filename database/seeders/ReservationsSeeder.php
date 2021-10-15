<?php

namespace Database\Seeders;

use App\Models\Reservation;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ReservationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param Reservation $reservation
     * @return void
     */
    public function run(Reservation $reservation): void
    {
        $reservation->insert($this->getDataReservation());
    }

    /**
     * @return array
     */
    public function getDataReservation() : array
    {
        $faker = Factory::create('ru_RU');
        $data = [];
        for($i=1; $i <= 10; $i++) {
            $data[] = [
                'user_id' => $i,
                'announcement_id' => $i,
                'date_from' => $faker->unique()->date(),
                'date_to' => $faker->unique()->date(),
            ];
        }

        return $data;
    }
}
