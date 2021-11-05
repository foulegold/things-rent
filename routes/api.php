<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\Api\AnnouncementController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//announcement — CRUD (кому-то надо переделать маршрут... или оставить как есть)
Route::resource('announcement', AnnouncementController::class)->middleware(['api', 'auth:web']);

Route::group(['prefix' => 'announcement'], function () {
    Route::get('/all', [AnnouncementController::class, 'all']);
    Route::get('/{announcement}', [AnnouncementController::class, 'one']);
//    Route::get('/{announcement}/calendar', [AnnouncementController::class, 'calendar']);
});

Route::group(['prefix' => 'category'], function () {
    Route::get('/all', [CategoryController::class, 'all']);
});
