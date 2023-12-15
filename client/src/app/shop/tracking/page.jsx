'use client'

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'react-step-progress-bar/styles.css';

const OrderTrackingPage = () => {
  const [orderStatus, setOrderStatus] = useState(null)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/v2/order-status?method=get&orderID=AGR807536');
        if (response.status === 200) {
          setOrderStatus(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function

  }, []);

  return (
    <>
      <div className="bg-gray-50">
        <div className="p-4 mt-4">
          <h1 className="text-4xl text-center font-semibold mb-6">Package status</h1>
          <div className="container">
            <div className="flex flex-col md:grid grid-cols-12">

              {orderStatus?.orderStatus?.map((status, idx) => (

                <div className={`flex md:contents ${status?.status === "green" ? "text-gray-50" : "text-gray-800"}`} key={idx}>
                  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">

                    <div className="h-full w-6 flex items-center justify-center">
                      <div className={`h-full w-1 bg-${status?.status}-500 pointer-events-none`}></div>
                    </div>
                    <div className={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-${status?.status}-500 shadow text-center`}>
                      <i className="fas fa-check-circle text-white"></i>
                    </div>

                  </div>
                  <div className={`${status?.status === "green" ? "bg-green-500" : "bg-gray-100"} col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full`}>
                    <h3 className="font-semibold text-lg mb-1">{status?.title}</h3>
                    <p className="leading-tight text-justify w-full">
                      {status?.date}

                    </p>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTrackingPage;
