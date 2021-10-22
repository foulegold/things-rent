<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use App\Models\User;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Laravel\Fortify\Fortify;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //Отобразить шаблон аутентификации пользователя
        Fortify::loginView(function () {
//            return view('auth.login');
        });

        //аутентификации пользователя
        Fortify::authenticateUsing(function (Request $request) {
            $user = User::where('email', $request->email)->first();

            if ($user &&
                Hash::check($request->password, $user->password)) {
                return $user;
            }
        });

        //Отобразить шаблон двухфакторной аутентификация
        Fortify::twoFactorChallengeView(function () {
//            return view('auth.two-factor-challenge');
        });

        //Отобразить шаблон Регистрация
        Fortify::registerView(function () {
//            return view('auth.register');
        });

        //Отобразить шаблон сброса пароля
        Fortify::requestPasswordResetLinkView(function () {
//            return view('auth.forgot-password');
        });

        //Отображение страницы сброса пароля
        Fortify::resetPasswordView(function ($request) {
//            return view('auth.reset-password', ['request' => $request]);
        });

        //Подтверждение адреса электронной почты
        Fortify::verifyEmailView(function () {
//            return view('auth.verify-email');
        });

        //Подтверждение пароля при денежных операциях
        Fortify::confirmPasswordView(function () {
//            return view('auth.confirm-password');
        });


        Fortify::createUsersUsing(CreateNewUser::class);
        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);

        RateLimiter::for('login', function (Request $request) {
            return Limit::perMinute(5)->by($request->email.$request->ip());
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });
    }
}
