<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

/**
 * @property User user
 * @property int id
 * @property Category category
 * @property Reservation reservations
 */
class Announcement extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }

    // Получаем полную информацию по объявлению
    public function getFullAnnouncementData()
    {
//        $asd = Announcement::with('user', 'category')->where('id', '=', $this->id)->limit(1)->get();
//        dd($this->reservations()->where('date_from', '>=', '1998-09-08')->get());
        $announcement = $this->toArray();
        $announcement['user'] = $this->user->toArray();
        $announcement['category'] = $this->category->toArray();
//        $announcement['calendar'] = $this->getCalendar();
        return $announcement;
    }

    // Получаем данные для вывода календаря
    // в формате ['0001-01-01' => данные по брони(assoc array)]
    public function getCalendar()
    {
        $result = [];

        $monthBefore = config('announcement.reservation.countMonthBeforeCurrent');
        $monthAfter = config('announcement.reservation.countMonthAfterCurrent');
        $date_from = date('Y-m-01', strtotime(" -{$monthBefore} MONTH"));
        $date_to = date('Y-m-' . date('t', strtotime(date('Y-m-01') .  " +{$monthAfter} MONTH")), strtotime(date('Y-m-01') . " +{$monthAfter} MONTH"));

        $curDate = $date_from;
        while ($curDate <= $date_to) {
            $result[$curDate] = [];
            $curDate = date('Y-m-d', strtotime("{$curDate} +1 DAY"));
        }

        // берем первый день месяца в date_from и последний в date_to
        $reservations = $this->reservations()->where([
            ['date_from', '>=', $date_from],
            ['date_to', '<=', $date_to],
        ])->get()->toArray();

        foreach ($reservations as $reservation) {
            $curDate = $reservation['date_from'];
            while ($curDate <= $reservation['date_to']) {
                $result[$curDate][] = $reservation;
                $curDate = date('Y-m-d', strtotime("{$curDate} +1 DAY"));
            }
        }
//        dd($result);

        return $result;
    }

    public static function getAllAnnouncements(Request $request)
    {
        dd($request);
    }
}
