<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <!-- сброс предустановленых стилей браузера -->
    <link
        rel="stylesheet"
        href="https://meyerweb.com/eric/tools/css/reset/reset.css"
    />
    <title>Аренда вещей</title>
    <script src="{{secure_asset('js/index.js')}}" defer></script>
    <link rel="stylesheet" href="{{secure_asset('css/index.css')}}">
</head>

<body>
<div id="root"></div>
</body>

</html>
