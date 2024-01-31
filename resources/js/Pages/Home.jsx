import {Link, Head, useRemember} from '@inertiajs/react';
import Menubar from '../Components/Menubar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import { useEffect, useState } from 'react';

const Home =({auth})=>{

    const [state, setQty] = useState({
        qty:0
    })

    const addToCart = ()=>{
        state.qty++
    }

    return(
        <div className="">
            <Head title="Home" />
            <Menubar auth={auth} qty={setQty} />
            <div className="px-24 py-2">
                <div className="carousel carousel-center p-4 space-x-12 rounded-box">
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
                    </div>
                </div>
            </div>
            <div className="bg-base-100 mt-20 rounded-xl">
                <div className="">
                    <div className="container mx-auto">
                        <p className="font-bold text-2xl">Kategori</p>
                    </div>
                    <div className="container mx-auto flex justify-between flex-row overflow-auto my-4 gap-6 no-scrollbar">
                        <div className="flex text-xs items-center mx-auto my-4 cursor-pointer mx-1.5 text-center w-16">
                            <Link href={route('product','elektronik')}>
                                <div className="avatar">
                                    <div className="w-10 rounded-full bg-red-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" className='absolute top-[11px] left-[11px]'>
                                            <path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/>
                                        </svg>
                                    </div>   
                                </div>
                                <p className="text-xs mt-0">Elektronik</p>
                            </Link>
                        </div>
                        <div className="flex text-xs items-center mx-auto my-4 cursor-pointer mx-1.5 text-center w-16">
                            <Link href="">
                                <div className="avatar">
                                    <div className="w-10 rounded-full bg-green-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512" className='absolute top-[11px] left-[13px]'>
                                            <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/>
                                        </svg>
                                    </div>   
                                </div>
                                <p className="text-xs mt-0">Handphone & Aksesoris</p>
                            </Link>
                        </div>
                        <div className="flex text-xs items-center mx-auto my-4 cursor-pointer mx-1.5 text-center w-16">
                            <Link href="">
                                <div className="avatar">
                                    <div className="w-10 rounded-full bg-blue-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="19" viewBox="0 0 640 512" className='absolute top-[11px] left-[11px]'>
                                            <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"/>
                                        </svg>
                                    </div>   
                                </div>
                                <p className="text-xs mt-0">Pakaian Pria</p>
                            </Link>
                        </div>
                        <div className="flex text-xs items-center mx-auto my-4 cursor-pointer mx-1.5 text-center w-16">
                            <Link href="">
                                <div className="avatar">
                                    <div className="w-10 rounded-full bg-indigo-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 320 512" className='absolute top-[11px] left-[11px]'>
                                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                            <path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"/>
                                        </svg>
                                    </div>   
                                </div>
                                <p className="text-xs mt-0">Pakaian Wanita</p>
                            </Link>
                        </div>
                        <div className="flex text-xs items-center mx-auto my-4 cursor-pointer mx-1.5 text-center w-16">
                            <Link href="">
                                <div className="avatar">
                                    <div className="w-10 rounded-full bg-red-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="19" viewBox="0 0 640 512" className='absolute top-[11px] left-[11px]'>
                                            <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"/>
                                        </svg>
                                    </div>   
                                </div>
                                <p className="text-xs mt-0">Olahraga</p>
                            </Link>
                        </div>
                        <div className="flex text-xs items-center mx-auto my-4 cursor-pointer mx-1.5 text-center w-16">
                            <Link href="">
                                <div className="avatar">
                                    <div className="w-10 rounded-full bg-orange-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512" className='absolute top-[11px] left-[11px]'>
                                            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H96V32H64zm64 0V480H448V32H128zM512 480c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H480V480h32zM256 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H320v48c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V288H208c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16h48V176z"/>
                                        </svg>
                                    </div>   
                                </div>
                                <p className="text-xs mt-0">Kesehatan</p>
                            </Link>
                        </div>
                        <div className="flex text-xs items-center mx-auto my-4 cursor-pointer mx-1.5 text-center w-16">
                            <Link href="">
                                <div className="avatar">
                                    <div className="w-10 rounded-full bg-green-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512" className='absolute top-[11px] left-[11px]'>
                                            <path d="M280 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h57.7l16.4 30.3L256 192l-45.3-45.3c-12-12-28.3-18.7-45.3-18.7H64c-17.7 0-32 14.3-32 32v32h96c88.4 0 160 71.6 160 160c0 11-1.1 21.7-3.2 32h70.4c-2.1-10.3-3.2-21-3.2-32c0-52.2 25-98.6 63.7-127.8l15.4 28.6C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L418.2 128H480c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H459.6c-7.5 0-14.7 2.6-20.5 7.4L391.7 78.9l-14-26c-7-12.9-20.5-21-35.2-21H280zM462.7 311.2l28.2 52.2c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-28.2-52.2c2.3-.3 4.7-.4 7.1-.4c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-15.5 5.5-29.7 14.7-40.8zM187.3 376c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40h66.4C242.5 268.8 190.5 224 128 224C57.3 224 0 281.3 0 352s57.3 128 128 128c62.5 0 114.5-44.8 125.8-104H187.3zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                                        </svg>
                                    </div>   
                                </div>
                                <p className="text-xs mt-0">Otomotif</p>
                            </Link>
                        </div>
                        <div className="flex text-xs items-center mx-auto my-4 cursor-pointer mx-1.5 text-center w-16">
                            <Link href="">
                                <div className="avatar">
                                    <div className="w-10 rounded-full bg-pink-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" height="16" width="20" viewBox="0 0 24 24" data-name="Layer 1" className='absolute top-[11px] left-[11px]'>
                                            <path d="m9 7v-3.381a2 2 0 0 1 1.106-1.789l3.447-1.723a1 1 0 0 1 1.447.893v6zm10 7h-14v10h14zm-2-5h-10v3h10z"/>
                                        </svg> 
                                    </div>   
                                </div>
                                <p className="text-xs mt-0">Kecantikan</p>
                            </Link>
                        </div>
                        <div className="flex text-xs items-center mx-auto my-4 cursor-pointer mx-1.5 text-center w-16">
                            <Link href="">
                                <div className="avatar">
                                    <div className="w-10 rounded-full bg-violet-200 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className='absolute top-[11px] left-[11px]'>
                                            <path d="M248 48V256h48V58.7c23.9 13.8 40 39.7 40 69.3V256h48V128C384 57.3 326.7 0 256 0H192C121.3 0 64 57.3 64 128V256h48V128c0-29.6 16.1-55.5 40-69.3V256h48V48h48zM48 288c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S20.9 384 32 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32V384H352v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-16-32C423.2 294.8 412.1 288 400 288H48z"/>
                                        </svg>
                                    </div>   
                                </div>
                                <p className="text-xs mt-0">Rumah Tangga</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-base-100 mt-20">
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center my-4">
                            <p className="font-bold text-xs md:text-lg">Produk Diskon</p>
                            <Link href="" className="font-bold text-xs md:text-lg text-primary">Lihat Semua</Link>
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <div className="flex flex-column">
                            <div className="flex overflow-y-hidden">
                                <div className="flex"></div>
                                <div className="flex h-[358px] relative w-full space-x-12">
                                    <div className="cursor-pointer">
                                        <div className="card w-[18rem] bg-base-100 shadow-xl">
                                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                Shoes!
                                                <div className="badge badge-secondary">NEW</div>
                                                </h2>
                                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                                <div className="card-actions justify-end">
                                                    <div className="badge badge-outline">
                                                        <Link href={route('product.detail',1)}>
                                                            Detail
                                                        </Link>
                                                    </div> 
                                                    <div className="badge badge-outline">
                                                        <button className="" onClick={addToCart}>
                                                            Add to chart
                                                        </button>        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="cursor-pointer">
                                        <div className="card w-[18rem] bg-base-100 shadow-xl">
                                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                Shoes!
                                                <div className="badge badge-secondary">NEW</div>
                                                </h2>
                                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                                <div className="card-actions justify-end">
                                                <div className="badge badge-outline">Fashion</div> 
                                                <div className="badge badge-outline">Products</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="cursor-pointer">
                                        <div className="card w-[18rem] bg-base-100 shadow-xl">
                                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                Shoes!
                                                <div className="badge badge-secondary">NEW</div>
                                                </h2>
                                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                                <div className="card-actions justify-end">
                                                <div className="badge badge-outline">Fashion</div> 
                                                <div className="badge badge-outline">Products</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="cursor-pointer">
                                        <div className="card w-[18rem] bg-base-100 shadow-xl">
                                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                Shoes!
                                                <div className="badge badge-secondary">NEW</div>
                                                </h2>
                                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                                <div className="card-actions justify-end">
                                                <div className="badge badge-outline">Fashion</div> 
                                                <div className="badge badge-outline">Products</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="cursor-pointer">
                                        <div className="card w-[18rem] bg-base-100 shadow-xl">
                                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                Shoes!
                                                <div className="badge badge-secondary">NEW</div>
                                                </h2>
                                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                                <div className="card-actions justify-end">
                                                <div className="badge badge-outline">Fashion</div> 
                                                <div className="badge badge-outline">Products</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="flex"></div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="bg-base-100 mt-20">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center my-4">
                        <p className="font-bold text-xs md:text-lg">Produk Terkait</p>
                        <Link href="" className="font-bold text-xs md:text-lg text-primary">Lihat Semua</Link>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-4 gap-4">
                        <Link className="cursor-pointer">
                            <Card/>
                        </Link>
                        <Link className="cursor-pointer">
                             <Card/>
                        </Link>
                        <Link className="cursor-pointer">
                             <Card/>
                        </Link>
                        <Link className="cursor-pointer">
                             <Card/>
                        </Link>
                        <Link className="cursor-pointer">
                             <Card/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-base-100 mt-20">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center my-4">
                        <p className="font-bold text-xs md:text-lg">Produk Bundling</p>
                        <Link href="" className="font-bold text-xs md:text-lg text-primary">Lihat Semua</Link>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-4 gap-4">
                        <Link href={route('product.detail','1')} className="cursor-pointer">
                            <Card/>
                        </Link>
                        <Link href={route('product.detail','2')} className="cursor-pointer">
                            <Card/>
                        </Link>
                        <Link href={route('product.detail','3')} className="cursor-pointer">
                            <Card/>
                        </Link>
                        <Link href={route('product.detail','4')} className="cursor-pointer">
                            <Card/>
                        </Link>
                        <Link href={route('product.detail','5')} className="cursor-pointer">
                            <Card/>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;