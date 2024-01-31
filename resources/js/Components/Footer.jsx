import { Link } from "@inertiajs/react";
const Footer=()=>{
    return(
        <div className="">
            <div className="bg-base-100 mt-10">
                <div className="container mx-auto pt-8 border-t-4 border-indigo-200 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3  place-content-center gap-4 mb-0">
                    <div className="">
                        <div className="flex items-center gap-2 mb-2">
                            <svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg">
                                <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect>
                                <circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle>
                                <circle cx="207.5" cy="135" r="125" fill="white"></circle>
                                <circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle>
                            </svg>
                        </div>
                        <p className="text-sm text-gray-900 text-justify">
                        Selamat datang di platform e-commerce kami, tempat di mana Anda dapat menemukan beragam produk berkualitas tinggi dari berbagai kategori.
                        </p>
                        <div className="flex gap-5 px-2 py-5 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="26" width="24" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512">
                                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="26" width="20" viewBox="0 0 320 512">
                                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="">
                        <div className="mt-0 font-bold uppercase">
                            <h2>Pengiriman</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-4 my-3">
                            <img src={"data:image/png;base64,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"} className="object-contain h-8 w-[66px] md:h-12 md:w-24"/>
                            <img src={"http://ecommerce.cerise.id/assets/sicepat-c6c7af24.svg"} className="object-contain h-8 w-[66px] md:h-12 md:w-24"/>
                            <img src={"data:image/png;base64,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"} className="object-contain h-8 w-[66px] md:h-12 md:w-24"/>
                            <img src={"http://ecommerce.cerise.id/assets/wahana-db99052f.png"} className="object-contain h-8 w-[66px] md:h-12 md:w-24"/>
                            <img src={"http://ecommerce.cerise.id/assets/jne-a2558fbf.svg"} className="object-contain h-8 w-[66px] md:h-12 md:w-24"/>
                            <img src={"http://ecommerce.cerise.id/assets/tiki-77e20e9e.png"} className="object-contain h-8 w-[66px] md:h-12 md:w-24"/>
                        </div>
                    </div>
                    <div className="">
                        <div className="mt-0 font-bold uppercase">
                            <h2>Pembayaran</h2>
                        </div>
                        <div className="grid grid-cols-3 my-4 items-center">
                            <img src={"http://ecommerce.cerise.id/assets/bca-d8edb71b.svg"} class="h-8 w-[66px] md:w-24 md:h-12 object-contain"/>
                            <img src={"http://ecommerce.cerise.id/assets/bni-32a184f7.svg"} class="h-8 w-[66px] md:w-24 md:h-12 object-contain"/>
                            <img src={"http://ecommerce.cerise.id/assets/bri-2becbc8f.svg"} class="h-8 w-[66px] md:w-24 md:h-12 object-contain"/>
                            <img src={"http://ecommerce.cerise.id/assets/mandiri-2d3b7b0a.svg"} class="h-8 w-[66px] md:w-24 md:h-12 object-contain"/>
                            <img src={"http://ecommerce.cerise.id/assets/akulaku-6d436f13.svg"} class="h-8 w-[66px] md:w-24 md:h-12 object-contain"/>
                            <img src={"http://ecommerce.cerise.id/assets/kredivo-68255fcd.svg"} class="h-8 w-[66px] md:w-24 md:h-12 object-contain"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;