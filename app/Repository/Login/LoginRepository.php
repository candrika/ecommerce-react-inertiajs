<?php
namespace App\Repository\Login;

use Illuminate\Http\Request;

Interface LoginRepository{
    public function loginProcessing(Request $request);

    public function logoutProcess(Request $request);
}