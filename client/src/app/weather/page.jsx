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
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 00:00",
                "time_epoch": 1702751400,
                "time_formatted": "12 AM",
                "temp": 17.6,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 6.5,
                    "mph": 4
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 42,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 01:00",
                "time_epoch": 1702755000,
                "time_formatted": "01 AM",
                "temp": 17,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 4.7,
                    "mph": 2.9
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 43,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 02:00",
                "time_epoch": 1702758600,
                "time_formatted": "02 AM",
                "temp": 16.5,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 4,
                    "mph": 2.5
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 45,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 03:00",
                "time_epoch": 1702762200,
                "time_formatted": "03 AM",
                "temp": 16.1,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 4,
                    "mph": 2.5
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 46,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 04:00",
                "time_epoch": 1702765800,
                "time_formatted": "04 AM",
                "temp": 15.7,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 5.4,
                    "mph": 3.4
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 47,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 05:00",
                "time_epoch": 1702769400,
                "time_formatted": "05 AM",
                "temp": 15.4,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 6.1,
                    "mph": 3.8
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 50,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 06:00",
                "time_epoch": 1702773000,
                "time_formatted": "06 AM",
                "temp": 15,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 5.8,
                    "mph": 3.6
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 52,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 07:00",
                "time_epoch": 1702776600,
                "time_formatted": "07 AM",
                "temp": 16.2,
                "condition": {
                    "type": "Sunny",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 5.4,
                    "mph": 3.4
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 53,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 08:00",
                "time_epoch": 1702780200,
                "time_formatted": "08 AM",
                "temp": 18.6,
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
                "humidity": 46,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 09:00",
                "time_epoch": 1702783800,
                "time_formatted": "09 AM",
                "temp": 20.8,
                "condition": {
                    "type": "Sunny",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 7.6,
                    "mph": 4.7
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 41,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 10:00",
                "time_epoch": 1702787400,
                "time_formatted": "10 AM",
                "temp": 22.6,
                "condition": {
                    "type": "Sunny",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 7.9,
                    "mph": 4.9
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 37,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 11:00",
                "time_epoch": 1702791000,
                "time_formatted": "11 AM",
                "temp": 24.1,
                "condition": {
                    "type": "Sunny",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 7.9,
                    "mph": 4.9
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 34,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 12:00",
                "time_epoch": 1702794600,
                "time_formatted": "12 PM",
                "temp": 25,
                "condition": {
                    "type": "Sunny",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 8.3,
                    "mph": 5.1
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 32,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 13:00",
                "time_epoch": 1702798200,
                "time_formatted": "01 PM",
                "temp": 25.7,
                "condition": {
                    "type": "Sunny",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 7.9,
                    "mph": 4.9
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 30,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 14:00",
                "time_epoch": 1702801800,
                "time_formatted": "02 PM",
                "temp": 26,
                "condition": {
                    "type": "Sunny",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 8.3,
                    "mph": 5.1
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 30,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 15:00",
                "time_epoch": 1702805400,
                "time_formatted": "03 PM",
                "temp": 25.9,
                "condition": {
                    "type": "Sunny",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 7.6,
                    "mph": 4.7
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 30,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 16:00",
                "time_epoch": 1702809000,
                "time_formatted": "04 PM",
                "temp": 25,
                "condition": {
                    "type": "Sunny",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/day/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 7.2,
                    "mph": 4.5
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 35,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 17:00",
                "time_epoch": 1702812600,
                "time_formatted": "05 PM",
                "temp": 22.4,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 7.9,
                    "mph": 4.9
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 39,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 18:00",
                "time_epoch": 1702816200,
                "time_formatted": "06 PM",
                "temp": 21.3,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 8.6,
                    "mph": 5.4
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 42,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 19:00",
                "time_epoch": 1702819800,
                "time_formatted": "07 PM",
                "temp": 20.7,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 8.6,
                    "mph": 5.4
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 43,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 20:00",
                "time_epoch": 1702823400,
                "time_formatted": "08 PM",
                "temp": 20.1,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 8.3,
                    "mph": 5.1
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 44,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 21:00",
                "time_epoch": 1702827000,
                "time_formatted": "09 PM",
                "temp": 19.6,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 8.3,
                    "mph": 5.1
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 45,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 22:00",
                "time_epoch": 1702830600,
                "time_formatted": "10 PM",
                "temp": 19.1,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
                    "code": 1000
                },
                "wind": {
                    "kmph": 7.9,
                    "mph": 4.9
                },
                "precipitation": {
                    "in_mm": 0,
                    "in_in": 0
                },
                "humidity": 47,
                "rain": 0
            }
        },
        {
            "location": {
                "name": "Raipur",
                "region": "Chhattisgarh",
                "country": "India"
            },
            "info": {
                "time": "2023-12-17 23:00",
                "time_epoch": 1702834200,
                "time_formatted": "11 PM",
                "temp": 18.6,
                "condition": {
                    "type": "Clear",
                    "icon": "https://cdn.weatherapi.com/weather/128x128/night/113.png",
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
                "humidity": 48,
                "rain": 0
            }
        }
    ]


    return (
        <>
            {/* <div className="App min-h-screen flex items-center justify-center">
                <WeatherDataChart weatherData={data1} />
            </div> */}


            <div className="mt-40 text-base text-black h-full bg-White bg-fixed bg-no-repeat">
                <main className="flex flex-wrap w-[80%] lg:w-w-[70%] mx-auto my-2 text-lg">

                    <MainTop data={data}></MainTop>

                    <Middle data={data1} />






                    {/* <div class=" w-full mt-3  ">
                        <h2 class=" text-black font-bold text-lg ">Next 5 days</h2>

                        <div class=" flex-col w-full mr-5">

                            <div
                                class="flex  justify-around  items-center  my-2 p-2 w-full rounded-lg bg-black bg-opacity-25 text-lg text-center">

                                <div class="w-1/6  text-sm mb-3">
                                    Tue
                                    <div class="text-black opacity-60 text-xs">30/7</div>
                                </div>

                                <div class="w-1/6   text-sm ">
                                    <img className='h-20' src="https://static.vecteezy.com/system/resources/thumbnails/005/502/367/small/solid-cloud-illustration-glyph-icon-free-vector.jpg" alt="Sunny" />
                                </div>

                                <div class="w-1/6  text-sm  ">
                                    10&deg;
                                    <div class="text-black opacity-60 text-xs">Low</div>
                                </div>

                                <div class="w-1/6  text-sm ">
                                    21&deg;
                                    <div class="text-black opacity-60 text-xs">High</div>
                                </div>

                                <div class="w-1/6  text-sm">
                                    0%
                                    <div class="text-black opacity-60 text-xs">Rain</div>
                                </div>

                                <div class="w-1/6 text-sm">
                                    12mph
                                    <div class="text-black opacity-60 text-xs">Wind</div>
                                </div>

                            </div>
                            <div
                                class="flex  justify-around  items-center  my-2 p-2 w-full rounded-lg bg-black bg-opacity-25 text-lg text-center">

                                <div class="w-1/6  text-sm mb-3">
                                    Tue
                                    <div class="text-black opacity-60 text-xs">30/7</div>
                                </div>

                                <div class="w-1/6   text-sm ">
                                    <img className='h-20' src="https://static.vecteezy.com/system/resources/thumbnails/005/502/367/small/solid-cloud-illustration-glyph-icon-free-vector.jpg" alt="Sunny" />
                                </div>

                                <div class="w-1/6  text-sm  ">
                                    10&deg;
                                    <div class="text-black opacity-60 text-xs">Low</div>
                                </div>

                                <div class="w-1/6  text-sm ">
                                    21&deg;
                                    <div class="text-black opacity-60 text-xs">High</div>
                                </div>

                                <div class="w-1/6  text-sm">
                                    0%
                                    <div class="text-black opacity-60 text-xs">Rain</div>
                                </div>

                                <div class="w-1/6 text-sm">
                                    12mph
                                    <div class="text-black opacity-60 text-xs">Wind</div>
                                </div>

                            </div>
                            <div
                                class="flex  justify-around  items-center  my-2 p-2 w-full rounded-lg bg-black bg-opacity-25 text-lg text-center">

                                <div class="w-1/6  text-sm mb-3">
                                    Tue
                                    <div class="text-black opacity-60 text-xs">30/7</div>
                                </div>

                                <div class="w-1/6   text-sm ">
                                    <img className='h-20' src="https://static.vecteezy.com/system/resources/thumbnails/005/502/367/small/solid-cloud-illustration-glyph-icon-free-vector.jpg" alt="Sunny" />
                                </div>

                                <div class="w-1/6  text-sm  ">
                                    10&deg;
                                    <div class="text-black opacity-60 text-xs">Low</div>
                                </div>

                                <div class="w-1/6  text-sm ">
                                    21&deg;
                                    <div class="text-black opacity-60 text-xs">High</div>
                                </div>

                                <div class="w-1/6  text-sm">
                                    0%
                                    <div class="text-black opacity-60 text-xs">Rain</div>
                                </div>

                                <div class="w-1/6 text-sm">
                                    12mph
                                    <div class="text-black opacity-60 text-xs">Wind</div>
                                </div>

                            </div>
                            <div
                                class="flex  justify-around  items-center  my-2 p-2 w-full rounded-lg bg-black bg-opacity-25 text-lg text-center">

                                <div class="w-1/6  text-sm mb-3">
                                    Tue
                                    <div class="text-black opacity-60 text-xs">30/7</div>
                                </div>

                                <div class="w-1/6   text-sm ">
                                    <img className='h-20' src="https://static.vecteezy.com/system/resources/thumbnails/005/502/367/small/solid-cloud-illustration-glyph-icon-free-vector.jpg" alt="Sunny" />
                                </div>

                                <div class="w-1/6  text-sm  ">
                                    10&deg;
                                    <div class="text-black opacity-60 text-xs">Low</div>
                                </div>

                                <div class="w-1/6  text-sm ">
                                    21&deg;
                                    <div class="text-black opacity-60 text-xs">High</div>
                                </div>

                                <div class="w-1/6  text-sm">
                                    0%
                                    <div class="text-black opacity-60 text-xs">Rain</div>
                                </div>

                                <div class="w-1/6 text-sm">
                                    12mph
                                    <div class="text-black opacity-60 text-xs">Wind</div>
                                </div>

                            </div>
                            <div
                                class="flex  justify-around  items-center  my-2 p-2 w-full rounded-lg bg-black bg-opacity-25 text-lg text-center">

                                <div class="w-1/6  text-sm mb-3">
                                    Tue
                                    <div class="text-black opacity-60 text-xs">30/7</div>
                                </div>

                                <div class="w-1/6   text-sm ">
                                    <img className='h-20' src="https://static.vecteezy.com/system/resources/thumbnails/005/502/367/small/solid-cloud-illustration-glyph-icon-free-vector.jpg" alt="Sunny" />
                                </div>

                                <div class="w-1/6  text-sm  ">
                                    10&deg;
                                    <div class="text-black opacity-60 text-xs">Low</div>
                                </div>

                                <div class="w-1/6  text-sm ">
                                    21&deg;
                                    <div class="text-black opacity-60 text-xs">High</div>
                                </div>

                                <div class="w-1/6  text-sm">
                                    0%
                                    <div class="text-black opacity-60 text-xs">Rain</div>
                                </div>

                                <div class="w-1/6 text-sm">
                                    12mph
                                    <div class="text-black opacity-60 text-xs">Wind</div>
                                </div>

                            </div>
                            <div
                                class="flex  justify-around  items-center  my-2 p-2 w-full rounded-lg bg-black bg-opacity-25 text-lg text-center">

                                <div class="w-1/6  text-sm mb-3">
                                    Tue
                                    <div class="text-black opacity-60 text-xs">30/7</div>
                                </div>

                                <div class="w-1/6   text-sm ">
                                    <img className='h-20' src="https://static.vecteezy.com/system/resources/thumbnails/005/502/367/small/solid-cloud-illustration-glyph-icon-free-vector.jpg" alt="Sunny" />
                                </div>

                                <div class="w-1/6  text-sm  ">
                                    10&deg;
                                    <div class="text-black opacity-60 text-xs">Low</div>
                                </div>

                                <div class="w-1/6  text-sm ">
                                    21&deg;
                                    <div class="text-black opacity-60 text-xs">High</div>
                                </div>

                                <div class="w-1/6  text-sm">
                                    0%
                                    <div class="text-black opacity-60 text-xs">Rain</div>
                                </div>

                                <div class="w-1/6 text-sm">
                                    12mph
                                    <div class="text-black opacity-60 text-xs">Wind</div>
                                </div>

                            </div>



                        </div>
                    </div> */}
                </main>
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
                    <div class=" text-center text-base sm:text-left">{data?.current?.condition?.type1} ● {data?.current?.condition?.type2?.main} </div>
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
    const [current, setCurrentIndex] = useState(0);
    const [next, setNextIndex] = useState(4);

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
    };
    const data = props?.data

    console.log("curr:", current);
    console.log("next:", next);
    return (
        <>
            <div className="mt-3 w-full justify-between sm:max-w-[748px]">
                <h2 className="heading text-black font-bold text-lg ">Today's weather</h2>



                <div className="w-[100%] ml-auto mr-auto">
                    <Slider
                        {...settings}
                        beforeChange={(currentSlide, nextSlide) => {
                            setCurrentIndex(currentSlide);
                            setNextIndex(nextSlide+4);
                        }}

                    >
                        {data?.map((item, idx) => (
                            <div key={idx} className="px-2 pb-4 md:px-5">
                                <div className="flex-shrink-0 px-3 rounded-lg bg-white border-black text-base text-center h-[200px] w-[120px] mx-auto flex flex-col justify-center items-center">
                                    <div className="mb-2">{item?.info?.time_formatted}</div>
                                    <img src={item?.info?.condition?.icon} alt="Mostly sunny" className="w-16 h-16 object-cover my-2 shadow-lg" />
                                    <div>{item?.info?.temp.toFixed(0)}&deg;</div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <WeatherDataChart weatherData={data} next={next} current={current} />
            </div>
        </>
    )
}

const WeatherDataChart = (props) => {
    const weatherData = props?.weatherData


    const current = props?.current;
    const next = props?.next;

    // console.log(index);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (weatherData) {
            
            const data = weatherData.slice(current,next).map((item) => ({
                time: item.info.time_formatted,
                temperature: item.info.temp,
            }));
            setChartData(data);
        }
    }, [current,next]);

    return (
        <>

            <div class="mt-3 w-full justify-between sm:max-w-[748px]">
                <div className="flex flex-row gap-5 my-5 md:flex md:gap-10 overflow-x-auto max-h-screen">
                    <div className="chart-container" style={{ width: '100%' }}>
                        <ResponsiveContainer width="100%" height={100}>
                            <LineChart data={chartData}>
                                <Tooltip />
                                <XAxis dataKey="time" tick={false} />
                                <Line type="monotone" dataKey="temperature" stroke="#042F2E" activeDot={{ r: 8 }} />
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
