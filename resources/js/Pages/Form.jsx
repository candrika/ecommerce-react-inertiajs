import { Head, Link } from '@inertiajs/react';
import Menubar from '../Components/Menubar';
export default function Form(){
   return(
    <>
        <Head title="Post"/>
        <Menubar/>
        <div className="mt-10 container mx-auto">
            <div className="card w-full bg-base-100 shadow-md max-w-md indicator">
                <div className="tooltip tooltip-right" data-tip="close">
                    <Link href={route('show')} className="indicator-item badge badge-error rounded-full">x</Link>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        Form Input
                    </h4>
                    <div className="border-b-2 border-slate-300"></div>
                    <form action="">
                        <div className="my-2">
                            <div htmlFor="" className='label'>
                                <span className="label-text">Your Name</span>
                            </div>
                            <input type="text" name="" id="" className="input input-bordered w-full max-w-sm" />
                        </div>
                        <div className="my-2">
                            <div htmlFor="" className='label'>
                                <span className="label-text">Your Email</span>
                            </div>
                            <input type="email" name="" id="" className="input input-bordered w-full max-w-sm" />
                        </div>
                        <div className="my-2">
                            <div htmlFor="" className='label'>
                                <span className="label-text">Your Password</span>
                            </div>
                            <input type="password" name="" id="" className="input input-bordered w-full max-w-sm" />
                        </div>
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-info">Simpan</button> */}
                            <button className="btn btn-primary">Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
   )
}