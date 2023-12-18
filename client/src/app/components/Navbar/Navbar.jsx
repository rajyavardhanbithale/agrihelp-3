'use client'
import Link from "next/link";
// import AuthNotiy from "../Sections/AuthNotify";
// import Cookies from "js-cookie";
import { useEffect, useState } from "react";


export default function Navbar(props) {
    const auth = props.isAuth;

    const [open, setOpen] = useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };

   
    return (
        // <div className="flex justify-center w-full">
        //     <header className="flex flex-wrap sm:justify-start w-3/4 sm:flex-nowrap z-50 text-sm py-4 px-5 navbar__blur">
        //         <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        //             <div className="flex justify-center align-middle items-center">
        //                 <img src="https://avatars.githubusercontent.com/u/111964247?s=400&u=b924200140787bf3ee6a08d4e04465a3770cac9b&v=4" className="w-10 inline-flex justify-center align-middle items-center bg-slate-800 p-0.5 rounded-xl" alt="" />
        //                 <a className="flex-none align-middle text-xl font-semibold dark:text-white px-3" href={"/"}>
        //                     RAGE
        //                 </a>
        //             </div>
        //             <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
        //                 <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href={"/"}>Early Access</a>
        //                 <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href={"/"}>Generations</a>

        //                 <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        //                     {auth ?
        //                         <div> <Link href="/">Dashboard</Link></div>
        //                         :
        //                         <div> <Link href="/login">Sign IN</Link></div>
        //                     }
        //                 </div>
        //             </div>
        //         </nav>
        //     </header>
        //     {auth && <AuthNotiy value={auth} />}
        // </div>

        <>

            <section>
                <header className=" bg-gray-500 bg-opacity-50 m-2 rounded-full  absolute inset-x-0 top-0 z-50">

                    <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global drop-shadow-2xl">
                        <div className="flex lg:flex-1">
                            <a href="/" className="-m-1.5 p-1.5 flex ">
                                <span className="sr-only">Vedant</span>
                                <img className="h-8 w-auto" src="" alt="" />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button type="button" onClick={handleClickToOpen}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                    aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-6 text-white">
                            <Link href={"/weather"}
                                className="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Weather</Link>
                            <Link href={"/crop"}
                                className="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Crop Recomendation</Link>
                            <Link href={"/crop/pest"}
                                className="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Pest Information</Link>
                            <Link href={"/crop/fertilizer"}
                                className="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Fertilizer Recomendation</Link>
                            <Link href={"/shop"}
                                className="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Shop</Link>
                            <Link href={"/"}
                                className="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Chat</Link>

                            <Link href={"/gov-scheme"}
                                className="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Scheme</Link>
                            <Link href={"/financial-aid"}
                                className="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Finance</Link>
                            <Link href={"/login"}
                                className="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">About Us</Link>

                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href={"/"}
                                className="text-xl font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white">Log
                                in <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </nav>


                    <dialog open={open} onClose={handleToClose}>
                        <div className="" role="dialog" aria-modal="true">
                            <div className="fixed inset-0 z-50"></div>
                            <div
                                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-green-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                <div className="flex items-center justify-between">
                                    <a href={"/"} className="-m-1.5 p-1.5">
                                        <span className="sr-only">AGRI-HELP</span>
                                        <img className="h-8 w-auto" src="" alt="" />
                                    </a>

                                    <button onClick={handleToClose} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                        <span className="sr-only">Close menu</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                            aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                </div>

                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        
                                        <div className="space-y-2 py-6">
                                            <Link href={"/"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Weather</Link>
                                            <Link href={"/"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Crop Recommendation</Link>
                                            <Link href={"/"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Pest Information</Link>
                                            <Link href={"/"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Fertilizer Recommendation</Link>
                                            <Link href={"/Shop"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Shop</Link>
                                            <Link href={"/Chat"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Chat</Link>
                                            <Link href={"/"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Feedback</Link>
                                            <Link href={"/"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">About</Link>




                                        </div>

                                        <div className="py-6">
                                            <Link href={"/"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Log in</Link>
                                            <Link href={"/"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Sign Up</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </header>

            </section >
        </>
    );
}
