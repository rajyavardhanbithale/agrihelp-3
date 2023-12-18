'use client'
import Link from "next/link";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

export default function Navbar(props) {
    const [user, setUser] = useState()

    const [open, setOpen] = useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };

    useEffect(() => {

        const checkUser = () => {
            const key = 'rar'
            const getEncryptedCookie = Cookies.get("user")

            if (getEncryptedCookie === null || getEncryptedCookie == undefined) {
                setUser(false)
                return
            }
            const parseEncryptedCookie = CryptoJS.AES.decrypt(getEncryptedCookie, key).toString(CryptoJS.enc.Utf8)
            const jsonDecrypt = JSON.parse(parseEncryptedCookie)

            if (jsonDecrypt.validationKey === "token") {
                setUser(true)
            }

        }

        checkUser()

    }, [])
    const handleLogout = () => {
        Cookies.remove("user")
        window.location.href = "/"
    }

    // console.log(user);
    return (


        <>

            <section>
                <header className=" bg-green-500 bg-opacity-70 m-2 rounded-full  absolute inset-x-0 top-0 z-50">

                    <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global drop-shadow-2xl">
                        <div className="flex lg:flex-1">
                            <a href="/" className="-m-1.5 p-1.5 flex ">

                                <img className="h-8 w-auto" src="" alt="" />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button type="button" onClick={handleClickToOpen}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
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
                            {user ? (
                                <div onClick={handleLogout} className="text-xl font-semibold leading-6 px-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white">
                                    Log Out
                                </div>
                            ) : (
                                <Link href={"/login"}>
                                    <div className="text-xl font-semibold leading-6 px-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white">
                                        Log In
                                    </div>
                                </Link>
                            )}

                        </div>
                    </nav>


                    <dialog open={open} onClose={handleToClose}>
                        <div className="" role="dialog" aria-modal="true">
                            <div className="fixed inset-0 z-50"></div>
                            <div
                                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-green-500 bg-opacity-70 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                                            <Link href={"/weather"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-100 hover:bg-green-900 ">Weather</Link>
                                            <Link href={"/crop"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-100 hover:bg-green-900 ">Crop Recommendation</Link>
                                            <Link href={"/crop/pest"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-100 hover:bg-green-900 ">Pest Information</Link>
                                            <Link href={"/crop/fertilizer"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-100 hover:bg-green-900 ">Fertilizer Recommendation</Link>
                                            <Link href={"/shop"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-100 hover:bg-green-900 ">Shop</Link>
                                            <Link href={"/gov-scheme"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-100 hover:bg-green-900 ">Scheme</Link>
                                            <Link href={"/financial-aid"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-100 hover:bg-green-900 ">Finance</Link>
                                            <Link href={"/weather"}
                                                className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-100 hover:bg-white ">About</Link>




                                        </div>

                                        <div className="py-6">


                                            {user ? (
                                                <div onClick={handleLogout} className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-200 hover:bg-green-900 ">
                                                    Log Out
                                                </div>
                                            ) : (
                                                <Link href={"/login"}>
                                                    <div className="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-200 hover:bg-green-900 ">
                                                        Log In
                                                    </div>
                                                </Link>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </header>
            </section>

        </>
    );
}
