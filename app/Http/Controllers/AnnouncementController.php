<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    /**
     * @param Announcement $announcement
     * @param Request $request
     */
    public function getAnnouncement(Announcement $announcement, Request $request)
    {
        echo json_encode($announcement->getFullAnnouncementData());
    }

    /**
     * @param Announcement $announcement
     * @param Request $request
     */
    public function getAnnouncementsCalendar(Announcement $announcement, Request $request)
    {
        echo json_encode($announcement->getCalendar());
    }
}
