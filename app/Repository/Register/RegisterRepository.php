<?php
namespace App\Repository\Register;

use Illuminate\Http\Request;

Interface RegisterRepository{
    public function regisProcess(Request $request);
}