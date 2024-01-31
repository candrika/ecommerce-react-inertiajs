<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index():Response{

        // dd(Auth::user());
        return Inertia::render('Home',[
            'auth'=>Auth::user()
        ]);
    }

    public function create():Response{
        return Inertia::render('Form');
    }
}
