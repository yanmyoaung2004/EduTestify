<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="icon" href="https://cdn3.vectorstock.com/i/1000x1000/40/52/black-abstract-logo-vector-30054052.jpg"
        type="image/png">

    @viteReactRefresh
    @vite('resources/js/app.tsx')
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
