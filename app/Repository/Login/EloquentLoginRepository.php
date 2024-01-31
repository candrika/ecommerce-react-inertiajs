<?php
namespace App\Repository\Login;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EloquentLoginRepository implements LoginRepository{

    public function loginProcessing(Request $request)
    {
        $user = User::find($request->email);

        $credintials = ['email' => $request->email, 'password' => $request->password];

        $check = Auth::attempt($credintials);

        if($check){
            $user = Auth::user();

            return ['status'=>true,'message'=>'Login berhasil'];
        }else{
            return ['status'=>false,'message'=>'Login gagal'];

        }
    }

    public function logoutProcess(Request $request){
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        return redirect('/');
    }
}