<?php

namespace App\Support;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Cookie as SymfonyCookie;

class JwtToken
{
    public static function encode(array $payload, string|int|null $expiresIn = null): string
    {
        $payload['exp'] = time() + self::secondsFromExpiry($expiresIn ?? Config::get('jwt.expires_in', '1d'));

        return JWT::encode($payload, self::signingKey(), Config::get('jwt.algorithm', 'HS256'));
    }

    public static function forEmail(string $email, string|int|null $expiresIn = null): string
    {
        return self::encode(['email' => $email], $expiresIn);
    }

    public static function decode(string $token): object
    {
        return JWT::decode($token, new Key(self::signingKey(), Config::get('jwt.algorithm', 'HS256')));
    }

    public static function tokenFromRequest(Request $request): ?string
    {
        $token = $request->cookie(self::cookieName());

        if ($token) {
            return $token;
        }

        $token = $request->bearerToken();

        if ($token) {
            return $token;
        }

        $authorization = $request->header('Authorization');

        if ($authorization) {
            return preg_replace('/^Bearer\s+/i', '', trim($authorization));
        }

        foreach (['x-access-token', 'token', 'jwt'] as $header) {
            $token = $request->header($header);

            if ($token) {
                return trim($token);
            }
        }

        return null;
    }

    public static function queueCookie(string $token): void
    {
        Cookie::queue(self::makeCookie($token));
    }

    public static function makeCookie(string $token): SymfonyCookie
    {
        return Cookie::make(
            self::cookieName(),
            $token,
            self::cookieMinutes(),
            '/',
            null,
            Config::get('jwt.cookie_secure', false),
            true,
            false,
            Config::get('jwt.cookie_same_site', 'Lax')
        );
    }

    public static function forgetCookie(): SymfonyCookie
    {
        return Cookie::forget(self::cookieName());
    }

    public static function queueForgetCookie(): void
    {
        Cookie::queue(self::forgetCookie());
    }

    public static function cookieName(): string
    {
        return Config::get('jwt.cookie_name', 'jwt');
    }

    private static function signingKey(): string
    {
        $secret = (string) Config::get('jwt.secret', '');

        if (strlen($secret) >= 32) {
            return $secret;
        }

        return hash('sha256', $secret);
    }

    private static function secondsFromExpiry(string|int $expiresIn): int
    {
        if (is_int($expiresIn) || ctype_digit($expiresIn)) {
            return (int) $expiresIn;
        }

        if (preg_match('/^(\d+)([smhd])$/', $expiresIn, $matches) !== 1) {
            return 86400;
        }

        return match ($matches[2]) {
            's' => (int) $matches[1],
            'm' => (int) $matches[1] * 60,
            'h' => (int) $matches[1] * 3600,
            'd' => (int) $matches[1] * 86400,
        };
    }

    private static function cookieMinutes(): int
    {
        return max(1, (int) ceil(((int) Config::get('jwt.cookie_age', 86400000)) / 60000));
    }
}
