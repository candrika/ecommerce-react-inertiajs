import { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import Menubar from '../Components/Menubar';
import Footer from '../Components/Footer';
const Detail = (id)=>{
    return(
        <div className="">
           <Head title="Detail" />
            <Menubar/>
            <div>
                <div className="container mx-auto mt-10">
                    <div className="max-w-xs text-sm breadcrumbs">
                        <ul>
                            <li>Home</li>
                            <li>Produk</li>
                            <li className="text-info truncate text-wrap">Nama Produk</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-shrink-0 flex-grow container gap-6 mt-10 mx-auto">
                    <div className="w-full md:w-2/6">
                        <img src={"https://ecommerce-be.cerise.id/storage/image/gallery/R15dKvTdhja3f3gWmfscBnWrJQFdzPOAITDGdGbr.png"} className="w-full shrink rounded-lg"/>
                        <div className="flex gap-2 cursor-pointer my-3">
                            <div>
                                <img src={"https://ecommerce-be.cerise.id/storage/image/gallery/sWkEynjpPQA546uldOMUZfjDrppZX0IzYpbZrwbA.png"} className="w-[60px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/6">
                        <h2 className="font-bold text-xl my-4">Nama Produk</h2>
                        <p className="font-bold text-2xl">Rp.&nbsp;50.000,00</p>
                        <div className="flex text xs gap-2 mb-2">
                            <p className="text-gray-400 underline decoration-solid"></p>
                        </div>
                        <div className="flex mb-4 text-xs gap-2">
                            0&nbsp;<span className="text-gray-400">Terjual</span>
                        </div>
                        <hr/>
                        <div>
                            <div className="flex gap-2 my-2.5 mb-2">
                                <button className="btn btn-xs glass text-primary">Deskripsi&nbsp;Produk</button>
                            </div>
                            <div className="my-2 text-xs border-t-[1px]">
                                <div></div>
                                <div className="mt-1">
                                    <p>Online gratis 300x300 dimensi gambar resizer dalam piksel · Alat terbaik untuk mengubah ukuran gambar ke dimensi 300x300 dengan cepat</p>
                                </div>
                                <button className="btn btn-xs glass text-primary mt-2">Lebih banyak</button>
                            </div>
                            <hr/>
                        </div>
                        <div className="my-3">
                            <p className="text-[1rem] leading-[1.5rem] font-[600]">Pengiriman</p>
                            <div className="flex items-center gap-2 my-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 7C13 10.6667 8.66667 14 8 14C7.33333 14 3 10.6667 3 7C3 4.23858 5.23858 2 8 2C10.7614 2 13 4.23858 13 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="7.99999" cy="6.99996" r="1.33333" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></circle></svg>
                                <p className="text-[.75rem] leading-[1rem] font-[400]">
                                    Pengiriman ke <span className="font-bold">Yogyakarta</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-2 my-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33301 3.66663H7.66634C8.77091 3.66663 9.66634 4.56206 9.66634 5.66663V7.66663" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.9997 8.33359H14.7497C14.7497 8.17799 14.7013 8.02624 14.6112 7.89938L13.9997 8.33359ZM10.333 4.6947H9.58301V6.1947H10.333V4.6947ZM12.9404 12.0093L13.1927 11.8879L12.542 10.5364L12.2897 10.6578L12.9404 12.0093ZM14.6112 7.89938L13.1579 5.85258L11.9348 6.72101L13.3882 8.76781L14.6112 7.89938ZM14.7497 9.41014V8.33359H13.2497V9.41014H14.7497ZM10.9156 4.6947H10.333V6.1947H10.9156V4.6947ZM13.1579 5.85258C12.6421 5.12623 11.8065 4.6947 10.9156 4.6947V6.1947C11.3205 6.1947 11.7004 6.39085 11.9348 6.72101L13.1579 5.85258ZM13.1927 11.8879C14.1445 11.4296 14.7497 10.4666 14.7497 9.41014H13.2497C13.2497 9.89033 12.9746 10.3281 12.542 10.5364L13.1927 11.8879Z" fill="currentColor"></path><path d="M10.5129 11.3334H6.4873" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path><circle cx="12.0003" cy="12" r="1.33333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></circle><ellipse cx="5.00033" cy="12" rx="1.33333" ry="1.33333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></ellipse><path d="M1.66699 6.00004H4.66699M2.33366 8.33337H5.66699" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
                                <p className="text-[.75rem] leading-[1rem] font-[400]">
                                    {/* Pengiriman ke <span className="font-bold">Yogyakarta</span> */}
                                    Ongkos Kirim Rp 18.000 - Rp 25.000
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-400 text-[.75rem] leading-[1rem] font-[400] px-4">
                                    Estimasi 4 Aug - 5 Aug
                                </p>
                                <button className="btn btn-xs glass text-primary">Pilih kurir</button>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <p className="text-[1rem] leading-[1.5rem] font-[600]">Kupon Promo</p>
                            <div className="flex flex-row justify-between my-4 items-center shadow-sm">
                                <div className="relative">
                                    <img src={"http://ecommerce.cerise.id/assets/vouchers-7e222f20.svg"} alt="" className="relative rounded-l-lg"/>
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white absolute top-4 right-4"><path d="M10.5125 2.96052C11.2624 2.29745 12.3828 2.27698 13.1563 2.9122L14.4722 3.99266C14.8037 4.26487 15.2126 4.42556 15.6407 4.45187L17.3401 4.55627C18.3392 4.61765 19.1459 5.39538 19.2438 6.39156L19.4102 8.086C19.4521 8.51288 19.6276 8.91567 19.9118 9.237L21.0396 10.5125C21.7027 11.2623 21.7231 12.3827 21.0879 13.1563L20.0075 14.4721C19.7352 14.8036 19.5746 15.2125 19.5482 15.6407L19.4438 17.3401C19.3825 18.3392 18.6047 19.1458 17.6086 19.2437L15.9141 19.4101C15.4872 19.452 15.0844 19.6276 14.7631 19.9117L13.4876 21.0395C12.7378 21.7026 11.6174 21.7231 10.8438 21.0879L9.528 20.0074C9.19649 19.7352 8.78757 19.5745 8.35943 19.5482L6.66005 19.4438C5.66095 19.3824 4.85427 18.6047 4.75642 17.6085L4.59 15.9141C4.54807 15.4872 4.37254 15.0844 4.0884 14.7631L2.96058 13.4876C2.29751 12.7377 2.27704 11.6174 2.91226 10.8438L3.99272 9.52794C4.26493 9.19643 4.42562 8.78751 4.45193 8.35937L4.55633 6.65999C4.61771 5.66089 5.39544 4.85421 6.39162 4.75636L8.08606 4.58993C8.51295 4.54801 8.91573 4.37248 9.23706 4.08834L10.5125 2.96052Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M15 9.00012L9 15.0001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="14.5" cy="14.5" r="1.5" fill="currentColor"></circle><circle cx="9.5" cy="9.5" r="1.5" fill="currentColor"></circle></svg>
                                </div>
                                <div>
                                    <p className="text-sm">Makin hemat pakai kupon promo</p>
                                    <p className="text-[10px] text-gray-500">Ada 10 kode promo</p>
                                </div>
                                <button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black"><path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl w-full md:w-1/4">
                        <div className="card-body h-[340px]">
                           <h2 className="text-base font-bold my-3 px-3">Atur Pesanan</h2>
                           <div className="border-t-[1px] flex justify-between items-center">
                                <h2 className="text-xs font-medium text-gray-500 px-3 py-2">Kuantitas</h2>
                                <div className="flex rounded border gap-4 mx-3 my-2">
                                    <button className="px-1.5">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-500"><path d="M5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12Z" fill="currentColor"></path></svg>
                                    </button>
                                    <p>1</p>
                                    <button className="px-1.5">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 "><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8335 21C12.8335 21.6444 13.3558 22.1667 14.0002 22.1667C14.6445 22.1667 15.1668 21.6444 15.1668 21V15.1667H21.0002C21.6445 15.1667 22.1668 14.6444 22.1668 14C22.1668 13.3557 21.6445 12.8334 21.0002 12.8334H15.1668V7.00004C15.1668 6.35571 14.6445 5.83337 14.0002 5.83337C13.3558 5.83337 12.8335 6.35571 12.8335 7.00004V12.8334H7.00016C6.35583 12.8334 5.8335 13.3557 5.8335 14C5.8335 14.6444 6.35583 15.1667 7.00016 15.1667H12.8335V21Z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                           </div>
                           <div className="mx-3 my-4 bg-secondary rounded text-xs items-center">
                                <input type="text" className="input input-xs input-bordered py-1 text-sm text-gray-900 px-3 w-full text-sm" placeholder="Tambahkan instruksi khusus"/>
                           </div>
                           <div className="mx-3 my-3 bg-secondary-content rounded flex gap-1 px-1 py-1">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.00033 1.16663C5.8466 1.16663 4.71879 1.50875 3.7595 2.14972C2.80021 2.79069 2.05254 3.70174 1.61103 4.76764C1.16952 5.83354 1.054 7.00643 1.27908 8.13799C1.50416 9.26954 2.05973 10.3089 2.87554 11.1247C3.69134 11.9406 4.73075 12.4961 5.8623 12.7212C6.99386 12.9463 8.16675 12.8308 9.23265 12.3893C10.2986 11.9477 11.2096 11.2001 11.8506 10.2408C12.4915 9.2815 12.8337 8.15368 12.8337 6.99996C12.832 5.45338 12.2168 3.97064 11.1232 2.87705C10.0296 1.78345 8.5469 1.16832 7.00033 1.16663ZM9.32316 9.32279C9.21377 9.43215 9.06542 9.49358 8.91074 9.49358C8.75607 9.49358 8.60772 9.43215 8.49833 9.32279L6.58849 7.41296C6.47938 7.30311 6.41779 7.15479 6.41699 6.99996V4.66663C6.41699 4.51192 6.47845 4.36354 6.58785 4.25415C6.69725 4.14475 6.84562 4.08329 7.00033 4.08329C7.15504 4.08329 7.30341 4.14475 7.41281 4.25415C7.5222 4.36354 7.58366 4.51192 7.58366 4.66663V6.75846L9.32316 8.49796C9.43252 8.60735 9.49395 8.7557 9.49395 8.91038C9.49395 9.06505 9.43252 9.2134 9.32316 9.32279Z" fill="currentColor"></path></svg>
                                <p className="text-blue-800 text-[10px]">Ongkos Kirim di hitung saat proses pembayaran</p>
                           </div>
                           <div className="border-t-[1px]"></div>
                           {/* text-xs text-gray-500 font-light text-right line-through mt-2 mx-3 */}
                           <div className="text-xs text-gray-500 font-light text-right line-through mt-2 mx-3">Rp.&nbsp;40.000,00</div>
                           <div className="flex justify-between items-center mx-3">
                                <div>
                                    <p className="text-xs font-medium text-gray-500">Subtotal</p>
                                </div>
                                <div>
                                    <p className="font-bold">Rp.&nbsp;40.000,00</p>
                                </div>
                           </div>
                           <form action="">
                            <div className="mx-3 my-4">
                                <button className="btn w-full flex justify-center btn-info btn-sm text-white py-1 mx-auto items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-75"><path d="M3 3H3.26541C4.26071 3 5.10455 3.73186 5.24531 4.71716L6.6986 14.8902C6.86187 16.0331 7.95618 16.8008 9.08641 16.5653L17.7429 14.7619C18.5088 14.6023 19.1114 14.0108 19.2851 13.248L20.379 8.44404C20.664 7.1923 19.7127 6 18.4289 6H6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="17" cy="20.5" r="1.5" transform="rotate(90 17 20.5)" fill="currentColor"></circle><circle cx="8" cy="20.5" r="1.5" transform="rotate(90 8 20.5)" fill="currentColor"></circle></svg>
                                    Masukan keranjang
                                </button>
                                <button className="btn btn-outline btn-info btn-sm w-full flex justify-center items-center text-black py-1 my-2 border mx-auto gap-2">Beli sekarang</button>
                            </div>
                           </form>
                        </div>
                    </div>
                </div>
                <div className="py-8">
                    <div className="container mx-auto">
                        <p className="my-8">Tidak ada Ulasan</p>
                    </div>
                </div>
                <div className="py-10">
                    <div className="container mx-auto">
                        <h2>Produk Serupa</h2>
                        {/* grid sm:grid-cols-4 xl:grid-cols-6 grid-cols-2 */}
                        <div className="grid sm:grid-cols-4 xl:grid-cols-6 grid-cols-2">
                            <div className="shrink-0 flex flex-col justify-between w-40 md:w-[232px] shadow m-4 overflow-hidden">
                                <Link href="/post/detail/2">
                                    <div className="relative">
                                        <img src={"https://ecommerce-be.cerise.id/storage/image/gallery/8LlPXfTai0igyW2zeSHPndnvSLVXka9IqFTrCAps.png"} alt="" className="rounded-t-lg z-0 w-full h-[180px] md:h-[220px]"/>
                                    </div>
                                    <div className="bg-base-100">
                                        <div className="h-[48] overflow-hidden" style={{display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2"}}>
                                            <h3 className="text-sm px-2 my-2">Rexus GX300 / GX-300 Gamepad Joystick Bluetooth Wireless</h3>
                                        </div>
                                        <div className="mt-2 mb-1 px-2">&nbsp;</div>
                                        <p className="font-extrabold my-2 px-2">Rp 499.999</p>
                                        <div className="text-xs">&nbsp;</div>
                                    </div>
                                </Link>
                            </div>
                            {/* shrink-0 flex flex-col justify-between w-40  md:w-[232px] rlg shadow m-4 overflow-hidden */}
                            <div className="flex flex-col shrink-0 justify-between w-40 md:w-[232px] rounded-[.05rem] shadow m-4 overflow-hidden">
                                <Link>
                                    <div className="relative">
                                        <img src={"https://ecommerce-be.cerise.id/storage/image/gallery/8LlPXfTai0igyW2zeSHPndnvSLVXka9IqFTrCAps.png"} alt="" className="rounded-t-lg z-0 w-full h-[180px] md:h-[220px]"/>
                                    </div>
                                    <div className="bg-base-100">
                                        <div className="h-[48] overflow-hidden" style={{display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2"}}>
                                            <h3 className="text-sm px-2 my-2">Rexus GX300 / GX-300 Gamepad Joystick Bluetooth Wireless</h3>
                                        </div>
                                        <div className="mt-2 mb-1 px-2">&nbsp;</div>
                                        <p className="font-extrabold my-2 px-2">Rp 499.999</p>
                                        <div className="text-xs">&nbsp;</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex flex-col shrink-0 justify-between w-40 md:w-[232px] rounded-[.05rem] shadow m-4 overflow-hidden">
                                <Link>
                                    <div className="relative">
                                        <img src={"https://ecommerce-be.cerise.id/storage/image/gallery/8LlPXfTai0igyW2zeSHPndnvSLVXka9IqFTrCAps.png"} alt="" className="rounded-t-lg z-0 w-full h-[180px] md:h-[220px]"/>
                                    </div>
                                    <div className="bg-base-100">
                                        <div className="h-[48] overflow-hidden" style={{display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2"}}>
                                            <h3 className="text-sm px-2 my-2">Rexus GX300 / GX-300 Gamepad Joystick Bluetooth Wireless</h3>
                                        </div>
                                        <div className="mt-2 mb-1 px-2">&nbsp;</div>
                                        <p className="font-extrabold my-2 px-2">Rp 499.999</p>
                                        <div className="text-xs">&nbsp;</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex flex-col shrink-0 justify-between w-40 md:w-[232px] rounded-[.05rem] shadow m-4 overflow-hidden">
                                <Link>
                                    <div className="relative">
                                        <img src={"https://ecommerce-be.cerise.id/storage/image/gallery/8LlPXfTai0igyW2zeSHPndnvSLVXka9IqFTrCAps.png"} alt="" className="rounded-t-lg z-0 w-full h-[180px] md:h-[220px]"/>
                                    </div>
                                    <div className="bg-base-100">
                                        <div className="h-[48] overflow-hidden" style={{display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2"}}>
                                            <h3 className="text-sm px-2 my-2">Rexus GX300 / GX-300 Gamepad Joystick Bluetooth Wireless</h3>
                                        </div>
                                        <div className="mt-2 mb-1 px-2">&nbsp;</div>
                                        <p className="font-extrabold my-2 px-2">Rp 499.999</p>
                                        <div className="text-xs">&nbsp;</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex flex-col shrink-0 justify-between w-40 md:w-[232px] rounded-[.05rem] shadow m-4 overflow-hidden">
                                <Link>
                                    <div className="relative">
                                        <img src={"https://ecommerce-be.cerise.id/storage/image/gallery/8LlPXfTai0igyW2zeSHPndnvSLVXka9IqFTrCAps.png"} alt="" className="rounded-t-lg z-0 w-full h-[180px] md:h-[220px]"/>
                                    </div>
                                    <div className="bg-base-100">
                                        <div className="h-[48] overflow-hidden" style={{display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2"}}>
                                            <h3 className="text-sm px-2 my-2">Rexus GX300 / GX-300 Gamepad Joystick Bluetooth Wireless</h3>
                                        </div>
                                        <div className="mt-2 mb-1 px-2">&nbsp;</div>
                                        <p className="font-extrabold my-2 px-2">Rp 499.999</p>
                                        <div className="text-xs">&nbsp;</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex flex-col shrink-0 justify-between w-40 md:w-[232px] rounded-[.05rem] shadow m-4 overflow-hidden">
                                <Link>
                                    <div className="relative">
                                        <img src={"https://ecommerce-be.cerise.id/storage/image/gallery/8LlPXfTai0igyW2zeSHPndnvSLVXka9IqFTrCAps.png"} alt="" className="rounded-t-lg z-0 w-full h-[180px] md:h-[220px]"/>
                                    </div>
                                    <div className="bg-base-100">
                                        <div className="h-[48] overflow-hidden" style={{display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2"}}>
                                            <h3 className="text-sm px-2 my-2">Rexus GX300 / GX-300 Gamepad Joystick Bluetooth Wireless</h3>
                                        </div>
                                        <div className="mt-2 mb-1 px-2">&nbsp;</div>
                                        <p className="font-extrabold my-2 px-2">Rp 499.999</p>
                                        <div className="text-xs">&nbsp;</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Detail;