<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StoreAnnouncementRequest;
use App\Http\Requests\Api\UpdateAnnouncementRequest;
use App\Models\Announcement;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AnnouncementController extends Controller
{
    /**
     * Возвращает все объявления Авторизованного пользователя метод get http://things-rent.test/api/announcement
     *
     * @param Announcement $announcement
     * @return JsonResponse
     */
    public function index(Announcement $announcement): JsonResponse
    {
        $announcements = $announcement->where('user_id', Auth::user()->id)->get();
        return response()->json([
            'status' => 'ok',
            'message' => 'list Announcements',
            'Announcements' => $announcements
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Добавляем новое объявление в таблицу Announcement
     *
     * @param StoreAnnouncementRequest $request
     * @param Announcement $announcement
     * @return JsonResponse
     */
    public function store(StoreAnnouncementRequest $request, Announcement $announcement): JsonResponse
    {
        $validated = $request->validated();
        //Проверить если такая запись уже в Таблице
        $searchTitle = $announcement->where([
            'user_id' => Auth::user()->id,
            'title' => $validated['title']
        ])->get();
        if ($searchTitle->isEmpty()) {
            //Создать в таблице новую запись
            $announcement->create([
                'user_id' => Auth::user()->id,
                'category_id' => $validated['category_id'],
                'title' => $validated['title'],
                'content' => $validated['content'],
                'price' => $validated['price'],
                'address_tran' => $validated['address_tran'],
            ])->save();
            return response()->json([
                'status' => 'ok',
                'message' => 'Save Announcement',
                'validated' => $validated
            ]);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Такая запись уже есть в Таблице',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Announcement $announcement
     * @return Response
     */
    public function show(Announcement $announcement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Announcement $announcement
     * @return Response
     */
    public function edit(Announcement $announcement)
    {
        //
    }

    /**
     * Обновить выбранное объявление
     *
     * @param UpdateAnnouncementRequest $request
     * @param Announcement $announcement
     * @return JsonResponse
     */
    public function update(UpdateAnnouncementRequest $request, Announcement $announcement): JsonResponse
    {
        $validated = $request->validated();
        //Обновить запись
        $statusEdit = $announcement
            ->where([
                'user_id' => Auth::user()->id,
                'id' => $announcement->id,
            ])
            ->update($validated);
        //если удалось обонвить запись
        if ($statusEdit) {
            return response()->json([
                'status' => 'ok',
                'message' => 'Update announcement',
                'validated' => $announcement
            ]);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Это объявление не принадлежит этому пользователю!',
        ]);
    }

    /**
     * Тихое удаление - объявления не удаляются, изменяется статус
     *
     * @param Announcement $announcement
     * @return JsonResponse
     */
    public function destroy(Announcement $announcement): JsonResponse
    {
        //Изменить статус у записи на delete
        $statusEdit = $announcement
            ->where([
                'user_id' => Auth::user()->id,
                'id' => $announcement->id,
            ])
            ->update(['status' => 'delete']);
        //если статус поменялся
        if ($statusEdit) {
            return response()->json([
                'status' => 'ok',
                'message' => 'Update Status - Delete',
                'validated' => $announcement
            ]);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Это объявление не принадлежит этому пользователю!',
        ]);
    }

    //++ Голденко
    public function all(Request $request)
    {
        $params = $request->request->all();
        $params['page'] = $request->query->get('page', 1);
        return Announcement::getAll($params);
    }

    /**
     * @param Announcement $announcement
     * @param Request $request
     */
    public function one(Announcement $announcement, Request $request)
    {
        return $announcement->getFullAnnouncementData();
    }
    //-- Голденко
}
