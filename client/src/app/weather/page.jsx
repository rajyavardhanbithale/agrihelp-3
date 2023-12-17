'use client'
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

export default function main() {

    const data = {
        "location": {
            "name": "Raipur",
            "region": "Chhattisgarh",
            "country": "India",
            "country_code": "IN"
        },
        "current": {
            "last_updated_epoch": 1702741071,
            "last_update_formatted": "Saturday 16th December",
            "main": {
                "temp": "17.1",
                "feels_like": "16.9",
                "temp_min": "17.1",
                "temp_max": "17.1"
            },
            "day_night": "night",
            "condition": {
                "type1": "Clear",
                "type2": {
                    "main": "Haze",
                    "description": "haze"
                },
                "icon": "https://cdn.weatherapi.com/weather/64x64/night/113.png",
                "icon_code": "50n"
            },
            "wind": {
                "kmph": 6.5,
                "mph": 4.0,
                "direction": "SE"
            },
            "precipitation": {
                "in_mm": 0.0,
                "in_in": 0.0
            },
            "astro": {
                "sunrise": "06:33 AM",
                "sunset": "05:25 PM"
            },
            "humidity": 77,
            "cloud": 0,
            "rain": 0
        }
    }

    const data1 = [
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 00:00",
                "time_epoch": 1702751400,
                "time_formatted": "12 AM",
                "temp": 24.8,
                "condition": {
                    "type": "Partly cloudy",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/116.png",
                    "code": 1003
                },
                "wind": {
                    "kmph": 7.2,
                    "mph": 4.5
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 90,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 01:00",
                "time_epoch": 1702755000,
                "time_formatted": "01 AM",
                "temp": 24.5,
                "condition": {
                    "type": "Partly cloudy",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/116.png",
                    "code": 1003
                },
                "wind": {
                    "kmph": 6.5,
                    "mph": 4
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 90,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 02:00",
                "time_epoch": 1702758600,
                "time_formatted": "02 AM",
                "temp": 24.4,
                "condition": {
                    "type": "Patchy rain possible",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/176.png",
                    "code": 1063
                },
                "wind": {
                    "kmph": 11.5,
                    "mph": 7.2
                },
                "precipitation": {
                    "in_mm": 0.04,
                    "in_in": 0
                },
                "humidity": 91,
                "rain": 86
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 03:00",
                "time_epoch": 1702762200,
                "time_formatted": "03 AM",
                "temp": 24.3,
                "condition": {
                    "type": "Partly cloudy",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/116.png",
                    "code": 1003
                },
                "wind": {
                    "kmph": 10.8,
                    "mph": 6.7
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 91,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 04:00",
                "time_epoch": 1702765800,
                "time_formatted": "04 AM",
                "temp": 24.5,
                "condition": {
                    "type": "Partly cloudy",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/116.png",
                    "code": 1003
                },
                "wind": {
                    "kmph": 9.4,
                    "mph": 5.8
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 90,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 05:00",
                "time_epoch": 1702769400,
                "time_formatted": "05 AM",
                "temp": 24.6,
                "condition": {
                    "type": "Cloudy",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/119.png",
                    "code": 1006
                },
                "wind": {
                    "kmph": 9,
                    "mph": 5.6
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 89,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 06:00",
                "time_epoch": 1702773000,
                "time_formatted": "06 AM",
                "temp": 24.5,
                "condition": {
                    "type": "Patchy rain possible",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/176.png",
                    "code": 1063
                },
                "wind": {
                    "kmph": 7.9,
                    "mph": 4.9
                },
                "precipitation": {
                    "in_mm": 0.06,
                    "in_in": 0
                },
                "humidity": 90,
                "rain": 100
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 07:00",
                "time_epoch": 1702776600,
                "time_formatted": "07 AM",
                "temp": 24.9,
                "condition": {
                    "type": "Partly cloudy",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/116.png",
                    "code": 1003
                },
                "wind": {
                    "kmph": 8.3,
                    "mph": 5.1
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 89,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 08:00",
                "time_epoch": 1702780200,
                "time_formatted": "08 AM",
                "temp": 25.8,
                "condition": {
                    "type": "Sunny",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 6.8,
                    "mph": 4.3
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 86,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 09:00",
                "time_epoch": 1702783800,
                "time_formatted": "09 AM",
                "temp": 26.9,
                "condition": {
                    "type": "Patchy rain possible",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/176.png",
                    "code": 1063
                },
                "wind": {
                    "kmph": 5,
                    "mph": 3.1
                },
                "precipitation": {
                    "in_mm": 0.01,
                    "in_in": 0
                },
                "humidity": 81,
                "rain": 63
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 10:00",
                "time_epoch": 1702787400,
                "time_formatted": "10 AM",
                "temp": 28,
                "condition": {
                    "type": "Partly cloudy",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/116.png",
                    "code": 1003
                },
                "wind": {
                    "kmph": 2.9,
                    "mph": 1.8
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 75,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 11:00",
                "time_epoch": 1702791000,
                "time_formatted": "11 AM",
                "temp": 28.5,
                "condition": {
                    "type": "Patchy rain possible",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/176.png",
                    "code": 1063
                },
                "wind": {
                    "kmph": 4.7,
                    "mph": 2.9
                },
                "precipitation": {
                    "in_mm": 0.04,
                    "in_in": 0
                },
                "humidity": 73,
                "rain": 83
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 12:00",
                "time_epoch": 1702794600,
                "time_formatted": "12 PM",
                "temp": 28.5,
                "condition": {
                    "type": "Patchy rain possible",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/176.png",
                    "code": 1063
                },
                "wind": {
                    "kmph": 7.9,
                    "mph": 4.9
                },
                "precipitation": {
                    "in_mm": 0.41,
                    "in_in": 0.02
                },
                "humidity": 74,
                "rain": 100
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 13:00",
                "time_epoch": 1702798200,
                "time_formatted": "01 PM",
                "temp": 28.3,
                "condition": {
                    "type": "Patchy light drizzle",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/263.png",
                    "code": 1150
                },
                "wind": {
                    "kmph": 9.4,
                    "mph": 5.8
                },
                "precipitation": {
                    "in_mm": 0.42,
                    "in_in": 0.02
                },
                "humidity": 76,
                "rain": 100
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 14:00",
                "time_epoch": 1702801800,
                "time_formatted": "02 PM",
                "temp": 28.3,
                "condition": {
                    "type": "Light rain shower",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/353.png",
                    "code": 1240
                },
                "wind": {
                    "kmph": 11.5,
                    "mph": 7.2
                },
                "precipitation": {
                    "in_mm": 0.86,
                    "in_in": 0.03
                },
                "humidity": 77,
                "rain": 100
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 15:00",
                "time_epoch": 1702805400,
                "time_formatted": "03 PM",
                "temp": 27.9,
                "condition": {
                    "type": "Patchy light drizzle",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/263.png",
                    "code": 1150
                },
                "wind": {
                    "kmph": 11.9,
                    "mph": 7.4
                },
                "precipitation": {
                    "in_mm": 0.63,
                    "in_in": 0.02
                },
                "humidity": 79,
                "rain": 100
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 16:00",
                "time_epoch": 1702809000,
                "time_formatted": "04 PM",
                "temp": 27.5,
                "condition": {
                    "type": "Light rain shower",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/353.png",
                    "code": 1240
                },
                "wind": {
                    "kmph": 11.2,
                    "mph": 6.9
                },
                "precipitation": {
                    "in_mm": 0.87,
                    "in_in": 0.03
                },
                "humidity": 81,
                "rain": 100
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 17:00",
                "time_epoch": 1702812600,
                "time_formatted": "05 PM",
                "temp": 29,
                "condition": {
                    "type": "Partly cloudy",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/116.png",
                    "code": 1003
                },
                "wind": {
                    "kmph": 11.2,
                    "mph": 6.9
                },
                "precipitation": {
                    "in_mm": 0.42,
                    "in_in": 0.02
                },
                "humidity": 84,
                "rain": 100
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 18:00",
                "time_epoch": 1702816200,
                "time_formatted": "06 PM",
                "temp": 26.5,
                "condition": {
                    "type": "Light rain shower",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/353.png",
                    "code": 1240
                },
                "wind": {
                    "kmph": 7.6,
                    "mph": 4.7
                },
                "precipitation": {
                    "in_mm": 0.86,
                    "in_in": 0.03
                },
                "humidity": 87,
                "rain": 100
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 19:00",
                "time_epoch": 1702819800,
                "time_formatted": "07 PM",
                "temp": 26.3,
                "condition": {
                    "type": "Patchy light rain",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/293.png",
                    "code": 1180
                },
                "wind": {
                    "kmph": 8.3,
                    "mph": 5.1
                },
                "precipitation": {
                    "in_mm": 1.3,
                    "in_in": 0.05
                },
                "humidity": 87,
                "rain": 100
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 20:00",
                "time_epoch": 1702823400,
                "time_formatted": "08 PM",
                "temp": 26.1,
                "condition": {
                    "type": "Patchy rain possible",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/176.png",
                    "code": 1063
                },
                "wind": {
                    "kmph": 11.2,
                    "mph": 6.9
                },
                "precipitation": {
                    "in_mm": 1.08,
                    "in_in": 0.04
                },
                "humidity": 88,
                "rain": 100
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 21:00",
                "time_epoch": 1702827000,
                "time_formatted": "09 PM",
                "temp": 25.8,
                "condition": {
                    "type": "Patchy rain possible",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/176.png",
                    "code": 1063
                },
                "wind": {
                    "kmph": 13.3,
                    "mph": 8.3
                },
                "precipitation": {
                    "in_mm": 0.35,
                    "in_in": 0.01
                },
                "humidity": 89,
                "rain": 100
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 22:00",
                "time_epoch": 1702830600,
                "time_formatted": "10 PM",
                "temp": 25.4,
                "condition": {
                    "type": "Patchy rain possible",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/176.png",
                    "code": 1063
                },
                "wind": {
                    "kmph": 12.6,
                    "mph": 7.8
                },
                "precipitation": {
                    "in_mm": 0.06,
                    "in_in": 0
                },
                "humidity": 91,
                "rain": 100
            }
        },
        {
            "location": {
                "name": "Colombo",
                "region": "Western",
                "country": "Sri Lanka"
            },
            "info": {
                "time": "2023-12-17 23:00",
                "time_epoch": 1702834200,
                "time_formatted": "11 PM",
                "temp": 25.1,
                "condition": {
                    "type": "Patchy rain possible",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/176.png",
                    "code": 1063
                },
                "wind": {
                    "kmph": 11.9,
                    "mph": 7.4
                },
                "precipitation": {
                    "in_mm": 0.03,
                    "in_in": 0
                },
                "humidity": 92,
                "rain": 64
            }
        }
    ]

    const data2 = [{ "location": { "name": "Colombo", "region": "LK" }, "info": { "time_epoch": 1702836000, "time_formatted": "Sunday 17th December", "time_part": { "date": "17", "day": "Sunday", "month": "December" }, "main": { "temp": 25, "temp_min": 25, "temp_max": 25 }, "condition": { "type": "Rain", "description": "light rain", "icon": "10n" }, "wind": { "mph": 3.35 }, "clouds": 92, "rain": 97 } }, { "location": { "name": "Colombo", "region": "LK" }, "info": { "time_epoch": 1702922400, "time_formatted": "Monday 18th December", "time_part": { "date": "18", "day": "Monday", "month": "December" }, "main": { "temp": 24, "temp_min": 24, "temp_max": 24 }, "condition": { "type": "Rain", "description": "light rain", "icon": "10n" }, "wind": { "mph": 3.89 }, "clouds": 99, "rain": 89 } }, { "location": { "name": "Colombo", "region": "LK" }, "info": { "time_epoch": 1703008800, "time_formatted": "Tuesday 19th December", "time_part": { "date": "19", "day": "Tuesday", "month": "December" }, "main": { "temp": 24, "temp_min": 24, "temp_max": 24 }, "condition": { "type": "Rain", "description": "light rain", "icon": "10n" }, "wind": { "mph": 4.41 }, "clouds": 95, "rain": 87 } }, { "location": { "name": "Colombo", "region": "LK" }, "info": { "time_epoch": 1703095200, "time_formatted": "Wednesday 20th December", "time_part": { "date": "20", "day": "Wednesday", "month": "December" }, "main": { "temp": 25, "temp_min": 25, "temp_max": 25 }, "condition": { "type": "Clouds", "description": "overcast clouds", "icon": "04n" }, "wind": { "mph": 4.88 }, "clouds": 97, "rain": 79 } }, { "location": { "name": "Colombo", "region": "LK" }, "info": { "time_epoch": 1703181600, "time_formatted": "Thursday 21th December", "time_part": { "date": "21", "day": "Thursday", "month": "December" }, "main": { "temp": 24, "temp_min": 24, "temp_max": 24 }, "condition": { "type": "Rain", "description": "moderate rain", "icon": "10n" }, "wind": { "mph": 2.37 }, "clouds": 78, "rain": 50 } }]


    return (
        <>

            <div className="mt-40 text-base  text-black h-full bg-White bg-fixed bg-no-repeat">
                <main className="flex flex-wrap w-[80%] lg:w-w-[70%] mx-auto my-2 text-lg">
                    <MainTop data={data}></MainTop>
                </main>
            </div>

            <div className="flex flex-col justify-center items-center min-h-screen">

                <Middle data={data1} />
                <Bottom data={data2} />

            </div>



        </>
    )
}



function MainTop(props) {

    const data = props?.data
    return (
        <>

            <div class="w-full ">
                <h1 class="  text-2xl font-semibold">{data?.location?.name}, {data?.location?.country_code}</h1>
                <div class="">{data?.current?.last_update_formatted}</div>

            </div>

            <div class="flex mt-1 justify-between items-center  sm:w-full md:flex md:mt-1 md:w-1/2 ">
                <div class=" flex my-4 text-center   md:w-44 sm:w-1/2  px-3 ">
                    <img src={`https://openweathermap.org/img/wn/${data?.current?.condition?.icon_code}@2x.png`} alt="weather icon " className="" />
                </div>
                <div class="flex-grow text-center sm:w-1/2 sm:text-center px-3 ">
                    <div class=" text-7xl font-light sm:text-left">{data?.current?.main?.temp} &deg; </div>
                    <div class=" text-center text-base sm:text-left">{data?.current?.condition?.type1}  |  {data?.current?.condition?.type2?.main} </div>
                </div>
            </div>

            <div
                class=" justify-around p-4  border-t-0 border-b-0 border-l-2 flex border-black border-opacity-50 md:w-1/2  sm:w-full   sm:border-0  mt-4  md-4 sm:border-t-2 sm:border-b-2  ">
                <div class="mx-3">
                    <div class="mt-4 text-2xl">{data?.current?.main?.temp_max}&deg;</div>
                    <div class="text-black opacity-60">High</div>
                    <div class="mt-4 text-2xl">{data?.current?.main?.temp_min}&deg;</div>
                    <div class="text-black opacity-60">Low</div>
                </div>
                <div class="mx-3">
                    <div class="mt-4 text-2xl">{Math.round(data?.current?.wind?.mph)} mph</div>
                    <div class="text-black opacity-60">Wind</div>
                    <div class="mt-4 text-2xl">{data?.current?.rain}%</div>
                    <div class="text-black opacity-60">Rain</div>
                </div>
                <div class="mx-3">
                    <div class="mt-4 text-2xl">{data?.current?.astro?.sunrise}</div>
                    <div class="text-black opacity-60">Sunrise</div>
                    <div class="mt-4 text-2xl">{data?.current?.astro?.sunset}</div>
                    <div class="text-black opacity-60">Sunset</div>
                </div>
            </div>

        </>
    )
}

function Middle(props) {
    const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);
    const [lastVisibleIndex, setLastVisibleIndex] = useState(5);


    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Number of slides to show at a time
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],

        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        easing: 'ease', // Smooth scrolling
        swipeToSlide: true, // Scroll freely
        draggable: true, // Scroll freely
        afterChange: (currentSlide) => {
            setFirstVisibleIndex(currentSlide);
            // Assuming you want to show three slides at a time
            setLastVisibleIndex(currentSlide + 5);
        },

    };
    const data = props?.data

    console.log("curr:", firstVisibleIndex);
    console.log("next:", lastVisibleIndex);
    return (
        <>
            <div className="mt-3 w-full justify-between sm:max-w-[748px] ">
                <h2 className="heading text-black font-bold text-lg ">Today's weather</h2>



                <div className="w-[100%] ml-auto mr-auto">
                    <Slider
                        {...settings}

                    >
                        {data?.map((item, idx) => (
                            <div key={idx} className="px-2 pb-4 md:px-5">
                                <div className="flex-shrink-0 px-3  bg-white border-black text-base text-center h-[200px] w-[120px] mx-auto flex flex-col justify-center items-center">
                                    <div className="mb-2">{item?.info?.time_formatted}</div>
                                    <img src={item?.info?.condition?.icon} alt="Mostly sunny" className="w-16 h-16 object-cover my-2 " />
                                    <div>{item?.info?.temp.toFixed(0)}&deg;</div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <WeatherDataChart weatherData={data} current={firstVisibleIndex} next={lastVisibleIndex} />
            </div>
        </>
    )
}

function Bottom(props) {
    const data = props?.data
    return (
        <>
            <div class="w-[90%] lg:w-[60%] -mt-24">
                <h2 class=" text-black font-bold text-2xl text-center py-5">Next 5 days</h2>
                <div class="flex-col ">
                    {data?.map((item, idx) => (

                        <div class="flex justify-around items-center my-5 rounded-lg border-2 border-teal-900 text-lg text-center" key={idx}>

                            <div class="w-1/6 mb-3">
                                {item?.info?.time_part?.day?.slice(0, 3)}
                                <div class="text-black opacity-60 text-xs"> {item?.info?.time_part?.date}  {item?.info?.time_part?.month?.slice(0, 3)}</div>
                            </div>

                            <div class="ml-12 mr-12">
                                <img className='h-20' src={`https://openweathermap.org/img/wn/${item?.info?.condition?.icon}@2x.png`} alt={item?.condition?.type} />
                            </div>

                            <div class="w-1/12 ">
                                {item?.info?.main?.temp_min}&deg;
                                <div class="text-black opacity-60 text-xs">Low</div>
                            </div>

                            <div class="w-1/12">
                                {item?.info?.main?.temp_max}&deg;
                                <div class="text-black opacity-60 text-xs">High</div>
                            </div>

                            <div class="w-1/12">
                                {item?.info?.rain?.toFixed(0)}%
                                <div class="text-black opacity-60 text-xs">Rain</div>
                            </div>

                            <div class="w-1/6">
                                {item?.info?.wind?.mph?.toFixed(1)} mph
                                <div class="text-black opacity-60 text-xs">Wind</div>
                            </div>

                        </div>
                    ))}




                </div>
            </div>

        </>
    )

}


const WeatherDataChart = (props) => {
    const weatherData = props?.weatherData
    const current = props?.current;
    const next = props?.next;
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (weatherData) {

            const data = weatherData.slice(current, next).map((item) => ({
                time: item?.info?.time_formatted,
                temperature: item?.info?.temp,
            }));
            setChartData(data);
        }
    }, [current, next]);

    return (
        <>
            <div class="-mt-10 w-full justify-between sm:max-w-[708px]">
                <div className="flex flex-row gap-5 my-5 md:flex md:gap-10 overflow-x-auto max-h-screen">
                    <div className="chart-container" style={{ width: '100%' }}>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={chartData}>
                                <Tooltip />
                                <XAxis dataKey="time" interval={0} width="80%" height={140} />
                                <Line type="monotone" animationDuration={300} dataKey="temperature" stroke="#042F2E" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
};



const CustomPrevArrow = ({ onClick }) => (
    <button
        className="z-10 absolute lg:-left-5  -left-7  top-1/2 flex items-center justify-center align-middle  text-xl transform -translate-y-1/2 bg-teal-950 hover:bg-teal-800 transition duration-500 ease-in text-white px-1 py-1 rounded-full"
        onClick={onClick}
    >
        {/* <IonIcon icon={arrowBackCircle}></IonIcon> */}
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        className="z-10 absolute lg:-right-1 -right-7 top-1/2 flex items-center justify-center align-middle  text-xl transform -translate-y-1/2 bg-teal-950 hover:bg-teal-800 transition duration-500 ease-in text-white px-1 py-1 rounded-full"
        onClick={onClick}
    >
        {/* <IonIcon icon={arrowForwardCircle}></IonIcon> */}
    </button>
);
