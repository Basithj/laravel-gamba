<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\UploadedFile;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\URL;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'first_name', 'email', 'last_name', 'phone', 'address', 'password', 'photo', 'last_login'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function setPasswordAttribute($value){
        $this->attributes['password'] = app('hash')->make($value);
    }

    public function getPhotoAttribute(){

        if ($this->attributes['photo']) {
            return URL::to('storage/' . $this->attributes['photo']);
        }
    }

    public function setPhotoAttribute($photo)
    {
        //make sure to run this command from public dir: ln -s ../storage/app storage
        if(!$photo) return;

        $this->attributes['photo'] = $photo instanceof UploadedFile ? $photo->store('users') : $photo;
    }

    public function bets(){
        return $this->hasMany(UserBet::class);
    }

    public function transactions(){

        return $this->hasMany(Transaction::class);
    }
}
