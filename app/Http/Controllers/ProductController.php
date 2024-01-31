<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index($category):Response{
        return Inertia::render('Product',["category"=>$category]);
    }

    public function detail($id):Response{
        return Inertia::render('Detail',['id'=>$id]);
    }
}
