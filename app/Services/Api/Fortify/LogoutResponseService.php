<?php

namespace App\Services\Api\Fortify;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Laravel\Fortify\Contracts\LogoutResponse as LogoutResponseContract;

class LogoutResponseService implements LogoutResponseContract
{
    /**
     * Возвращаем свой кастомный json при деавторизации пользователя
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function toResponse($request): JsonResponse
    {
        return response()->json([
            'status' => 'ok',
            'message' => 'logout is a success',
        ], 204);
    }
}
