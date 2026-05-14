<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\PasswordOTP;
use App\Support\JwtToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Carbon\Carbon;

class UserController extends Controller
{
    private function generateToken($email)
    {
        return JwtToken::forEmail($email);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'nullable|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
        ]);

        $user = User::create([
            'name' => $request->name ?: Str::before($request->email, '@'),
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        if ($user) {
            $token = $this->generateToken($user->email);

            return response()->json([
                '_id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'isAdmin' => $user->isAdmin,
                'message' => 'Registration Successfull',
            ], 201)->withCookie(JwtToken::makeCookie($token));
        }

        return response()->json(['message' => 'Invalid User Data'], 400);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        
        $user = User::where('email', $request->email)->first();
        if ($user && Hash::check($request->password, $user->password)) {
            $token = $this->generateToken($user->email);
            return response()->json([
                'data' => [
                    'email' => $user->email,
                    'isAdmin' => $user->isAdmin,
                    'token' => $token,
                ],
                'message' => 'Login Successfull',
            ])->withCookie(JwtToken::makeCookie($token));
        }

        return response()->json(['message' => 'Invalid User Information'], 400);
    }

    public function logout()
    {
        return response()
            ->json(['message' => 'User Logged Out ☹️'])
            ->withCookie(JwtToken::forgetCookie());
    }

    public function getProfile(Request $request)
    {
        $user = $request->user();
        if ($user) {
            return response()->json([
                'data' => [
                    'id' => $user->id,
                    'userName' => $user->name,
                    'email' => $user->email,
                    'isAdmin' => $user->isAdmin,
                ]
            ]);
        }
        return response()->json(['message' => 'UnAuthorized User'], 401);
    }

    public function updateProfile(Request $request)
    {
        $user = $request->user() ? User::find($request->user()->id) : null;
        if ($user) {
            $user->name = $request->name ?? $user->name;
            $user->email = $request->email ?? $user->email;
            if ($request->password) {
                $user->password = Hash::make($request->password);
            }
            $user->save();

            return response()->json([
                'data' => [
                    '_id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'isAdmin' => $user->isAdmin,
                ],
                'message' => 'User Profile Updated',
            ]);
        }
        return response()->json(['message' => 'User not found'], 404);
    }

    public function index()
    {
        return response()->json(User::all());
    }

    public function show($id)
    {
        $user = User::find($id);
        if ($user) {
            return response()->json($user);
        }
        return response()->json(['message' => 'User not found'], 404);
    }

    public function store(Request $request)
    {
        $user = User::create($request->all());
        return response()->json($user);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if ($user) {
            $user->update($request->all());
            return response()->json(['isUpdated' => true, 'updatedUser' => $user]);
        }
        return response()->json(['isUpdated' => false, 'error' => 'User not found'], 404);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        if ($user) {
            $user->delete();
            return response()->json(['isDeleted' => true, 'removeUser' => $user]);
        }
        return response()->json(['isDeleted' => false, 'error' => 'User not found'], 404);
    }

    public function forgotPassword(Request $request)
    {
        $request->validate(['email' => 'required|email']);
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json(['message' => 'User not found with this email'], 404);
        }

        $otp = (string) rand(100000, 999999);
        $expiresAt = Carbon::now()->addMinutes(10);

        PasswordOTP::where('email', $request->email)->delete();
        PasswordOTP::create([
            'email' => $request->email,
            'otp' => $otp,
            'expiresAt' => $expiresAt,
        ]);

        // Mocking sendEmail
        // Mail::raw("Your OTP is $otp. It will expire in 10 minutes.", function ($message) use ($request) {
        //     $message->to($request->email)->subject('Your OTP for Password Reset');
        // });

        return response()->json(['message' => 'OTP sent to your email']);
    }

    public function resendOTP(Request $request)
    {
        return $this->forgotPassword($request);
    }

    public function verifyOTP(Request $request)
    {
        $request->validate(['email' => 'required|email', 'otp' => 'required']);
        $record = PasswordOTP::where('email', $request->email)
            ->where('otp', $request->otp)
            ->where('expiresAt', '>', Carbon::now())
            ->first();

        if (!$record) {
            return response()->json(['message' => 'Invalid or expired OTP'], 400);
        }

        $resetToken = JwtToken::forEmail($request->email, '15m');

        return response()->json(['message' => 'OTP verified successfully', 'resetToken' => $resetToken]);
    }

    public function resetPassword(Request $request)
    {
        $request->validate(['resetToken' => 'required', 'newPassword' => 'required']);
        try {
            $decoded = JwtToken::decode($request->resetToken);
            $email = $decoded->email;

            $user = User::where('email', $email)->first();
            if ($user) {
                $user->password = Hash::make($request->newPassword);
                $user->save();

                PasswordOTP::where('email', $email)->delete();
                return response()->json(['message' => 'Password reset successful']);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Invalid or expired reset token'], 400);
        }
        return response()->json(['message' => 'User not found'], 404);
    }
}
