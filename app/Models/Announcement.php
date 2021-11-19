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

    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'announcements';

    protected $fillable = [
        'user_id',
        'category_id',
        'title',
        'content',
        'price',
        'address_tran',
        'status',
    ];

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
        $date_to = date('Y-m-' . date('t', strtotime(date('Y-m-01') . " +{$monthAfter} MONTH")), strtotime(date('Y-m-01') . " +{$monthAfter} MONTH"));

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

    // POST-параметры:
    // category_id, date_from, date_to, price_from, price_to, title
    // Query-параметры:
    // page — номер страницы
    public static function getAll(Array $params)
    {
        $page = $params['page'];
        $limit = $params['limit'];
        $offset = ($page - 1) * $limit;

        // Обработаем параметры от sql-инъекций
        // TODO: добавить более детальную обработку параметров
        foreach ($params as $key => &$param) {
            switch ($key) {
                case 'category_id':
                    $param = intval($param);
                    break;
                case 'date_from':
                case 'date_to':
                    $param = date('Y-m-d', strtotime($param));
                    break;
                case 'price_from':
                case 'price_to':
                    $param = floatval($param);
                    break;
                case 'title':
                    $param = trim($param);
                    $param = htmlspecialchars($param);
                    $param = addslashes($param);
                    break;
            }
        }

        // TODO: Если не переданы параметры, то добавить фильтр на интересные категории для пользователя
        $whereParams = [
            ['status', '=', 'active'],
        ];
        if (isset($params['category_id']) and $params['category_id'] != '' and $params['category_id'] > 0) {
            $whereParams[] = ['category_id', '=', $params['category_id']];
        }
        if (isset($params['price_from']) and $params['price_from'] != '') {
            $whereParams[] = ['price', '>=', $params['price_from']];
        }
        if (isset($params['price_to']) and $params['price_to'] != '' and $params['price_to'] > 0) {
            $whereParams[] = ['price', '<=', $params['price_to']];
        }
        if (isset($params['title']) and $params['title'] != '') {
            $whereParams[] = ['title', 'like', "%{$params['title']}%"];
        }

        $result = Announcement::where($whereParams)->orderBy('update_at', 'ASC')->limit($limit)->offset($offset)->get()->toArray();

        // TODO: Добавить фильтр по свободной дате
        return $result;
    }
}
