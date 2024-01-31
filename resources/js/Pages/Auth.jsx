import {Link, Head} from '@inertiajs/react';
const Auth =()=>{
    return(
        <div className="container mx-auto">
            <Head title="Login" />
            {/* <div className="fixed duration-500 ease-in-out w-full text-sm -bottom-[2050-px] -z-10">
                <div className="bg-white px-3 rounded-t-lg">
                    <div className="flex py-2 justify-between">
                        <h2 className="py-4">
                            Login
                        </h2>
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500"><path d="M13.4115 12L18.6952 6.71628C18.7906 6.62419 18.8666 6.51404 18.919 6.39225C18.9713 6.27046 18.9988 6.13947 19 6.00692C19.0011 5.87438 18.9759 5.74293 18.9257 5.62025C18.8755 5.49756 18.8013 5.38611 18.7076 5.29238C18.6139 5.19865 18.5024 5.12453 18.3798 5.07434C18.2571 5.02414 18.1256 4.99889 17.9931 5.00004C17.8605 5.00119 17.7295 5.02873 17.6078 5.08104C17.486 5.13336 17.3758 5.20941 17.2837 5.30475L12 10.5885L6.71628 5.30475C6.528 5.12291 6.27584 5.0223 6.01411 5.02457C5.75237 5.02685 5.502 5.13183 5.31691 5.31691C5.13183 5.502 5.02685 5.75237 5.02457 6.01411C5.0223 6.27584 5.12291 6.528 5.30475 6.71628L10.5885 12L5.30475 17.2837C5.20941 17.3758 5.13336 17.486 5.08104 17.6078C5.02873 17.7295 5.00119 17.8605 5.00004 17.9931C4.99889 18.1256 5.02414 18.2571 5.07434 18.3798C5.12453 18.5024 5.19865 18.6139 5.29238 18.7076C5.38611 18.8013 5.49756 18.8755 5.62025 18.9257C5.74293 18.9759 5.87438 19.0011 6.00692 19C6.13947 18.9988 6.27046 18.9713 6.39225 18.919C6.51404 18.8666 6.62419 18.7906 6.71628 18.6952L12 13.4115L17.2837 18.6952C17.472 18.8771 17.7242 18.9777 17.9859 18.9754C18.2476 18.9732 18.498 18.8682 18.6831 18.6831C18.8682 18.498 18.9732 18.2476 18.9754 17.9859C18.9777 17.7242 18.8771 17.472 18.6952 17.2837L13.4115 12Z" fill="currentColor"></path></svg>
                        </button>
                    </div>
                </div>
            </div> */
            }
            <div className="bg-base-100 px-3 md:px-0 h-screen md:flex md:flex-row">
                <div className="md:w-1/3 md:px-6 flex flex-col justify-between">
                    <div className="flex items-center gap-2 py-4 w-full">
                        <svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg"><rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect><circle cx="207.5" cy="135" r="130" fill="black" fill-opacity=".3"></circle><circle cx="207.5" cy="135" r="125" fill="white"></circle><circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle></svg>
                    </div>
                    <div>
                        <div className="rounded-[.5rem] w-full flex flex-row bg-base-200 p-2 text-center">
                            <Link className="text-sm w-1/2 p-2 rounded-[.5rem] text-gray-500 bg-[#3498db] text-[#fff]" href={route('user.login')}>Sign Up</Link>
                            <Link className="text-sm w-1/2 p-2 rounded-[.5rem]" href="/register">Sign Up</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-extrabold my-5">Halo, Selamat Datang Kembali</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;