'use client'

import { IonIcon } from "@ionic/react";
import axios from "axios";
import { reloadOutline } from "ionicons/icons";
import { useState, useEffect } from "react";



export default function fertilizer() {
    const [crop, setCrop] = useState(null)
    const [loading, setLoading] = useState(false)
    const [selectedCrop, setSelectedCrop] = useState('');
    const [error, setError] = useState(null);
    const cropList = ['rice', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas', 'mothbeans', 'mungbean', 'blackgram', 'lentil', 'pomegranate', 'banana', 'mango', 'grapes', 'watermelon', 'muskmelon', 'apple', 'orange', 'papaya', 'coconut', 'cotton', 'jute', 'coffee']

    const [formData, setFormData] = useState({
        Nitrogen: 200,
        Phosphorus: 200,
        Potassium: 220,

    });

    const handleCropChange = (e) => {
        setSelectedCrop(e.target.value);
        console.log(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();

        // Validate form fields
        const mandatoryFields = ['Nitrogen', 'Phosphorus', 'Potassium'];

        const missingFields = mandatoryFields.filter(field => !formData[field]);
        if (missingFields.length > 0) {
            alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
            setLoading(false)
            return;
        }
        
        const queryParams = `N=${formData.Nitrogen}&P=${formData.Phosphorus}&K=${formData.Potassium}&crop=${selectedCrop}`;
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/fertilizer/recommendation?${queryParams}`);
            // console.log(response.data); // Handle the response as needed
            setCrop(response.data)
            setLoading(false)
            document.getElementById("recommendation").scrollIntoView();
        } catch (error) {
            setError('Error in Fetching Data from Server');
            setLoading(false)
        }
    };

    return (
        <>
            <div>
                <div className="flex sm:h-fit md:h-screen">
                <img
                        className="hidden lg:block w-1/2 object-cover"
                        src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                    <div className="flex scale-[1.2] flex-col items-center justify-center align-middle w-full lg:w-1/2 mx-5 my-3">
                        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                            <div className="mx-auto max-w-2xl text-center">
                                <h2 className="text-5xl font-extrabold tracking-tight sm:text-4xl text-teal-900">
                                    Fertilizer Recommendation
                                </h2>
                                <p className="mt-2 text-lg leading-8 sm:text-2xl text-teal-900">
                                    Give The Required Information For Crop Recommendation
                                </p>
                            </div>
                            <br />
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <input
                                        type="text"
                                        name="Nitrogen"
                                        value={formData.Nitrogen}
                                        onChange={handleInputChange}
                                        className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
                                        placeholder="Nitrogen"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="Phosphorus"
                                        value={formData.Phosphorus}
                                        onChange={handleInputChange}
                                        className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
                                        placeholder="Phosphorus"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="Potassium"
                                        value={formData.Potassium}
                                        onChange={handleInputChange}
                                        className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
                                        placeholder="Potassium"
                                    />
                                </div>

                                <div className="relative inline-block text-left">
                                    <select
                                        value={selectedCrop}
                                        onChange={handleCropChange}
                                        className="appearance-none ring-gray-900/10 rounded-full border w-full border-gray-300 hover:border-gray-500  px-4 py-3 pr-8 leading-tight focus:outline-none focus:shadow-outline custom-scrollbar"
                                    >
                                        <option value="">Select a crop</option>
                                        {cropList.map((crop) => (
                                            <option key={crop} value={crop} className="capitalize">
                                                {crop}
                                            </option>
                                        ))}
                                    </select>
                                    
                                </div>

                            </div>
                            <div className="py-10 flex w-full justify-center">
                                <button
                                    type="submit"
                                    className="ring-1 rounded-full w-1/2 px-4 py-3 ring-gray-900/10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-teal-800 text-white"

                                >
                                    {loading ? (
                                        <span>
                                            <IonIcon icon={reloadOutline} className="animate animate-spin"></IonIcon>
                                        </span>
                                    ) : (
                                        "Submit"
                                    )}
                                </button>
                            </div>
                        </form>
                        <span className="text-red-500 text-xl">{error}</span>
                    </div>

                </div>

                <div className="mt-20 w-3/4 mx-auto">
                    {crop ? (
                        <div className="flex justify-center items-center mb-16 ">
                            <span className="w-1/2 bg-teal-950 py-6 px-5 text-white text-center text-3xl rounded-2xl font-bold ">RESULT</span>
                        </div>
                    ) : null}

                    {crop ? (
                        <div className="w-full p-5 text-2xl text-center md:flex md:justify-between items-center ">
                            <div dangerouslySetInnerHTML={{ __html: crop }} className="leading-loose" />
                        </div>
                    ) : null}
                </div>

                <div id="recommendation" className="p-20"></div>
            </div>
        </>
    )
}


