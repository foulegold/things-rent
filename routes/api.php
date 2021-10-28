<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\CategoryController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'announcement'], function () {
    Route::get('/all', [AnnouncementController::class, 'all']);
    Route::get('/{announcement}', [AnnouncementController::class, 'one']);
    Route::get('/{announcement}/calendar', [AnnouncementController::class, 'calendar']);
});

Route::group(['prefix' => 'category'], function () {
    Route::get('/all', [CategoryController::class, 'all']);
});
