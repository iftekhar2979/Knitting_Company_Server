<?php

namespace App\Http\Middleware;

use App\Models\User;
use App\Support\JwtToken;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class ProtectMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ?string $role = null): Response
    {
        $token = JwtToken::tokenFromRequest($request);

        if (!$token) {
            return response()->json(['message' => 'Not Authorized, No Token'], 401);
        }

        try {
            $decoded = JwtToken::decode($token);
            $email = $decoded->email ?? null;

            if (!$email) {
                return response()->json(['message' => 'Not Authorized, Invalid Token'], 401);
            }
            
            $user = User::where('email', $email)->first();

            if (!$user) {
                return response()->json(['message' => 'Not Authorized, User not found'], 401);
            }

            if ($role === 'admin' && !$user->isAdmin) {
                return response()->json(['message' => 'Not Authorized, Admin Access Only'], 401);
            }

            $request->attributes->set('user', $user);
            $request->setUserResolver(fn () => $user);
            
            return $next($request);
        } catch (Throwable $e) {
            return response()->json(['message' => $e->getMessage() ?: 'Not Authorized, Invalid Token'], 401);
        }
    }
}
