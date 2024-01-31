<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

// Route::get('/about',function(){
//     return Inertia::render('About');
// })->name('about');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/dashboard',function(){
//     return Inertia::render('');
// });

Route::get('/',[HomeController::class,'index'])->name('home');
Route::get('/product/{category}',[ProductController::class,'index'])->name('product');
Route::get('/product/detail/{id}',[ProductController::class,'detail'])->name('product.detail');

Route::get('user/login',[UserController::class,'login'])->name('user.login');
Route::get('user/regis',[UserController::class,'regis'])->name('user.regis');

Route::post('user/login',[UserController::class,'loginProcess'])->name('post-user.login');
Route::post('user/regis',[UserController::class,'regisProcess'])->name('post-user.regis');
Route::post('user/logout',[UserController::class,'logoutProcess'])->name('post-user.logout');

require __DIR__.'/auth.php';