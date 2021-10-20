Работа с Create-React-App (в терминале):

1. Перейти в директорию react командой : cd .\frontend\
2. Установить необходимые пакеты из package.json : npm install
3. Для того что бы запустить dev сервер (просмотр frontend части приложения в браузере) : npm start
4. В браузере откроется http://localhost:3000/
5. Что бы отключить сервер : Ctrl + C в терминале

<!-- ----------------------------------------------------------------------------------- -->

Добавленные библиотеки :

1. redux + react-redux - для глобального state приложения
2. redux-devtools-extension - просмотр state приложения в браузере
3. redux-thunk - для обработки мидлвар
4. react-router-dom - для роутинга
5. react-bootstrap - UI библиотека
6. @fortawesome/react-fontawesome - библиотека иконок Font Awesome для React (только solid версии)

<!-- ----------------------------------------------------------------------------------- -->

Уже настроены redux ( все что к нему отностися лежит в папке store) и router (Components/Router/Router.js).

Документация по Font Awesome для React:

1. https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react официальная дока по работе в React
2. https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ru туториал на русском

НЕ ЗАБЫВАЙТЕ ДЕЛАТЬ npm install для установки зависимостей из package.json
