<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    public function all(Request $request)
    {
        $params = $request->request->all();
        $params['page'] = $request->query->get('page', 1);
        return json_encode(Announcement::getAll($params));
    }

    /**
     * @param Announcement $announcement
     * @param Request $request
     */
    public function one(Announcement $announcement, Request $request)
    {
        return json_encode($announcement->getFullAnnouncementData());
    }

    /**
     * @param Announcement $announcement
     * @param Request $request
     */
    public function calendar(Announcement $announcement, Request $request)
    {
        return json_encode($announcement->getCalendar());
    }
}
