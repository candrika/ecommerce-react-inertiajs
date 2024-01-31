<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use App\Repository\Login\EloquentLoginRepository;
use App\Repository\Register\EloquentRegisterRepository;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    protected $eloquentLogin;
    protected $eloquentRegis;

    public function __construct(EloquentLoginRepository $eloquentLogin, EloquentRegisterRepository $eloquentRegis)
    {
        $this->eloquentLogin = $eloquentLogin;
        $this->eloquentRegis = $eloquentRegis;
    }

    public function login(Request $request):Response{
        return Inertia::render('Auth2/Login',['data'=>null]);
    }

    public function regis(Request $request):Response{
        return Inertia::render('Auth2/Register');
    }

    public function loginProcess(Request $request){
        
        $request->validate([
            'email'=>'required',
            'password'=>'required'
        ]);

        $login = $this->eloquentLogin->loginProcessing($request);
        
        if($login['status']){
            // return back()->with('success',$login['message']);
            return redirect()->route('home');
        }else{
            return back()->with('error',$login['message']);
        }
    }

    public function regisProcess(Request $request){
        $regis = $this->eloquentRegis->regisProcess($request);
    }

    public function logoutProcess(Request $request){
       return $this->eloquentLogin->logoutProcess($request);
    }
}
