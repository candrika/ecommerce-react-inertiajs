import {Link, Head} from '@inertiajs/react';
import Menubar from '../Components/Menubar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';

const Product = ({category})=>{
    let title = category;
     title = title[0].toUpperCase()+title.slice(1)   
    return(
        <div>
            <Head>
                <title>{`${title}`}</title>
            </Head>
            <Menubar/>
            <div className="container mx-auto py-10">
                <div className="bg-gradient-to-r from-indigo-500 from-5% via-blue-500 via-20% to-violet-500 to-70% rounded-tl-lg rounded-tr-lg flex justify-between">
                    <div className="p-6">
                        <p className="text-white text-lg font-bold">
                            Rekomendasi untuk kamu
                        </p>
                        <p className="text-white">
                            Banyak chasback & promo, spesial untukmu
                        </p>
                    </div>
                    <div className="flex flex-row">
                    <img src={"http://ecommerce.cerise.id/assets/box-4d6b04b7.png"} alt="" />
                        <img src={"http://ecommerce.cerise.id/assets/box-4d6b04b7.png"} alt="" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-10 bg-base-100">
                <div className="flex flex-row gap-2 items-center">
                    <div className="w-1/12 border flex gap-2 px-1 rounded-lg">
                        <button onClick={()=>document.getElementById('my_modal_4').showModal()}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black"><path d="M17 10L12 15L7 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                        <p className="text-sm py-1">Filter</p>
                        <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Click the button below to close</p>
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                    </div>
                    <div className="w-9/12">
                         <div className="flex gap-2 px-1 overflow-scroll no-scrollbar text-gray-500">
                            <div className="shrink-0 text-sm items-center my-1">
                                <p className="text-sm w-full cursor-pointer null">Elektronik</p>
                            </div>
                            {/* <div className="shrink-0 text-sm items-center my-1">
                                <p className="text-sm w-full cursor-pointer null">Komputer</p>
                            </div> */}
                            <div className="shrink-0 text-sm items-center my-1">
                                <p className="text-sm w-full cursor-pointer null">Handphone & Aksesoris</p>
                            </div>
                            <div className="shrink-0 text-sm items-center my-1">
                                <p className="text-sm w-full cursor-pointer null">Pakaian Pria</p>
                            </div>
                            <div className="shrink-0 text-sm items-center my-1">
                                <p className="text-sm w-full cursor-pointer null">Pakai Wanita</p>
                            </div>
                            <div className="shrink-0 text-sm items-center my-1">
                                <p className="text-sm w-full cursor-pointer null">Olahraga</p>
                            </div>
                            <div className="shrink-0 text-sm items-center my-1">
                                <p className="text-sm w-full cursor-pointer null">Kesehatan</p>
                            </div>
                            <div className="shrink-0 text-sm items-center my-1">
                                <p className="text-sm w-full cursor-pointer null">Otomotif</p>
                            </div>
                            <div className="shrink-0 text-sm items-center my-1">
                                <p className="text-sm w-full cursor-pointer null">Kecantika</p>
                            </div>
                            <div className="shrink-0 text-sm items-center my-1">
                                <p className="text-sm w-full cursor-pointer null">Rumah Tangga</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/12 text-center">
                        <p className="text-sm py-1">Urutkan</p>
                    </div>
                    <div className="w-2/12 border flex rounded-lg text-sm">
                        <select className="select select-bordered">
                            <option disabled selected>Paling sesuai</option>
                            <option>Diskon terbesar</option>
                            <option>Harga tertinggi</option>
                            <option>Palinng banya diminati</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-10 bg-base-100">
                 <div className="grid grid-2 md:grid-cols-4 sm:mx-2">
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
            <Footer/>
        </div>
    )
}

export default Product;