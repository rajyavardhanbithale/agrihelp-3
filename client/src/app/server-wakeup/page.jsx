'use client'
import React, { useState, useEffect } from 'react';


export default function main() {
    const [seconds, setSeconds] = useState(45);
    const [isServerResponsive, setIsServerResponsive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prevSeconds) => prevSeconds - 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    const checkEndpointStatus = async () => {
        const maxAttempts = 10; 
        const timeout = 1000; 

        let attempts = 0;

        while (attempts < maxAttempts) {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/ping`);
                const data = await response.json();
                if (response.status === 200) {
                    setIsServerResponsive(true);
                    window.location.href = '/';
                    return;
                }
            } catch (error) {
            }

            attempts++;
            await new Promise(resolve => setTimeout(resolve, timeout));
        }
        setIsServerResponsive(false);
    };

    useEffect(() => {
        checkEndpointStatus();
        const intervalId = setInterval(() => {
            checkEndpointStatus();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            <div className="w-full -mt-10 md:-mt-10 lg:-mt-16 h-screen flex flex-col lg:flex-row items-center justify-center md:space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
                    <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">{seconds}</p>
                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">Server Wake-Up</p>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">Waking Up the Server Just for You.</p>
                </div>
                <div className="md:w-1/2 w-10/12 -mt-10 md:-mt-10 flex lg:items-end justify-center md:p-4">
                    <img src="/assets/wakeup-call/server.gif" className="-ml-12 md:-ml-0"></img>
                </div>
            </div>
        </>

    )
}
