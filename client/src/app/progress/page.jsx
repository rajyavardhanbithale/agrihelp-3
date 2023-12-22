'use client'

import { useState } from "react"

export default function Progress() {
    const [showTimeline, setShowTimeline] = useState(false)
    const [showDiv, setShowDiv] = useState(false)
    const [animation, setAnimation] = useState(false)

    const data = {
        "rice_cultivation_plan": [
            {
                "title": "land_preparation",
                "tasks": [
                    "Select a suitable location with access to water for irrigation.",
                    "Clear the land of any debris, weeds, or previous crop remnants.",
                    "Plow the field to break up the soil and prepare it for planting.",
                    "Level the field to ensure uniform water distribution during irrigation."
                ],
                "timeline": "Day 0-15"
            },
            {
                "title": "seed_selection_and_treatment",
                "tasks": [
                    "Choose high-quality rice seeds suitable for the local climate and soil.",
                    "Conduct a germination test to ensure seed viability.",
                    "Treat the seeds with fungicides or pesticides to prevent diseases.",
                    "Soak the seeds in water for 24 hours to enhance germination."
                ],
                "timeline": "Day 16-20"
            },
            {
                "title": "nursery_establishment",
                "tasks": [
                    "Create seedbeds or nurseries for germinating seeds.",
                    "Sow the treated seeds in the nursery beds.",
                    "Provide adequate water and nutrients for seedling growth.",
                    "Protect seedlings from pests and diseases using appropriate measures."
                ],
                "timeline": "Day 21-30"
            },
            {
                "title": "transplanting",
                "tasks": [
                    "Prepare the main field for transplanting by plowing and leveling.",
                    "Harden the seedlings by gradually exposing them to outdoor conditions.",
                    "Transplant healthy seedlings from the nursery to the main field.",
                    "Maintain proper spacing between seedlings to facilitate growth."
                ],
                "timeline": "Day 31-40"
            },
            {
                "title": "crop_management",
                "tasks": [
                    "Implement a suitable irrigation schedule based on crop needs.",
                    "Apply a balanced fertilizer to provide essential nutrients.",
                    "Monitor and control pests and diseases through regular inspections.",
                    "Periodically weed the field to reduce competition for nutrients.",
                    "Ensure proper drainage to prevent waterlogging."
                ],
                "timeline": "Day 41-100"
            },
            {
                "title": "flowering_and_grain_formation",
                "tasks": [
                    "Monitor the flowering stage for any abnormalities.",
                    "Provide additional nutrients if needed for grain formation.",
                    "Protect the crop from adverse weather conditions during this critical stage."
                ],
                "timeline": "Day 101-110"
            },
            {
                "title": "harvesting",
                "tasks": [
                    "Determine the appropriate time for harvesting based on crop maturity.",
                    "Use sickles or machinery to cut the rice plants at the base.",
                    "Bundle harvested rice and leave it in the field for drying."
                ],
                "timeline": "Day 111-120"
            },
            {
                "title": "post-harvest_processing",
                "tasks": [
                    "Thresh the dried rice to separate grains from the straw.",
                    "Winnow to remove chaff and other impurities.",
                    "Properly store the harvested rice in a cool, dry place.",
                    "Milling the rice to remove the outer husk."
                ],
                "timeline": "Day 121-130"
            },
            {
                "title": "quality_check_and_packaging",
                "tasks": [
                    "Conduct quality checks to ensure the rice meets standards.",
                    "Package the processed rice in suitable containers.",
                    "Label the packages with relevant information."
                ],
                "timeline": "Day 131-140"
            },
            {
                "title": "marketing_and_distribution",
                "tasks": [
                    "Develop marketing strategies for selling the rice.",
                    "Establish distribution channels to reach consumers.",
                    "Ensure proper storage and transportation to maintain quality."
                ],
                "timeline": "Day 141-150"
            }
        ]
    }
    const data1 = [true, false, false, false, false, false, false, false, false, false]

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

    return (
        <>
            <div className="lg:flex lg:items-center lg:justify-center lg:h-full">
                <div className="p-16 lg:w-1/2 lg:mx-auto">
                    <ol className="relative border-l-8 border-gray-200 bg-white">
                        {data?.rice_cultivation_plan.map((stage, idx) => (

                            <li key={idx} className="mb-10 ms-6">

                                <span className={`${data1[idx] ? "bg-green-600" : "bg-gray-600"} absolute flex items-center justify-center w-8 h-8 rounded-full -start-5`}></span>
                                <span className={`${data1[idx] ? "bg-green-600" : "bg-gray-600"} text-white px-2 py-1 rounded-2xl`}>
                                    {stage.timeline}
                                </span>
                                <div className={`${data1[idx] ? "bg-green-600" : "bg-gray-600"}  mt-4 flex flex-col items-center justify-between p-4 border rounded-lg shadow-sm sm:flex `}>
                                    <div onClick={() => handleToggle(stage.title)} className="cursor-pointer text-2xl capitalize w-full text-center font-bold text-white">
                                        {stage.title.replace(/_/g, ' ')}
                                    </div>
                                    <div onClick={() => handleToggle(stage.title)} className={`${data1[idx] ? "bg-green-800" : "bg-gray-800"} cursor-pointer text-lg mt-4 capitalize rounded-2xl text-center font-semibold text-white px-4 py-2`}>
                                        Read
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
                                                <button className={`${data1[idx] ? "bg-green-800" : "bg-gray-800"}  py-2 px-4 rounded-2xl mx-2 my-4`}>Mark As Done</button>
                                                <button className={`${data1[idx] ? "bg-green-800" : "bg-gray-800"}  py-2 px-4 rounded-2xl mx-2 my-4`}>Shop Product</button>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            
            
           
        </>
    )
}
