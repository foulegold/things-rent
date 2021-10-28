<?php

namespace App\Providers;

use App\Services\Api\Fortify\LoginResponseService;
use App\Services\Api\Fortify\LogoutResponseService;
use App\Services\Api\Fortify\RegisterResponseService;
use Illuminate\Support\ServiceProvider;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Laravel\Fortify\Contracts\LogoutResponse as LogoutResponseContract;
use Laravel\Fortify\Contracts\RegisterResponse as RegisterResponseContract;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(LoginResponseContract::class, LoginResponseService::class);
        $this->app->singleton(LogoutResponseContract::class, LogoutResponseService::class);
        $this->app->singleton(RegisterResponseContract::class, RegisterResponseService::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
