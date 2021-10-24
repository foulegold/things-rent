<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\CategoryController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'announcement'], function () {
    Route::match(['get', 'post'], '/get-all', [AnnouncementController::class, 'getAllAnnouncements']);
    Route::get('/{announcement}', [AnnouncementController::class, 'getAnnouncement']);
    Route::get('/{announcement}/calendar', [AnnouncementController::class, 'getAnnouncementsCalendar']);
});

Route::group(['prefix' => 'category'], function () {
    Route::get('/get-all', [CategoryController::class, 'getAllCategories']);
});
