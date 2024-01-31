import { Link, useForm, useRemember} from "@inertiajs/react"
// { auth, laravelVersion, phpVersion }
export default function Menubar(props, qty){
    const {post} = useForm({});

    console.log(props)
    console.log(qty)

    const logout = (e)=>{
        e.preventDefault();
        post(route('post-user.logout'));
    }

    // console.log(state.qty)

    return(
        <div>
            <div className="bg-base-100 shadow-sm drawer lg:drawer-open sticky top-0 z-30">
                <input type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    <div className="bg-base-100 text base-content w-full justify-cneter bg-opacity-90 backdrop-blur trasition-shadow duration-100 [transfrom:translate3d(0,0,0)]">
                        <div className="navbar w-full shadow">
                            <div className="flex flex-1 md:gap-2">
                                <span className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="menu">
                                    <label htmlFor="drawer" arial-label="Open menu" className="btn btn-square btn-ghost drawer-button lg:hidden">
                                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </label>
                                </span>
                                <div className="flex items-center gap-2 lg:hidden">
                                    <Link href="/" aria-current="page" aria-label="daisyUI" className="flex btn btn-ghost gap-1 px-2 md:gap-2">
                                        <svg className="h-6 w-6 md:h-8 md:w-8" width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect>
                                            <circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle>
                                            <circle cx="207.5" cy="135" r="125" fill="white"></circle>
                                            <circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle>
                                        </svg>
                                        <span className="font-title text-base-content text-lg md:text-2xl">TEst</span>
                                    </Link>
                                    <div className="dropdown">
                                        <div tabIndex={0} role={"button"} className="link link-hover inline-block font-mono text-xs">
                                            4.5.0
                                        </div>
                                        <ul className="dropdown-content menu menu-sm bg-base-200 rounded-box mt-7 border border-white/5 p-2 shadow-2xl outline-1 outline-black/5">
                                            <li>
                                                <a href="">
                                                    <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.81836 6.72729V14H13.0911" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C16.598 4 10.1351 8.02111 6.67677 13.9981" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M24.005 12L24.0038 24.0088L32.4832 32.4882" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    Changelog
                                                </a>
                                            </li>
                                            <li></li>
                                            <li>
                                                <a href="">Version 3.x</a>
                                            </li>
                                            <li>
                                                <a href="">Version 2.x</a>
                                            </li>
                                            <li>
                                                <a href="">Version 1.x</a>
                                            </li>
                                            <li></li>
                                            <li>
                                                <a href="">
                                                    <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17 12L4 6V36L17 42L31 36L44 42V12L31 6L17 12Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M31 6V36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M17 12V42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M10.5 9L17 12L31 6L37.5 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M10.5 39L17 42L31 36L37.5 39" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    Roadmap
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="hidden w-full w-max-sm lg:flex lg:items-center lg:justify-between gap-7 h-[68px] container mx-auto gap-2">
                                   <div className="text-gray-900 text-xl items-center flex gap-2">
                                        <Link href="/" className="flex-0 btn btn-ghost px-2">
                                            <svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect>
                                                <circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle>
                                                <circle cx="207.5" cy="135" r="125" fill="white"></circle>
                                                <circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle>
                                            </svg>
                                        </Link>                                   
                                   </div>
                                   <div className="w-full">
                                    <div className="md:relative">
                                        <div className="overflow-auto">
                                           <div className="w-full px-2 py-1.5 rounded-[0.5rem] flex border-[1.5px]">
                                            <button className="py-1 px-1 rounded-[0.5rem]">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                                                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
                                                    <path d="M21 21L17 17" stroke=" currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                                </svg>
                                            </button>
                                            <input type="search" name="" id="" className="w-full input input-sm py-0 outline-none text-sm" placeholder="Cari..."/>
                                           </div>
                                        </div>
                                    </div>
                                   </div>
                                   <div className="flex gap-2">
                                        <div className="flex gap-3">
                                            <div className="dropdown dropdown-end">
                                                <div className="btn btn-ghost btn-circle" tabIndex={0} role="button">
                                                    <a className="indicator">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                                        <span className="badge badge-sm indicator-item">{props.qty}</span>
                                                    </a>
                                                </div>
                                                {/* <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                                    <div className="card-body">
                                                        <span className="font-bold text-lg">{props.qty} Items</span>
                                                        <span className="font-info text-lg">Subtotal:{props.price}</span>
                                                        <div className="card-action">
                                                            <button className="btn btn-primary btn-block">View Car</button>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                            {props.auth  ? (
                                                <div className="dropdown dropdown-end">
                                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                        <div className="w-10 rounded-full">
                                                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                        </div>
                                                    </div>
                                                        <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[1]">
                                                        <li>
                                                                <Link href={route('dashboard')} className="justify-between">
                                                                    Profile
                                                                    <span className="badge">New</span>
                                                                </Link>
                                                            </li>
                                                            {/* <li>
                                                                <a href="#">
                                                                    Settings
                                                                </a>
                                                            </li> */}
                                                            <li>
                                                                <form onSubmit={logout}>
                                                                    <button className="" type="submit">Logout</button>
                                                                </form>
                                                            </li>
                                                        </ul>
                                                </div>
                                                ):(
                                                    <>
                                                        <div className="divider lg:divider-horizontal"></div>
                                                        <Link href={route('user.login')} className="btn btn-info btn-md">Login</Link>
                                                    </> 
                                                )}

                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}