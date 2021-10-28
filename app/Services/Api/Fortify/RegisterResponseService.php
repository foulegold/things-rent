<?php

namespace App\Services\Api\Fortify;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Fortify\Contracts\RegisterResponse;

class RegisterResponseService implements RegisterResponse
{
    /**
     * Регистрация пользователя
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function toResponse($request): JsonResponse
    {
        return response()->json([
            'status' => 'ok',
            'message' => 'The user has registered',
            'user' => Auth::user()
        ], 201);
    }
}
