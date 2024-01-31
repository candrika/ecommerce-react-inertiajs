import {Link, Head, useForm, usePage} from '@inertiajs/react';
import { useEffect, useState } from 'react';
import InputError from '@/Components/InputError';

const Login =()=>{
    const {data, setData, post, processing, errors, reset}=useForm({
        email:'',
        password:''
    })

    const {flash} =usePage().props

    useEffect(()=>{
        return()=>{

            reset('password')
        }
    },[])

    const loginHandler=(event)=>{
        event.preventDefault();
        post(route('post-user.login'))
    }

    console.log(flash)


    return(
        <div className="container mx-auto">
            <Head title="Login" />
            {
            /* 
            <div className="fixed duration-500 ease-in-out w-full text-sm -bottom-[2050-px] -z-10">
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
            </div> 
            */
            }
            <div className="bg-base-100 px-3 md:px-0 h-screen md:flex md:flex-row">
                <div className="md:w-1/3 md:px-6 flex flex-col justify-between">
                    <div className="flex items-center gap-2 py-4 w-full">
                        <svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg"><rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect><circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle><circle cx="207.5" cy="135" r="125" fill="white"></circle><circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle></svg>
                    </div>
                    <div>
                        <div className="rounded-[.5rem] w-full flex flex-row bg-base-200 p-2 text-center">
                            <Link className="text-sm w-1/2 p-2 rounded-[.5rem] text-gray-500 bg-[#3498db] text-[#fff]"  href={route('user.login')}>Sign In</Link>
                            <Link className="text-sm w-1/2 p-2 rounded-[.5rem]" href={route('user.regis')}>Sign Up</Link>
                        </div>
                        <div>
                            <h2 className="text-xl font-extrabold my-5">Halo, Selamat Datang Kembali</h2>
                            <form action="#" onSubmit={loginHandler}>
                                <div className="flex flex-col my-1.5">
                                    <label htmlFor="email" className="form-control w-full max-w xs">
                                        <div className="label">
                                            <div className="label-text">Email</div>
                                        </div>
                                        <input type="email" placeholder='your@mail.com' name="email" id="email" className="input input-bordered" onChange={(e)=>setData('email',e.target.value)} value={data.email}/>
                                    </label>
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div className="flex flex-col my-1.5">
                                    <label htmlFor="password" className="form-control w-full max-w xs">
                                        <div className="label">
                                            <div className="label-text">Password</div>
                                        </div>
                                        <input type="password" placeholder='yourpassword' name="password" id="password" className="input input-bordered" onChange={(e)=>setData('password',e.target.value)} value={data.password}/>
                                    </label>
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <button type="submit" className="btn bg-blue-400 hover:bg-blue-500 mx-auto w-full mt-5 py-2 text-base-200">Sign In</button>
                                <p className="text-sm text-slate-400 text-center my-5">Atau login dengan</p>
                                <div className="grid md:grid-cols-3 gap-2">
                                    <Link href='#' target='_blank' rel="noopener noreferrer">
                                        <div className="flex border-2 py-1 px-2 justify-cnter items-center gap-2 cursor-pointer rounded-[.5rem]">
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_31_10911)"><path fillRule="evenodd" clipRule="evenodd" d="M20.1 10.2273C20.1 9.51825 20.0364 8.83643 19.9182 8.18188H10.5V12.0501H15.8818C15.65 13.3001 14.9455 14.3592 13.8864 15.0682V17.5773H17.1182C19.0091 15.8364 20.1 13.2728 20.1 10.2273Z" fill="#4285F4"></path><path fillRule="evenodd" clipRule="evenodd" d="M10.5008 20C13.2008 20 15.4645 19.1046 17.119 17.5773L13.8872 15.0682C12.9917 15.6682 11.8463 16.0228 10.5008 16.0228C7.89627 16.0228 5.69173 14.2637 4.90536 11.9H1.56445V14.4909C3.20991 17.7591 6.59173 20 10.5008 20Z" fill="#34A853"></path><path fillRule="evenodd" clipRule="evenodd" d="M4.90455 11.9001C4.70455 11.3001 4.59091 10.6592 4.59091 10.0001C4.59091 9.34097 4.70455 8.70006 4.90455 8.10006V5.50916H1.56364C0.886364 6.85916 0.5 8.38643 0.5 10.0001C0.5 11.6137 0.886364 13.141 1.56364 14.491L4.90455 11.9001Z" fill="#FBBC05"></path><path fillRule="evenodd" clipRule="evenodd" d="M10.5008 3.97727C11.969 3.97727 13.2872 4.48182 14.3235 5.47273L17.1917 2.60455C15.4599 0.990909 13.1963 0 10.5008 0C6.59173 0 3.20991 2.24091 1.56445 5.50909L4.90536 8.1C5.69173 5.73636 7.89627 3.97727 10.5008 3.97727Z" fill="#EA4335"></path></g><defs><clipPath id="clip0_31_10911"><rect width="20" height="20" fill="white" transform="translate(0.5)"></rect></clipPath></defs></svg>
                                            <p className="text-sm font-base">Google</p>
                                        </div>
                                    </Link>
                                    <Link href='#' target='_blank' rel="noopener noreferrer">
                                        <div className="flex border-2 py-1 px-2 justify-cnter items-center gap-2 cursor-pointer rounded-[.5rem]">
                                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.34475 11.1068L9.86301 7.69417H6.621V5.48058C6.621 4.54672 7.07306 3.63592 8.52512 3.63592H10V0.730583C10 0.730583 8.6621 0.5 7.38356 0.5C4.71233 0.5 2.96804 2.13483 2.96804 5.0932V7.69417H0V11.1068H2.96804V19.357C3.56393 19.4516 4.17352 19.5 4.79452 19.5C5.41553 19.5 6.02511 19.4516 6.621 19.357V11.1068H9.34475Z" fill="currentColor"></path></svg>
                                            <p className="text-sm font-base">Facebook</p>
                                        </div>
                                    </Link>
                                    <Link href='#' target='_blank' rel="noopener noreferrer">
                                        <div className="flex border-2 py-1 px-2 justify-cnter items-center gap-2 cursor-pointer rounded-[.5rem]">
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.49233 10.3651L0 0.833374H5.93445L10.5594 6.72463L15.5004 0.859899H18.7688L12.1397 8.73759L20 18.75H14.0833L9.07538 12.379L3.72896 18.7324H0.44287L7.49233 10.3651ZM14.9457 16.984L3.63881 2.59943H5.07138L16.364 16.984H14.9457Z" fill="currentColor"></path></svg>
                                            <p className="text-sm font-base">Twitter</p>
                                        </div>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>&nbsp;</div>                   
                </div>
                <div className="hidden md:w-2/3 md:px-6 md:flex items-center bg-indigo-50">
                    <img src="http://ecommerce.cerise.id/assets/signin-d658bf7b.svg" alt="" className='w-full'/>
                </div>
            </div>
        </div>
    )
}

export default Login;