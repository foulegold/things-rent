<?php

namespace App\Services\Api\Fortify;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Laravel\Fortify\Contracts\LoginResponse;

class LoginResponseService implements LoginResponseContract
{
    /**
     * Возвращаем свой кастомный json при авторизации пользователя
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function toResponse($request): JsonResponse
    {
        return response()->json([
            'status' => 'ok',
            'message' => 'user authorization successful',
            'user' => Auth::user()
        ]);
    }
}
