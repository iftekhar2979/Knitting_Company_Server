<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Models\User;
use Illuminate\Support\Facades\Config;

class ProtectMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role = null): Response
    {
        $cookieName = Config::get('jwt.cookie_name', 'jwt');
        $token = $request->cookie($cookieName);

        if (!$token) {
            return response()->json(['message' => 'Not Authorized, No Token'], 401);
        }

        try {
            $secret = Config::get('jwt.secret');
            $decoded = JWT::decode($token, new Key($secret, 'HS256'));
            
            $user = User::where('email', $decoded->email)->first();

            if (!$user) {
                return response()->json(['message' => 'Not Authorized, User not found'], 401);
            }

            if ($role === 'admin' && !$user->isAdmin) {
                return response()->json(['message' => 'Not Authorized, Admin Access Only'], 401);
            }

            $request->merge(['user' => $user]);
            
            // Set global auth user if needed, but Express just attached it to req.user
            // In Laravel, we can use auth()->login($user) or just keep it in request.
            
            return $next($request);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Not Authorized, Invalid Token'], 401);
        }
    }
}
