<?php
namespace App\Repository\Register;
use Illuminate\Http\Request;
use App\Models\User;

class EloquentRegisterRepository implements RegisterRepository{

    public function regisProcess(Request $request){

        // dd($request);

        $request->validate([
            'name'=>'required',
            'email'=>'required|unique:users,email',
            'password'=>'required'
        ]);

        $user = new User;

        $user::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>bcrypt($request->password)
        ]);

        return ['status'=>true,'message'=>'Registrasi berhasil'];
    }
}