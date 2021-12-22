<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Gambabet</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

        <link href="css/app.8ffabcd6.css" rel="stylesheet"> 
        <link href="css/chunk-4c678a66.ca79fb52.css" rel="stylesheet"> 
        <link href="css/chunk-77c42fa6.cf104017.css" rel="stylesheet"> 
        <link href="css/chunk-vendors.32c39036.css" rel="stylesheet"> 
        <link href="{{ mix('css/main.css') }}" rel="stylesheet">
    </head>
    
    
    <body class="antialiased">
        <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center p-0 sm:pt-0">
           <div id="app">
               <app/></app>
           </div>
        </div>

        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
