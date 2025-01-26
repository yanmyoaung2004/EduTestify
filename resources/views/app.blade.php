<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="icon"
        href="http://res.cloudinary.com/depbjqed1/image/upload/v1732093687/Universal_Technology_bzn473.png"
        type="image/png">
    @viteReactRefresh
    @vite('resources/js/app.tsx')
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
