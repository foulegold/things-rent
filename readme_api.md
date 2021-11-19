
## Объявления

Контроллер Api/AnnouncementController является ресурсным. Этот контролер создан для получения/создания/удаления данных
из Таблицы Announcements. `Для работы с ним вы должны быть авторизованы.`

### Получить все объявления
`/api/announcement/all` `GET` — получить все объявления;

`/api/announcement/{id}` `GET` — получить информацию по объявлению

### Получить все категории
`/api/category/all` `GET`

### Получить все объявления пользователя

Метод `GET` http://things-rent.test/api/announcement

### Добавляем новое объявление в таблицу Announcement

Метод `POST` http://things-rent.test/api/announcement?category_id=1&title=TEST_title&content=test_content&price=12.0000&address_tran=test_address_tran

### Удаление объявления (тихий метод)

Объявление не удаляется, а выставляется статус `delete`.

Метод `DELETE` http://things-rent.test/api/announcement/2 (Цифра 2 это ID объявления, которое нужно удалить)

### Обновить объявление

Метод `PUT` http://things-rent.test/api/announcement/1?category_id=3&title=QWE&content=qwe&price=222&address_tran=qqq (
Цифра 2 это ID объявления, которое нужно удалить)
