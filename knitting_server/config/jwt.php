<?php

return [
    'secret' => env('JWT_SECRET', 'local-development-jwt-secret-change-me-32-chars'),
    'algorithm' => env('JWT_ALGORITHM', 'HS256'),
    'expires_in' => env('JWT_EXPIRES_AT', '1d'),
    'cookie_name' => env('COOKIE_NAME', env('COKKIE_NAME', 'jwt')),
    'cookie_age' => env('COOKIE_AGE', env('COKKIE_AGE', 86400000)),
    'cookie_secure' => env('JWT_COOKIE_SECURE', env('APP_ENV') === 'production'),
    'cookie_same_site' => env('JWT_COOKIE_SAME_SITE', env('APP_ENV') === 'production' ? 'None' : 'Lax'),
];
