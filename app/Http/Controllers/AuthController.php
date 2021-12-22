<?php

namespace App\Http\Controllers;

use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if(Auth::attempt($fields)){

            //$request->session()->regenerate();
            $response = [
                'message' => 'Logged in successfully',
                'token' => Auth::user()->createToken('mytoken')->plainTextToken
            ];
            return response($response, 200);
        }else{

            return response(['message' => 'Invalid credentials'], 422);
        }



    }

    public function register(Request $request)
    {

        $data = $this->validate($request, [
            'first_name' => 'required',
            'last_name' => 'nullable',
            'phone' => 'nullable',
            'address' => 'nullable',
            'password' => 'required|min:8',
            'email' => 'required|email|unique:users'
        ]);

        $user = new User($data);
        if ($user->save()) {
            return $this->login($request);
        } else {
            return response(['message' => 'There was a problem in registration'], 422);
        }
    }


    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response(['message' => 'Logged out successfully']);
    }
}
