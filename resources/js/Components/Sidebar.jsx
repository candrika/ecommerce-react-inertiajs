import { Link } from '@inertiajs/react';
const Sidebar =()=>{
    return(
        <div className="drawer-side z-40" style={{scrollBehavior:"smooth",scrollPaddingTop:"5rem"}}>
            <label htmlFor="drawer" className="drawer-overflay"></label>
            <aside className="bg-base-100 mn-h-screen w-80">
                <div className="bg-base-100 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex shadow-sm">
                    <Link aria-current="page" href={route('home')}  className="flex-0 btn btn-ghost px-2">
                        <svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg">
                            <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect>
                            <circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle>
                            <circle cx="207.5" cy="135" r="125" fill="white"></circle>
                            <circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle>
                        </svg>
                        <div className="font-title inline-flex text-lg md:text-2xl">daisyUI</div>
                    </Link>
                </div>
                <div className="h-4"></div>
                <ul className="menu px-4 py-0">
                    <li>
                        <details>
                            <summary className='group'>
                                <span className="">
                                    <svg width="18" height="18" viewBox="0 0 48 48" class="text-orange-400 h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="bevel"></path>
                                        <path d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="bevel"></path>
                                    </svg>
                                </span>
                                ACCOUNT
                            </summary>
                            <ul>
                                <li>
                                    <div className="flex felx-row overflow-hidden pl-1">
                                        <a href="#">
                                            <div className="text-sm font-bold mb-1">
                                                <div className="flex gap-2 items-center text-gray-600">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
                                                        <path d="M3.5 4C3.5 3.72386 3.72386 3.5 4 3.5H9.5C9.77614 3.5 10 3.72386 10 4V11.5C10 11.7761 9.77614 12 9.5 12H4C3.72386 12 3.5 11.7761 3.5 11.5V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M14 12.5C14 12.2239 14.2239 12 14.5 12H20C20.2761 12 20.5 12.2239 20.5 12.5V20C20.5 20.2761 20.2761 20.5 20 20.5H14.5C14.2239 20.5 14 20.2761 14 20V12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M14 4C14 3.72386 14.2239 3.5 14.5 3.5H20C20.2761 3.5 20.5 3.72386 20.5 4V7.5C20.5 7.77614 20.2761 8 20 8H14.5C14.2239 8 14 7.77614 14 7.5V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M3.5 16.5C3.5 16.2239 3.72386 16 4 16H10C10.2761 16 10.5 16.2239 10.5 16.5V20C10.5 20.2761 10.2761 20.5 10 20.5H4C3.72386 20.5 3.5 20.2761 3.5 20V16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                        <p className="overflow-hidden">Dashboard</p>
                                    </div>
                                </li>
                                <li className=''>
                                    <details>
                                        <summary className='pl-1 group'>
                                            <span className="">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.175 8.3307C19.1576 8.10421 19.0554 7.89272 18.8891 7.73865C18.7228 7.58458 18.5045 7.49933 18.2781 7.5H15.5875V6.6C15.5875 5.64522 15.2096 4.72955 14.5368 4.05442C13.864 3.37928 12.9515 3 12 3C11.0486 3 10.1361 3.37928 9.4633 4.05442C8.79052 4.72955 8.41255 5.64522 8.41255 6.6V7.5H5.72194C5.49557 7.49933 5.27732 7.58458 5.11097 7.73865C4.94463 7.89272 4.8425 8.10421 4.82507 8.3307L4.00533 19.0614C3.98629 19.3087 4.0184 19.5573 4.09965 19.7916C4.18089 20.0259 4.30951 20.2408 4.47743 20.4228C4.64535 20.6048 4.84896 20.7501 5.07547 20.8494C5.30197 20.9487 5.5465 21 5.79369 21H18.2064C18.4535 21 18.6979 20.9487 18.9244 20.8495C19.1508 20.7502 19.3544 20.605 19.5223 20.4231C19.6902 20.2412 19.8188 20.0264 19.9001 19.7922C19.9814 19.558 20.0136 19.3095 19.9947 19.0623L19.175 8.3307ZM10.2063 6.6C10.2063 6.12261 10.3953 5.66477 10.7317 5.32721C11.0681 4.98964 11.5243 4.8 12 4.8C12.4758 4.8 12.932 4.98964 13.2684 5.32721C13.6048 5.66477 13.7938 6.12261 13.7938 6.6V7.5H10.2063V6.6ZM5.79369 19.2L6.55244 9.3H8.41255V11.1C8.41255 11.3387 8.50704 11.5676 8.67524 11.7364C8.84343 11.9052 9.07156 12 9.30942 12C9.54729 12 9.77541 11.9052 9.9436 11.7364C10.1118 11.5676 10.2063 11.3387 10.2063 11.1V9.3H13.7938V11.1C13.7938 11.3387 13.8883 11.5676 14.0565 11.7364C14.2247 11.9052 14.4528 12 14.6906 12C14.9285 12 15.1566 11.9052 15.3248 11.7364C15.493 11.5676 15.5875 11.3387 15.5875 11.1V9.3H17.4476L18.2073 19.2H5.79369Z" fill="currentColor"></path></svg>
                                            </span>
                                            {/* Produk */}
                                            <p className="overflow-hidden">Order</p>
                                        </summary>
                                        <ul>
                                            <li>
                                                <div className="flex felx-row overflow-hidden pl-1">
                                                    <a href="#">
                                                        <div className="text-sm font-bold mb-1">
                                                            <div className="flex gap-2 items-center text-gray-600">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5 13C3.89543 13 3 13.8954 3 15V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V15C21 13.8954 20.1046 13 19 13H5ZM7 15.75C6.58579 15.75 6.25 16.0858 6.25 16.5C6.25 16.9142 6.58579 17.25 7 17.25H8C8.41421 17.25 8.75 16.9142 8.75 16.5C8.75 16.0858 8.41421 15.75 8 15.75H7Z" fill="currentColor"></path>
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5 4.5C3.89543 4.5 3 5.39543 3 6.5V9.5C3 10.6046 3.89543 11.5 5 11.5H19C20.1046 11.5 21 10.6046 21 9.5V6.5C21 5.39543 20.1046 4.5 19 4.5H5ZM7 7.25C6.58579 7.25 6.25 7.58579 6.25 8C6.25 8.41421 6.58579 8.75 7 8.75H8C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25H7Z" fill="currentColor"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <p className="overflow-hidden">Client Order</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex felx-row overflow-hidden pl-1">
                                                    <a href="#">
                                                        <div className="text-sm font-bold mb-1">
                                                            <div className="flex gap-2 items-center text-gray-600">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
                                                                    <path d="M13.5003 13C16.5003 14 18.2485 15.8519 18.5003 19C18.5255 19.3144 18.5303 19.701 18.5271 20.0502C18.5223 20.5826 18.0825 21 17.55 21H12.0003H6.45063C5.91814 21 5.47834 20.5826 5.47351 20.0502C5.47034 19.701 5.47518 19.3144 5.50033 19C5.75218 15.8519 7.50033 14 10.5003 13" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M15.5 8V9.3999C15.5 11.3881 13.933 12.9999 12 12.9999C10.067 12.9999 8.5 11.3881 8.5 9.3999V8" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M16 8H8V3L10 4L11.5528 3.22361C11.8343 3.08284 12.1657 3.08284 12.4472 3.22361L14 4L16 3V8Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <p className="overflow-hidden">Client Order</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li className=''>
                                    <details>
                                        <summary className='pl-1 group'>
                                            <span className="">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect>
                                                    <path d="M9 4H15V8.5L12 7.5L9 8.5V4Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M8 13H12.5M8 16H10" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                            {/* Produk */}
                                            <p className="overflow-hidden">Produk</p>
                                        </summary>
                                        <ul>
                                            <li>
                                                <div className="flex felx-row overflow-hidden pl-1">
                                                    <a href="#">
                                                        <div className="text-sm font-bold mb-1">
                                                            <div className="flex gap-2 items-center text-gray-600">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M3.5 7.73985C3.5 7.26243 3.67078 6.80075 3.98149 6.43827L5.90136 4.19842C6.28132 3.75513 6.83602 3.5 7.41987 3.5H16.5801C17.164 3.5 17.7187 3.75513 18.0986 4.19842L20.0185 6.43827C20.3292 6.80075 20.5 7.26243 20.5 7.73985V18.5C20.5 19.6046 19.6046 20.5 18.5 20.5H5.5C4.39543 20.5 3.5 19.6046 3.5 18.5V7.73985Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M20 7.5H4" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M10 11H14" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M12 7.5V3.5" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <p className="overflow-hidden">Daftar Produk</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex felx-row overflow-hidden pl-1">
                                                    <a href="#">
                                                        <div className="text-sm font-bold mb-1">
                                                            <div className="flex gap-2 items-center text-gray-600">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11 6.0293H13" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M11 15.0293H13" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M6 5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5V10C18 11.1046 17.1046 12 16 12H8C6.89543 12 6 11.1046 6 10V5Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M6 14C6 12.8954 6.89543 12 8 12H16C17.1046 12 18 12.8954 18 14V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V14Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <p className="overflow-hidden">Bundle Produk</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex felx-row overflow-hidden pl-1">
                                                    <a href="#">
                                                        <div className="text-sm font-bold mb-1">
                                                            <div className="flex gap-2 items-center text-gray-600">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5125 2.96052C11.2624 2.29745 12.3828 2.27698 13.1563 2.9122L14.4722 3.99266C14.8037 4.26487 15.2126 4.42556 15.6407 4.45187L17.3401 4.55627C18.3392 4.61765 19.1459 5.39538 19.2438 6.39156L19.4102 8.086C19.4521 8.51288 19.6276 8.91567 19.9118 9.237L21.0396 10.5125C21.7027 11.2623 21.7231 12.3827 21.0879 13.1563L20.0075 14.4721C19.7352 14.8036 19.5746 15.2125 19.5482 15.6407L19.4438 17.3401C19.3825 18.3392 18.6047 19.1458 17.6086 19.2437L15.9141 19.4101C15.4872 19.452 15.0844 19.6276 14.7631 19.9117L13.4876 21.0395C12.7378 21.7026 11.6174 21.7231 10.8438 21.0879L9.528 20.0074C9.19649 19.7352 8.78757 19.5745 8.35943 19.5482L6.66005 19.4438C5.66095 19.3824 4.85427 18.6047 4.75642 17.6085L4.59 15.9141C4.54807 15.4872 4.37254 15.0844 4.0884 14.7631L2.96058 13.4876C2.29751 12.7377 2.27704 11.6174 2.91226 10.8438L3.99272 9.52794C4.26493 9.19643 4.42562 8.78751 4.45193 8.35937L4.55633 6.65999C4.61771 5.66089 5.39544 4.85421 6.39162 4.75636L8.08606 4.58993C8.51295 4.54801 8.91573 4.37248 9.23706 4.08834L10.5125 2.96052Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round"></path><path d="M15 9.00012L9 15.0001" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="14.5" cy="14.5" r="1.5" fill="#4B5563"></circle><circle cx="9.5" cy="9.5" r="1.5" fill="#4B5563"></circle></svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <p className="overflow-hidden">Diskon</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex felx-row overflow-hidden pl-1">
                                                    <a href="#">
                                                        <div className="text-sm font-bold mb-1">
                                                            <div className="flex gap-2 items-center text-gray-600">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 9V10C21.5523 10 22 9.55228 22 9H21ZM21 15H22C22 14.4477 21.5523 14 21 14V15ZM3 15V14C2.44772 14 2 14.4477 2 15H3ZM3 9H2C2 9.55228 2.44772 10 3 10V9ZM5 4C3.34315 4 2 5.34315 2 7H4C4 6.44772 4.44772 6 5 6V4ZM19 4H5V6H19V4ZM22 7C22 5.34315 20.6569 4 19 4V6C19.5523 6 20 6.44772 20 7H22ZM22 9V7H20V9H22ZM19 12C19 10.8954 19.8954 10 21 10V8C18.7909 8 17 9.79086 17 12H19ZM21 14C19.8954 14 19 13.1046 19 12H17C17 14.2091 18.7909 16 21 16V14ZM22 17V15H20V17H22ZM19 20C20.6569 20 22 18.6569 22 17H20C20 17.5523 19.5523 18 19 18V20ZM5 20H19V18H5V20ZM2 17C2 18.6569 3.34315 20 5 20V18C4.44772 18 4 17.5523 4 17H2ZM2 15V17H4V15H2ZM5 12C5 13.1046 4.10457 14 3 14V16C5.20914 16 7 14.2091 7 12H5ZM3 10C4.10457 10 5 10.8954 5 12H7C7 9.79086 5.20914 8 3 8V10ZM2 7V9H4V7H2Z" fill="#4B5563"></path><path d="M9.5 10L12.5 10M9.5 14L14.5 14" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <p className="overflow-hidden">Kupon</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex felx-row overflow-hidden pl-1">
                                                    <a href="#">
                                                        <div className="text-sm font-bold mb-1">
                                                            <div className="flex gap-2 items-center text-gray-600">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 15.5C3.5 14.6716 4.17157 14 5 14H8.5C9.32843 14 10 14.6716 10 15.5V19C10 19.8284 9.32843 20.5 8.5 20.5H5C4.17157 20.5 3.5 19.8284 3.5 19V15.5Z" stroke="#4B5563" strokeWidth="2" strokeLinejoin="round"></path><path d="M14 5C14 4.17157 14.6716 3.5 15.5 3.5H19C19.8284 3.5 20.5 4.17157 20.5 5V8.5C20.5 9.32843 19.8284 10 19 10H15.5C14.6716 10 14 9.32843 14 8.5V5Z" stroke="#4B5563" strokeWidth="2" strokeLinejoin="round"></path><path d="M3.5 5C3.5 4.17157 4.17157 3.5 5 3.5H8.5C9.32843 3.5 10 4.17157 10 5V8.5C10 9.32843 9.32843 10 8.5 10H5C4.17157 10 3.5 9.32843 3.5 8.5V5Z" stroke="#4B5563" strokeWidth="2" strokeLinejoin="round"></path><circle cx="17.25" cy="17.25" r="3.5" stroke="#4B5563" strokeWidth="2"></circle></svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <p className="overflow-hidden">Kategori</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex felx-row overflow-hidden pl-1">
                                                    <a href="#">
                                                        <div className="text-sm font-bold mb-1">
                                                            <div className="flex gap-2 items-center text-gray-600">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 20V7.64987C21 7.25468 20.7673 6.89656 20.4061 6.73606L12.8123 3.36101C12.2951 3.13118 11.7049 3.13118 11.1877 3.36101L3.59386 6.73606C3.23273 6.89656 3 7.25468 3 7.64987V20" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 8.5H3.5" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><rect x="8" y="16" width="4" height="4" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="12" y="16" width="4" height="4" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="10" y="12" width="4" height="4" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect></svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <p className="overflow-hidden">Warehouse</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <div className="flex felx-row overflow-hidden pl-1">
                                        <a href="#">
                                            <div className="text-sm font-bold mb-1">
                                                <div className="flex gap-2 items-center text-gray-600">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.3852 17.1452C20.403 15.687 21 13.9132 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C13.4241 21 14.771 20.6692 15.968 20.0803C17.4138 20.5947 19.0111 20.9259 20.5657 20.8585C20.9454 20.8421 21.1336 20.4064 20.9307 20.085C20.405 19.2523 19.8603 18.1962 19.3852 17.1452Z" fill="currentColor"></path><path d="M8.5 10L10.5 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 14L15.5 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </div>
                                            </div>
                                        </a>
                                        <p className="overflow-hidden">Chat</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex felx-row overflow-hidden pl-1">
                                        <a href="#">
                                            <div className="text-sm font-bold mb-1">
                                                <div className="flex gap-2 items-center text-gray-600">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0"><path d="M19 4C19 3.44772 18.5523 3 18 3H9.5L5 7.5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 3.5V8C11 8.55228 10.5523 9 10 9H5.5" stroke="#4B5563" stroke-width="2" stroke-linecap="round"></path><path d="M11 17L11 15" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 17L15 10" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </div>
                                            </div>
                                        </a>
                                        <p className="overflow-hidden">Report</p>
                                    </div>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='group'>
                                <span className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                                    </svg>
                                </span>
                                SUPPORT
                            </summary>
                            <ul>
                                <li>
                                    <div className="flex felx-row overflow-hidden pl-1">
                                        <a href="#">
                                            <div className="text-sm font-bold mb-1">
                                                <div className="flex gap-2 items-center text-gray-600">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0"><path d="M11.5 20H4C3.44772 20 3 19.5523 3 19V18.5058C3 15.2503 5.41015 13 9 13C10.1296 13 11.1424 13.2228 12 13.6296" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M5.5 7.6C5.5 5.61177 7.067 4 9 4C10.933 4 12.5 5.61177 12.5 7.6V9.4C12.5 11.3882 10.933 13 9 13C7.067 13 5.5 11.3882 5.5 9.4V7.6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.0311 15V14M18.0311 15L20.2012 16.2542V18.7542L18.0311 20M18.0311 15L15.8611 16.2542V18.7542L18.0311 20M18.0311 21V20M15.866 16.25L15 15.75M21.0622 19.25L20.1962 18.75M20.1962 16.25L21.0622 15.75M15 19.25L15.866 18.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </div>
                                            </div>
                                        </a>
                                        <p className="overflow-hidden">User Setting</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex felx-row overflow-hidden pl-1">
                                        <a href="#">
                                            <div className="text-sm font-bold mb-1">
                                                <div className="flex gap-2 items-center text-gray-600">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></circle><path d="M10.5 3.36603C11.4282 2.83013 12.5718 2.83013 13.5 3.36603L18.7272 6.38397C19.6554 6.91987 20.2272 7.91025 20.2272 8.98205V15.0179C20.2272 16.0897 19.6554 17.0801 18.7272 17.616L13.5 20.634C12.5718 21.1699 11.4282 21.1699 10.5 20.634L5.27276 17.616C4.34456 17.0801 3.77276 16.0897 3.77276 15.0179V8.98205C3.77276 7.91025 4.34456 6.91987 5.27276 6.38397L10.5 3.36603Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </div>
                                            </div>
                                        </a>
                                        <p className="overflow-hidden">Setting</p>
                                    </div>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </aside>    
        </div>
    )
}

export default Sidebar;