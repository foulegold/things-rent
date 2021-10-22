Концепция проекта https://docs.google.com/document/d/11wQf5Q5ghQpNXEdK2j0kVG7zC_usK2ZpKUYeaZ5hpLg/edit?usp=sharing

Макет https://bootstraptema.ru/_sf/48/4814.html

![image](https://user-images.githubusercontent.com/32966650/137697752-e3321168-6ce4-4be9-81ad-2b50f8d2e7f7.png)

# Таблицы и их поля
## announcements
`Все объявления сервиса`
- `id` INT(10) NOT NULL AUTO_INCREMENT,
- `user_id` INT(10) NOT NULL,
- `category_id` INT(10) NOT NULL,
- `title` VARCHAR(255) NOT NULL COLLATE 'utf8_general_ci',
- `content` LONGTEXT NOT NULL COLLATE 'utf8_general_ci',
- `price` DECIMAL(15,4) NOT NULL DEFAULT NULL,
- `address_tran` VARCHAR(255) NOT NULL COLLATE 'utf8_general_ci',
- `status` ENUM('active','blocked','rejected','rent','delete') NOT NULL DEFAULT 'active' COLLATE 'utf8_general_ci',
- `created_at` TIMESTAMP NULL DEFAULT NULL,
- `updated_at` TIMESTAMP NULL DEFAULT NULL,
- PRIMARY KEY (`id`) USING BTREE,
- INDEX `FK_announcements_users` (`user_id`) USING BTREE,
- INDEX `FK_announcements_categories` (`category_id`) USING BTREE,
- CONSTRAINT `FK_announcements_categories` FOREIGN KEY (`category_id`) REFERENCES `rents_test`.`categories` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE,
- CONSTRAINT `FK_announcements_users` FOREIGN KEY (`user_id`) REFERENCES `rents_test`.`users` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE
## categories
`Категрии вещей сдающиъся в аренду`
- `id` INT(10) NOT NULL AUTO_INCREMENT,
- `title` VARCHAR(255) NOT NULL COLLATE 'utf8_general_ci',
- `description` LONGTEXT NOT NULL COLLATE 'utf8_general_ci',
- `created_at` TIMESTAMP NULL DEFAULT NULL,
- `updated_at` TIMESTAMP NULL DEFAULT NULL,
- PRIMARY KEY (`id`) USING BTREE
## contacts_types
- `таблица с типами контактной информации`
- `id` INT(10) NOT NULL AUTO_INCREMENT,
- `title` VARCHAR(255) NOT NULL COLLATE 'utf8_general_ci',
- `regular_mask` VARCHAR(255) NOT NULL COLLATE 'utf8_general_ci',
- PRIMARY KEY (`id`) USING BTREE
## contacts_values
- `таблица с значениями контактов`
- `id` INT(10) NOT NULL AUTO_INCREMENT,
- `user_id` INT(10) NOT NULL,
- `contacts_type_id` INT(10) NOT NULL,
- `value` VARCHAR(255) NOT NULL COLLATE 'utf8_general_ci',
- `description` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
- PRIMARY KEY (`id`) USING BTREE,
- INDEX `FK__users` (`user_id`) USING BTREE,
- INDEX `FK_contacts_values_contacts_types` (`type_id`) USING BTREE,
- CONSTRAINT `FK_contacts_values_contacts_types` FOREIGN KEY (`type_id`) REFERENCES `rents_test`.`contacts_types` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE,
- CONSTRAINT `FK__users` FOREIGN KEY (`user_id`) REFERENCES `rents_test`.`users` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE
## deals
`Для хранения самих аренд между юзерами`
- `id` INT(10) NOT NULL AUTO_INCREMENT,
- `announcement_id` INT(10) NOT NULL DEFAULT NULL,
- `price` DECIMAL(15,0) NOT NULL DEFAULT NULL,
- `sum` DECIMAL(15,0) NOT NULL DEFAULT NULL,
- `date_from` DATE NOT NULL DEFAULT NULL,
- `date_to` DATE NOT NULL DEFAULT NULL,
- `created_at` TIMESTAMP NULL DEFAULT NULL,
- `updated_at` TIMESTAMP NULL DEFAULT NULL,
- PRIMARY KEY (`id`) USING BTREE,
- INDEX `FK_deals_announcements` (`announcement_id`) USING BTREE,
- CONSTRAINT `FK_deals_announcements` FOREIGN KEY (`announcement_id`) REFERENCES `rents_test`.`announcements` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE
## reservations
`Бронирования товаров`
- `id` INT(10) NOT NULL AUTO_INCREMENT,
- `user_id` INT(10) NOT NULL,
- `announcement_id` INT(10) NOT NULL,
- `date_from` DATE NOT NULL,
- `date_to` DATE NOT NULL,
- `created_at` TIMESTAMP NULL DEFAULT NULL,
- `updated_at` TIMESTAMP NULL DEFAULT NULL,
- PRIMARY KEY (`id`) USING BTREE,
- UNIQUE INDEX `date_from` (`date_from`) USING BTREE,
- UNIQUE INDEX `date_to` (`date_to`) USING BTREE,
- INDEX `FK_reservations_users` (`user_id`) USING BTREE,
- INDEX `FK_reservations_announcements` (`announcement_id`) USING BTREE,
- CONSTRAINT `FK_reservations_announcements` FOREIGN KEY (`announcement_id`) REFERENCES `rents_test`.`announcements` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE,
- CONSTRAINT `FK_reservations_users` FOREIGN KEY (`user_id`) REFERENCES `rents_test`.`users` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE
## reviews
`В рамках одной сделки ставим оценку и отзыв`
- `user_id` INT(10) NOT NULL,
- `deals_id` INT(10) NULL DEFAULT NULL,
- `review` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
- `rating` INT(10) NULL DEFAULT NULL,
- `created_at` TIMESTAMP NULL DEFAULT NULL,
- `updated_at` TIMESTAMP NULL DEFAULT NULL,
- UNIQUE INDEX `rating` (`rating`) USING BTREE,
- UNIQUE INDEX `review` (`review`) USING BTREE,
- INDEX `FK_reviews_deals` (`deals_id`) USING BTREE,
- INDEX `FK_reviews_users` (`user_id`) USING BTREE,
- CONSTRAINT `FK_reviews_deals` FOREIGN KEY (`deals_id`) REFERENCES `rents_test`.`deals` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE,
- CONSTRAINT `FK_reviews_users` FOREIGN KEY (`user_id`) REFERENCES `rents_test`.`users` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE
## users_info
`Информация о пользователе`
- `user_id` INT(10) NOT NULL,
- `name` VARCHAR(255) NULL DEFAULT '' COLLATE 'utf8_general_ci',
- `is_admin` TINYINT(1) NOT NULL DEFAULT '0',
- `status` ENUM('active','baned','delete') NOT NULL DEFAULT 'active' COLLATE 'utf8_general_ci',
- `created_at` TIMESTAMP NULL DEFAULT NULL,
- `updated_at` TIMESTAMP NULL DEFAULT NULL,
- INDEX `FK_customres_users` (`user_id`) USING BTREE,
- CONSTRAINT `FK_customres_users` FOREIGN KEY (`user_id`) REFERENCES `rents_test`.`users` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE
## Используемые библиотеки
1. Пакет Laravel Fortify — https://laravel.su/docs/8.x/fortify
## Аутентификации API
1. Вход в систему — /login 
   1. Принимает поля email и password
2. Регистрацию — /register
   1. POST-запрос к урлу /register
   2. ожидает строковые поля name, email, password и password_confirmation
3. Сброс пароля — /forgot-password
   1. POST-запрос к урлу /forgot-password
   2. ожидает строковое поле email
4. Сброс двухфакторного пароля — /user/two-factor-recovery-codes
5. Обновление Пароля — /reset-password
   1. ожидает строковые поля email, password, password_confirmation и скрытое поле с именем token, которое содержит значение request()->route('token')
6. Подтверждение электронной почты — /email/verify
   1. При желании вы можете добавить в шаблон вашего приложения verify-email кнопку, которая запускает POST-запрос к урлу /email/verification-notification. Когда этот эндпоинт получает запрос, пользователю будет отправлена новая ссылка для подтверждения электронной почты, позволяющая пользователю получить новую ссылку для подтверждения, если предыдущая была случайно удалена или утеряна.
7. Включение двухфакторной аутентификации — /user/two-factor-authentication
   1. Оповещение о включении для Frontend
      
      - @if (session('status') == 'two-factor-authentication-enabled')
        - &lt;div class="mb-4 font-medium text-sm text-green-600">
        - `Включена двухфакторная аутентификация.`
        - &lt;/div>
      - @endif
8. Двухфакторная аутентификация — /two-factor-challenge, ожидает code или recovery_code
9. Отключение двухфакторной аутентификации — DELETE-запрос к урлу /user/two-factor-authentication
10. Подтверждение пароля при денежных операциях — /user/confirm-password
    1. POST-запрос к урлу /user/confirm-password
    2. ожидает поле password
