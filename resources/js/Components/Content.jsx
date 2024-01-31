import { Link, useForm, useRemember} from "@inertiajs/react"

const Content = ({user, children})=>{
    const {post} = useForm({});
    
    const logout = (e)=>{
        alert('text')
        e.preventDefault();
        post(route('post-user.logout'));
    }

    return(
        <div className="drawer-content bg-primary">
            <div className="text-base-100 sticky top-0 z-30 2 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">
                <nav className="navbar w-full bg-base-100">
                    <div className="flex flex-1 md:gap-1 lg:gap-2">
                        <div className="flex fixed w-container h-[68px] z-10 justify-between items-center gap-4 md:right-0 lg:right-36">
                            <div className="flex gap-2">&nbsp;</div>
                            <div className="flex gap-4 justify-between px-4">
                                <button>
                                    <a href="/">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 9.12167C3 8.42494 3.36259 7.77842 3.9571 7.41511L10.9571 3.13733C11.5973 2.74608 12.4027 2.74608 13.0429 3.13733L20.0429 7.41511C20.6374 7.77842 21 8.42494 21 9.12167V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9.12167Z" stroke="#4B5563" strokeWidth="2" strokeLinejoin="round"></path>
                                            <path d="M15 21V14.5L12 13L9 14.5V21" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </button>
                                <button>
                                    <a href="/">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 3V8M8 5.5L3 5.5" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M5.5 12V19C5.5 20.1046 6.39543 21 7.5 21H19C20.1046 21 21 20.1046 21 19V7.5C21 6.39543 20.1046 5.5 19 5.5H12" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </button>
                                <button>
                                    <a href="/">
                                        <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 23.5H3" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M21 23.5L19.6718 21.5077C19.2338 20.8506 19 20.0786 19 19.2889V16C19 12.134 15.866 9 12 9V9C8.13401 9 5 12.134 5 16V19.2889C5 20.0786 4.76625 20.8506 4.3282 21.5077L3 23.5" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M9 24C9 25.6569 10.3431 27 12 27C13.6569 27 15 25.6569 15 24" stroke="#4B5563" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"></path>
                                                <circle cx="19" cy="8" r="7" fill="#C81E1E" stroke="white"></circle>
                                            <path d="M15.9783 11V5.84H14.8343V5.04H16.9143V11H15.9783ZM20.5751 11.096C20.1005 11.096 19.6845 10.968 19.3271 10.712C18.9698 10.4507 18.6898 10.0907 18.4871 9.632C18.2898 9.168 18.1911 8.62933 18.1911 8.016C18.1911 7.39733 18.2898 6.85867 18.4871 6.4C18.6898 5.94133 18.9671 5.584 19.3191 5.328C19.6765 5.072 20.0925 4.944 20.5671 4.944C21.0418 4.944 21.4551 5.072 21.8071 5.328C22.1645 5.584 22.4418 5.944 22.6391 6.408C22.8418 6.86667 22.9431 7.40267 22.9431 8.016C22.9431 8.62933 22.8445 9.168 22.6471 9.632C22.4498 10.0907 22.1725 10.4507 21.8151 10.712C21.4631 10.968 21.0498 11.096 20.5751 11.096ZM20.5751 10.232C20.8685 10.232 21.1218 10.1413 21.3351 9.96C21.5485 9.77867 21.7138 9.52267 21.8311 9.192C21.9485 8.86133 22.0071 8.46933 22.0071 8.016C22.0071 7.56267 21.9485 7.17067 21.8311 6.84C21.7138 6.50933 21.5485 6.25333 21.3351 6.072C21.1218 5.89067 20.8658 5.8 20.5671 5.8C20.2738 5.8 20.0205 5.89067 19.8071 6.072C19.5938 6.25333 19.4285 6.50933 19.3111 6.84C19.1938 7.17067 19.1351 7.56267 19.1351 8.016C19.1351 8.464 19.1938 8.856 19.3111 9.192C19.4285 9.52267 19.5938 9.77867 19.8071 9.96C20.0258 10.1413 20.2818 10.232 20.5751 10.232Z" fill="none"></path>
                                        </svg>
                                    </a>
                                </button>
                                <div className="border-l-[1px]"></div>
                                <div className="flex flex-row gap-4 items-center text-black">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button">
                                            {user.name}
                                        </div>
                                        <ul className="menu menu-sm dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-52 z-[1]">
                                            <li>
                                                <form onSubmit={logout}>
                                                   <button className="" type="submit">Logout</button>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="w-max-[100vw] px-6 pb-5 xl:pr-2">
                    <main>{children}</main>
                </div>
            </div>
        </div>
    )
}

export default Content;