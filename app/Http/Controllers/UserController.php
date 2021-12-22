<?php

namespace App\Http\Controllers;

use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return response(['user' => auth()->user()], 200);

    }
    public function updateAvatar(Request $request)
    {
        $data = $this->validate($request, [
            'photo' => 'required|image',
        ]);
        $user = auth()->user();
        if (!$user->update($data))
            return response(['message' => 'Unable to update avatar image'], 422);
        else
            return response(['message' => 'Avatar updated successfully'], 200);
    }
    public function update(Request $request)
    {
        $data = $this->validate($request, [
            'first_name' => 'required',
            'last_name' => 'nullable',
            'phone' => 'nullable',
            'address' => 'nullable',
            'photo' => 'nullable|image',
            'password' => 'nullable|min:8',
            //'email' => "required|email|unique:users,email," . auth()->id()
            'email' => ['required', 'email', Rule::unique('users')->ignore(auth()->id(), 'id')]
        ]);
        $user = auth()->user();
        if (!$user->update($data))
            return response(['message' => 'Unable to update profile'], 422);
        return response([ 'message' => 'Profile updated successfully'], 200);
    }

    public function logout()
    {
        try {
            auth()->user()->tokens->each(function ($token) {
                $token->delete();
            });
            return response()->json(['status' => 'success', 'message' => 'Logged out successfully']);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }
}
