'use client'
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import axios from 'axios';
import { IonIcon } from '@ionic/react';
import { caretDown, caretUp, search } from 'ionicons/icons';
import PopUpModalScheme from './PopUpModal';



export default function GovScheme() {
    const [data, setData] = useState({})
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const [item, setItem] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = item
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))






    const handleFetch = async (category) => {

        try {
            const response = await axios.get(`http://127.0.0.1:8000/v2/gov-scheme`);
            if (response.status === 200) {
                setItem(response.data);
                // console.log(item);
            }
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        handleFetch()
    }, [])

    const showDetail = () => {
        openModal();
    }

    function handleButtonClick(product) {
        setData(product);
        openModal();
    }

    return (
        <>
            <div className="mx-auto flex justify-center  items-start px-5 mb-5">
                <section className="rounded-2xl mt-5 flex justify-between bg-emerald-900 px-5">
                    <div className="py-5 px-2 lg:px-16">
                        <p className="text-white font-bold">AGRIHELP STORE</p>
                        <p className="text-white font-semibold">Contains More than</p>

                        <p className="pt-4 text-white text-2xl">
                            Products
                        </p>

                    </div>
                    <img
                        className="ml-20 -mr-5 hidden w-[250px] h-[200px]  object-cover md:block rounded-2xl bg-blend-darken"
                        src="https://cdn.pixabay.com/photo/2020/05/18/11/07/special-sale-5185721_1280.png"
                        alt="Rainbow credit card with macbook on a background"
                    />

                </section>
            </div>
            <div className="bg-white">

                <div className="flex justify-center pt-8">
                    <div className="w-3/6">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full h-10 pl-4 pr-10 text-sm rounded-full focus:outline-none focus:shadow-outline"
                                placeholder="Search products..."
                                value={null}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="absolute top-0 right-0 mt-3 mr-4">
                                <IonIcon icon={search}></IonIcon>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`w-[80%] ml-auto mr-auto`}>
                    <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts?.map((product, idx) => (

                            <div key={idx} className="px-2 pb-4 md:px-5">

                                <section
                                    key={idx}
                                    className="flex flex-col w-full md:w-full lg:w-full"
                                >
                                    <div className="flex flex-col">
                                        <div className="relative flex items-center justify-center">
                                            <img
                                                className="w-48 h-48 object-scale-down"
                                                src={product.image}
                                                alt={product.name}
                                            />
                                            <div className="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100">

                                            </div>

                                        </div>
                                        <div>
                                            <p className="mt-2 text-xl h-[3.6rem] overflow-hidden">{product?.name}</p>
                                            <p className="mt-2">{product?.brand}</p>
                                            <p className="text-lg text-teal-950 font-semibold">
                                                From  : {product?.openDate} -
                                                <br></br>
                                                <span className="text-lg text-gray-500 font-semibold"> {product?.closeDate}</span>
                                            </p>

                                            <div  >

                                                <button onClick={() => handleButtonClick(product)}
                                                    className={`rounded-2xl my-5 h-10 w-full ${product?.isOpen === "TRUE" ? "bg-teal-600" : "bg-teal-950"} text-gray-50 hover:bg-teal-800 transition duration-500 ease-in-out`}>
                                                    {product?.isOpen === "TRUE" ? (
                                                        <span>View</span>
                                                    ) : (
                                                        <span className="line-through">Registration Closed</span>
                                                    )}
                                                </button>

                                            </div>

                                        </div>
                                    </div>
                                </section>
                            </div>
                        ))}
                        {isModalOpen && (
                            <PopUpModalScheme data={data} isOpen={isModalOpen} closeModal={closeModal} />
                        )}
                    </div>
                </div>

            </div>
        </>
    );
};

