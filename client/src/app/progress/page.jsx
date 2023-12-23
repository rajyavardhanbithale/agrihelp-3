'use client'

import axios from "axios"
import Confetti from 'react-confetti'
import { useState } from "react"
import ConfettiExplosion from "react-confetti-explosion"

export default function Progress() {
    const [showTimeline, setShowTimeline] = useState(false)
    const [showDiv, setShowDiv] = useState(false)
    const [animation, setAnimation] = useState(false)
    const [cropData, setCropData] = useState(null)
    const [progressStage, setProgressStage] = useState(null)
    const [error, setError] = useState(null)
    const [cropName, setCropName] = useState(null)


    const handlefetch = async (param, body) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/progress${param}`, body)
            if (response.status === 200) {
                return response.data
            }
        } catch (error) {
            console.log(error)
            setError("error")
        }

    }

    const handleCropButton = async (cropName) => {
        setCropName(cropName)
        let body = {
            "email": "ramiwick5@gmail.com",
            "name": cropName,
            "stage": true,
            "stageIndex": 0
        }
        const response = await handlefetch("?method=get", body)
        setCropData(response?.[cropName])
        body = {
            "email": "ramiwick5@gmail.com",
            "name": cropName,
            "stage": true,
            "stageIndex": 0
        }
        const response1 = await handlefetch("?method=update", body)
        setProgressStage(response1.detail)


    }

    const handleUpdateCrop = async (cropName, index) => {
        let body = {
            "email": "ramiwick5@gmail.com",
            "name": cropName,
            "stage": true,
            "stageIndex": index
        }
        const response = await handlefetch("?method=update", body)
        console.log(index);
        setProgressStage(prevProgressStage => {
            const updatedProgressStage = [...prevProgressStage];
            updatedProgressStage[index] = true;
            return updatedProgressStage;
        });
    }

    console.log(progressStage);

    const handleToggle = (stage) => {
        setShowTimeline(prevState => ({
            ...prevState,
            [stage]: !prevState[stage],
        }));

        setShowDiv(prevState => ({
            ...prevState,
            [stage]: !prevState[stage],
        }));
        setAnimation(!animation)
    }
    const availableCrop = ["rice", "wheat"]
    const width = window.innerWidth / 2
    const height = window.innerHeight / 2
    return (
        <>




            {(cropData && progressStage) ? (
                <div className="lg:flex lg:items-center lg:justify-center lg:h-full">
                    <div className="p-16 lg:w-1/2 lg:mx-auto">
                        <ol className="relative border-l-8 border-gray-200 bg-white">
                            {cropData?.map((stage, idx) => (

                                <li key={idx} className="mb-10 ms-6">

                                    <span className={`${progressStage[idx] ? "bg-green-600" : "bg-gray-600"} absolute flex items-center justify-center w-8 h-8 rounded-full -start-5`}></span>
                                    <span className={`${progressStage[idx] ? "bg-green-600" : "bg-gray-600"} text-white px-2 py-1 rounded-2xl`}>
                                        {stage.timeline}
                                    </span>
                                    <div className={`${progressStage[idx] ? "bg-green-600" : "bg-gray-600"}  mt-4 flex flex-col items-center justify-between p-4 border rounded-lg shadow-sm sm:flex `}>
                                        <div onClick={() => handleToggle(stage.title)} className="cursor-pointer text-2xl capitalize w-full text-center font-bold text-white">
                                            {stage.title.replace(/_/g, ' ')}
                                        </div>
                                        <div onClick={() => handleToggle(stage.title)} className={`${progressStage[idx] ? "bg-green-800" : "bg-gray-800"} cursor-pointer text-lg mt-4 capitalize rounded-2xl text-center font-semibold text-white px-4 py-2`}>
                                            {showDiv[stage.title] ? "Close" : "Read"}
                                        </div>

                                        {showDiv[stage.title] && (
                                            <div className={` text-white w-full text-center text-xl p-4 ${animation ? "animate-fade-down ease-out" : ""}`}>
                                                <ul>
                                                    {showTimeline[stage.title] && stage.tasks.map((task, taskIdx) => (
                                                        <div key={idx}>
                                                            <li>
                                                                {task}
                                                            </li>

                                                        </div>
                                                    ))}
                                                    {progressStage[idx] ? (
                                                        <>
                                                            <div className="flex w-full justify-center align-middle items-center">
                                                                <ConfettiExplosion particleSize={10} particleCount={200} force={0.3} />
                                                            </div>
                                                            <button className={`${progressStage[idx] ? "bg-green-950" : "bg-gray-800"}  py-2 px-4 rounded-2xl mx-2 my-4`}>Completed</button>
                                                        </>
                                                    ) : (
                                                        <button onClick={() => handleUpdateCrop(cropName, idx)} className={`${progressStage[idx] ? "bg-green-800" : "bg-gray-800"}  py-2 px-4 rounded-2xl mx-2 my-4`}>Mark As Done</button>
                                                    )}

                                                    <button className={`${progressStage[idx] ? "bg-green-800" : "bg-gray-800"}  py-2 px-4 rounded-2xl mx-2 my-4`}>Shop Product</button>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

            ) : (
                <div className="mt-26 flex mix-h-screen md:h-screen overflow-hidden">
                    <img className="hidden lg:block w-1/2 object-contain rounded-xl" src="https://storage.icograms.com/templates/preview/farm-smartphone.png" alt="" />
                    <div className="flex flex-col w-full leading-10 tracking-wider justify-center align-middle">
                        <span className="text-5xl text-center font-semibold">Crop Cultivation Guide</span>
                        <span className="text-lg text-center font-light mt-4 p-2">Navigate the Path to Abundant Harvests with Expert Tips and Proven Techniques</span>
                        <span className="text-2xl text-center  mt-8 p-2 font-semibold">Select Crop</span>

                        <div className=" flex flex-col w-full justify-center gap-8 items-center em text-center p-8 ">
                            {availableCrop.map((crop, idx) => (
                                <span onClick={() => handleCropButton(crop)} className="py-2 px-5 w-36 bg-green-800 text-white capitalize rounded-3xl shadow-2xl transition duration-300 hover:scale-110" key={idx}>{crop}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}






        </>
    )
}
