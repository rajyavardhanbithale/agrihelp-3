import React, { useState, useEffect } from 'react';
import { ProgressBar, Step } from 'react-step-progress';
import 'react-step-progress/dist/index.css';

const ProgressBAR = () => {
  const [progress, setProgress] = useState(0);

  const orderStatus = [
    {
      title: "Order Placed",
      date: "15 December 2023, 5:00 PM",
      status: "green",
      description: "Your order has been successfully placed. We are preparing your items for shipment.",
    },
    {
      title: "Order Processed",
      date: "16 December 2023, 6:00 PM",
      status: "gray",
      description: "Your order is being processed. It will soon be ready for shipment.",
    },
    {
      title: "Out for Delivery",
      date: "17 December 2023, 8:00 AM",
      status: "gray",
      description: "Your order is on its way and out for delivery. Our courier is bringing it to you.",
    },
    {
      title: "Arrival at Your City",
      date: "18 December 2023, 8:00 AM",
      status: "gray",
      description: "Your order has arrived at your city's distribution center and is awaiting final delivery.",
    },
    {
      title: "Delivered",
      date: "19 December 2023, 10:00 AM",
      status: "gray",
      description: "Congratulations! Your order has been successfully delivered. Thank you for shopping with us.",
    },
    // You can add more status updates as needed
  ];

  return (
    <>
      <div className="bg-gray-50">
        <div className="p-4 mt-4">
          <h1 className="text-4xl text-center font-semibold mb-6">Package status</h1>
          <div className="container">
            <div className="flex flex-col md:grid grid-cols-12">

              {orderStatus.map((status, idx) => (

                <div className={`flex md:contents ${status.status === "green" ? "text-gray-50" : "text-gray-800"}`} key={idx}>
                  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">

                    <div className="h-full w-6 flex items-center justify-center">
                      <div className={`h-full w-1 bg-${status.status}-500 pointer-events-none`}></div>
                    </div>
                    <div className={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-${status.status}-500 shadow text-center`}>
                      <i className="fas fa-check-circle text-white"></i>
                    </div>

                  </div>
                  <div className={`${status.status === "green" ? "bg-green-500" : "bg-gray-100"} col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full`}>
                    <h3 className="font-semibold text-lg mb-1">{status.title}</h3>
                    <p className="leading-tight text-justify w-full">
                      {status.date}

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

export default ProgressBAR;
