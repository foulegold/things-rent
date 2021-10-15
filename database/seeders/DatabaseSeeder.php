<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UsersSeeder::class,
            UsersInfosSeeder::class,
            CategoriesSeeder::class,
            AnnouncementsSeeder::class,
            DealsSeeder::class,
            ReviewsSeeder::class,
            ReservationsSeeder::class,
            ContactsTypesSeeder::class,
            ContactsValuesSeeder::class,
        ]);
    }
}
