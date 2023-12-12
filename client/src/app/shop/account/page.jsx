import React from 'react';

function account() {
    return (
        <section className="container mx-auto w-full flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
            {/* Sidebar */}
            <section className="hidden w-[300px] flex-shrink-0 px-4 lg:block">
                <div className="border-b py-5">
                    <div className="flex items-center">
                        <img
                            width="40px"
                            height="40px"
                            className="rounded-full object-cover"
                            src="./assets/images/avatar-photo.png"
                            alt="Red woman portrait"
                        />
                        <div className="ml-5">
                            <p className="font-medium text-gray-500">Hello,</p>
                            <p className="font-bold">Sarah Johnson</p>
                        </div>
                    </div>
                </div>

                <div className="flex border-b py-5">
                    <div className="w-full">
                        <div className="flex w-full">
                            <div className="flex flex-col gap-2">
                                <a href="#" className="flex items-center gap-2 font-medium text-violet-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                    </svg>
                                    Manage account
                                </a>
                                <a href="profile-information.html" className="active:blue-900 text-gray-500 duration-100 hover:text-yellow-400">Profile information</a>
                                <a href="manage-address.html" className="text-gray-500 duration-100 hover:text-yellow-400">Manage Addresses</a>
                                <a href="change-password.html" className="text-gray-500 duration-100 hover:text-yellow-400">Change password</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex border-b py-5">
                    <div className="flex w-full">
                        <div className="flex flex-col gap-2">
                            <a href="my-order-history.html" className="flex items-center gap-2 font-medium active:text-violet-900">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    {/* SVG path */}
                                </svg>
                                My Order History
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex border-b py-5">
                    <div className="flex w-full">
                        <div className="flex flex-col gap-2">
                            <a href="payment-methods.html" className="flex items-center gap-2 font-medium active:text-violet-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
                                    {/* SVG path */}
                                </svg>
                                Payment Methods
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex border-b py-5">
                    <div className="flex w-full">
                        <div className="flex flex-col gap-2">
                            <a href="wishlist.html" className="flex items-center gap-2 font-medium active:text-violet-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
                                    {/* SVG path */}
                                </svg>
                                My Wishlist
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex py-5">
                    <div className="flex w-full">
                        <div className="flex flex-col gap-2">
                            <a href="#" className="flex items-center gap-2 font-medium active:text-violet-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
                                    {/* SVG path */}
                                </svg>
                                Log Out
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Billing Address */}
            <div>
                <div className="border py-5 shadow-md">
                    <div className="mb-5 flex items-center justify-between px-5 md:hidden">
                        <div className="flex gap-3">
                            <div className="py-5">
                                <div className="flex items-center">
                                    <img
                                        width="40px"
                                        height="40px"
                                        className="rounded-full object-cover"
                                        src="./assets/images/avatar-photo.png"
                                        alt="Red woman portrait"
                                    />
                                    <div className="ml-5">
                                        <p className="font-medium text-gray-500">Hello,</p>
                                        <p className="font-bold">Sarah Johnson</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="border bg-amber-400 py-2 px-2">
                                Profile settings
                            </button>
                        </div>
                    </div>

                    <section className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 lg:grid-cols-3">
                        <div>
                            <div className="border py-5 shadow-md">
                                <div className="flex justify-between px-4 pb-5">
                                    <p className="font-bold">Personal Profile</p>
                                    <a className="text-sm text-violet-900" href="profile-information.html">Edit</a>
                                </div>

                                <div className="px-4">
                                    <p>Sarah Johnson</p>
                                    <p>sarah@yandex.com</p>
                                    <p>20371</p>
                                    <p className="">1223 3432 3344 0082</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="border py-5 shadow-md">
                                <div className="flex justify-between px-4 pb-5">
                                    <p className="font-bold">Shipping Address</p>
                                    <a className="text-sm text-violet-900" href="manage-address.html">Edit</a>
                                </div>

                                <div className="px-4">
                                    <p>Sarah Johnson</p>
                                    <p>Belgrade, Serbia</p>
                                    <p>20371</p>
                                    <p>1223 3432 3344 0082</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="border py-5 shadow-md">
                                <div className="flex justify-between px-4 pb-5">
                                    <p className="font-bold">Billing Address</p>
                                    <a className="text-sm text-violet-900" href="#">Edit</a>
                                </div>

                                <div className="px-4">
                                    <p>Sarah Johnson</p>
                                    <p>Belgrade, Serbia</p>
                                    <p>20371</p>
                                    <p>1223 3432 3344 0082</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
       
    );
}

export default account;