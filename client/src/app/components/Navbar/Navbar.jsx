'use client'
import React, { useEffect } from 'react';

import { useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

export default function Navbar() {
    const [user, setUser] = useState()
    const [open, setOpen] = useState(false);
    const [fopen, setfOpen] = useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };
    const handleToClosef = () => {
        setfOpen(false);
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
        Cookies.remove("next-auth.session-token")
        Cookies.remove("next-auth.csrf-token")
        Cookies.remove("next-auth.callback-url")
        signOut()
    }



    return (
        <section>
            <header class="bg-green-500 w-full h-16 absolute inset-x-0 top-0 z-50 flex justify-center items-center">

                <nav class="w-full flex items-center justify-between p-6 lg:px-8" aria-label="Global drop-shadow-2xl">
                    <div class="w-[10%] flex lg:flex-1">
                        <a href="#" class="-m-1.5 p-1.5 flex ">
                            <span class="sr-only">Vedant</span>
                            <img class="h-14 w-auto" src="/assets/nav.png" alt="" />
                        </a>
                    </div>

                    <div class="w-[70%] hidden lg:flex lg:justify-center lg:gap-x-6 text-white">
                        <ul class="hidden lg:flex lg:gap-x-6 text-white">
                            <li
                                class="text-xl font-bold hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100">
                                Home
                            </li>
                            <li onClick={() => { setfOpen(true) }}
                                class="flex justify-center items-center text-xl font-bold hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100 ">
                                Feature's
                                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </li>
                            <Link href={"/shop"}>

                                <li
                                    class="text-xl font-bold hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100">
                                    Agri-Shop
                                </li>
                            </Link>
                            <li
                                class="text-xl font-bold hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100">
                                Contact
                            </li>
                            <li
                                class="text-xl font-bold hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100">
                                About
                            </li>
                        </ul>

                    </div>
                    <div class="w-[20%] flex items-center lg:justify-around">

                        <div
                            class="hidden absolute inset-y-0 right-0 lg:flex lg:items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button"
                                class="relative flex justify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group">
                                <p class="px-4">Language</p>
                                <span class="border-l p-2 hover:bg-gray-100">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"
                                        xmlns="https://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 9l-7 7-7-7"></path>
                                    </svg>
                                </span>

                                <div
                                    class="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
                                    <ul class="text-left border rounded">
                                        <li class="px-4 py-1 hover:bg-gray-100 border-b">English </li>
                                        <li class="px-4 py-1 hover:bg-gray-100 border-b">Hindi/हिंदी</li>
                                        <li class="px-4 py-1 hover:bg-gray-100 border-b">Marathi/मराठी</li>
                                        <li class="px-4 py-1 hover:bg-gray-100 border-b">Tamil/தமிழ்</li>
                                        <li class="px-4 py-1 hover:bg-gray-100 border-b">Telugu/తెలుగు</li>
                                        <li class="px-4 py-1 hover:bg-gray-100 border-b">Punjabi/ਪੰਜਾਬੀ</li>
                                        <li class="px-4 py-1 hover:bg-gray-100 border-b">Assamese/অসমীয়া</li>
                                    </ul>
                                </div>
                            </button>
                        </div>

                        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="#"
                                class="text-xl font-bold text-white  hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100">Log
                                in <span aria-hidden="true">&rarr;</span></a>
                        </div>
                        <div class="flex fixed right-6 lg:hidden">
                            <button type="button" onClick={handleClickToOpen}
                                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                <span class="sr-only">Open main menu</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </nav>


                <dialog open={open} onClose={handleToClose}>
                    <div class="" role="dialog" aria-modal="true">
                        <div class="fixed inset-0 z-50"></div>
                        <div
                            class={`${open && "animate-fade-left animate-duration-500"} fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-green-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
                            <div class="flex items-center justify-between">
                                <a href="#" class="-m-1.5 p-1.5">
                                    <span class="sr-only text-white">AGRI-HELP</span>
                                    <img class="h-8 w-auto" src="/assets/nav.png" alt="" />
                                </a>

                                <button onClick={handleToClose} type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                                    <span class="sr-only">Close menu</span>
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                            </div>

                            <div class="mt-6 flow-root">
                                <div class="-my-6 divide-y divide-gray-500/10">

                                    <div class="space-y-2 py-6">
                                        <Link href="/weather"
                                            class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100 ">
                                            Weather</Link>
                                        <Link href="/crop"
                                            class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100 ">
                                            Crop Recommendation</Link>
                                        <Link href="/crop/pest"
                                            class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100 ">
                                            Pest Information</Link>
                                        <Link href="/crop/fertilizer"
                                            class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100 ">
                                            Fertilizer Recommendation</Link>
                                        <Link href="/shop"
                                            class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100 ">
                                            Shop</Link>
                                        <Link href="/chat"
                                            class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100 ">
                                            Chat</Link>
                                        <Link href="#"
                                            class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100 ">
                                            Feedback</Link>
                                        <Link href="#"
                                            class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100 ">
                                            About</Link>

                                    </div>
                                    <div class="py-6">
                                        {user ? (

                                            <div class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100 ">
                                                <span onClick={handleLogout}>

                                                    Log in
                                                </span>
                                            </div>

                                        ) : (
                                            <Link href="/login"
                                                class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100 ">
                                                Login</Link>
                                        )}


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </dialog>
                {/* features box */}
                <dialog open={fopen} onClose={() => setfOpen(false)} >
                    <div class={`hidden lg:block w-48 fixed top-16 left-[38%] mt-1  text-xm font-bold text-white bg-green-500 border-2 border-green-500 rounded-lg `}>
                        <Link href="/weather">
                            <button type="button"
                                class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
                                Weather
                            </button>
                        </Link>
                        <Link href="/crop">
                            <button type="button"
                                class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
                                Crop Recommendation
                            </button>
                        </Link>
                        <Link href="/crop/pest">
                            <button type="button"
                                class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
                                Pest Information
                            </button>
                        </Link>
                        <Link href="/crop/fertilizer">
                            <button type="button"
                                class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
                                Fertilizer Recommendation
                            </button>
                        </Link>
                        <Link href="/chat">
                            <button type="button"
                                class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
                                Chat
                            </button>
                        </Link>
                        <Link href="/financial-aid">
                            <button type="button"
                                class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
                                Finance
                            </button>
                        </Link>
                        <Link href="/scheme">
                            <button type="button"
                                class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
                                Scheme
                            </button>
                        </Link>

                        <button onClick={handleToClosef} type="button"
                            class="w-full px-4 py-2 font-medium  text-xl text-center rtl:text-right  border-white  cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
                            X
                        </button>


                    </div>
                </dialog>
            </header>

        </section>

    );
}
