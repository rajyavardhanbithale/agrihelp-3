'use client'
import ShopHeader from '@/app/components/shop/ShopHeader';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';



function Cart() {
   
    const [data, setData] = useState([])
    const [productData, setProductData] = useState([]);
    const [total, setTotal] = useState(0);
    const [fakeTotal, setFakeTotal] = useState(0);

    useEffect(() => {
        const fetchDataForProduct = async (productId) => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/v2/shop-product?productID=${productId}`);
                if (response.status === 200) {
                    const productInfo = response.data;
                    setProductData((prevData) => [...prevData, productInfo]);
                } else {
                    console.error(`Failed to fetch data for product ID: ${productId}`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        const fetchData = async () => {

            if (data?.length > 0) {

                await Promise.all(data?.map((productId) => fetchDataForProduct(productId)));
            }
        };

        fetchData();
    }, [data]);

    useEffect(() => {
        // Move setData outside the effect
        const cookie = Cookies.get('shop');
        const cookieData = JSON.parse(cookie || '[]');
        setData(cookieData);
    }, []);

    useEffect(() => {
        const totalPrice = productData.reduce((acc, element) => acc + element.price, 0);
        setTotal(totalPrice);

        const totalPrice1 = productData.reduce((acc, element) => acc + element.originalPrice, 0);
        setFakeTotal(totalPrice1);
    }, [productData]);

    console.log(data);

    function removeFromCart(productId) {
        

        // Get the current list from the cookie
        const existingList = JSON.parse(Cookies.get('shop') || '[]');

        // Check if the product ID is in the list
        const productIndex = existingList.indexOf(productId);

        if (productIndex !== -1) {
            // If the product is in the list, remove it
            const updatedList = [...existingList.slice(0, productIndex), ...existingList.slice(productIndex + 1)];

            // Set the updated list back in the cookie
            Cookies.set('shop', JSON.stringify(updatedList));

            const cookie = Cookies.get('shop');
            const cookieData = JSON.parse(cookie || '[]');
            setData(cookieData);
            window.location.href = '/shop/cart'
        } else {
            console.log('Product not found in the cart');
        }
    }


    return (
        <>
        <ShopHeader />
            <section className='md:flex mt-10'>
                <section className="w-full md:h-[600px] md:w-full md:max-w-[1200px] md:grid-cols-1 gap-3 px-5 pb-10 md:grid">
                    <div className="m-5">
                        <span className="text-4xl font-bold tracking-wide">Shopping Cart Items</span>
                        <hr />
                    </div>

                    <table className="w-full">
                        <tbody>
                            {productData.map((item) => (

                                <tr className="h-[100px]">
                                    <td className="flex w-full border px-4 py-4">
                                        <img
                                            className="self-start object-contain"
                                            width="90px"
                                            src={item?.images?.[0]}
                                            alt="Chair image"
                                        />
                                        <div className="ml-3 flex w-full flex-col justify-center">
                                            <div className="flex items-center justify-between">
                                                <p className="text-xl font-bold">{item?.name}</p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="text-sm py-2 text-gray-400">Description: {item?.description}</p>
                                            <p className="py-3 text-xl font-bold text-teal-800">&#8377;{item?.price}</p>
                                            <div className="mt-2 flex w-full items-center justify-between">
                                                <div className="flex items-center justify-center">

                                                </div>
                                                <div onClick={()=>removeFromCart(item?.productId)}>

                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="m-0 h-5 w-5 cursor-pointer"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </section>


                <section className="mx-auto w-full px-4 md:max-w-[400px] m-20">
                    <div className="">
                        <div className="border py-5 px-4 shadow-md">
                            <p className="font-bold">ORDER SUMMARY</p>
                            {/* Summary details */}
                            <div className="flex justify-between border-b py-5">
                                <p>Subtotal</p>
                                <p>₹ {fakeTotal}</p>
                            </div>
                            <div className="flex justify-between border-b py-5">
                                <p>You Save</p>
                                <p>₹ {fakeTotal - total}</p>
                            </div>
                            <div className="flex justify-between border-b py-5">
                                <p>Shipping</p>
                                <p>{total >= 200 ? "Free" : "₹ 200"}</p>
                            </div>
                            <div className="flex justify-between py-5">
                                <p>Total</p>
                                <p>₹ {total}</p>
                            </div>
                            {/* Button */}
                            <a href="checkout-address.html">
                                <button className="w-full rounded-xl bg-teal-900 px-5 py-2 text-white">
                                    Proceed to checkout
                                </button>
                            </a>
                        </div>
                    </div>
                </section>
            </section>

        </>
    );
}

export default Cart;
