'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';


export default function PopUpModalScheme(props) {
    useEffect(() => {
        if (props?.isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [props?.isOpen]);


    const item = props?.data

    console.log(item);

    return (
        <>
          <div className="flex items-center justify-center">
  {props?.isOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-white opacity-40"
        onClick={props?.closeModal}
      ></div>

      <div className={`bg-white p-8 rounded-md z-10 transition-transform duration-300 ease-in-out transform scale-100 ${props.isOpen ? 'animate-jump-in' : 'animate-jump-out'} flex items-center justify-center`}>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {item?.name}
          </h2>
          <p className="max-w-[250px] text-sm md:text-lg md:max-w-[650px]">
            {item?.description}
          </p>
          <img
            className="w-36 h-36 md:w-48 md:h-48 object-scale-down"
            src={item?.image}
            alt={item?.name}
          />
          <p className="max-w-[250px] text-sm md:text-lg md:max-w-[650px]">
            Open Date: {item?.openDate}
          </p>
          <p className="max-w-[250px] text-sm md:text-lg md:max-w-[650px]">
            Close Date: {item?.closeDate}
          </p>
          <br />
          <p className="max-w-[250px] text-xs lg:text-lg md:max-w-[650px]">
            {item?.eligibility}
          </p>
          <br />
          <p className="capitalize max-w-[250px] md:max-w-[650px]">
            Region: {item?.region}
          </p>

          <div className="flex flex-row w-full justify-center gap-5">
            <button
              onClick={props.closeModal}
              className="mt-4 bg-teal-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>

            <button
              onClick={props.closeModal}
              className={`mt-4 bg-teal-700 text-white px-4 py-2 rounded  ${item?.isOpen === "TRUE" ? "bg-teal-600" : "bg-teal-950"}`}
            >
              {item?.isOpen === "TRUE" ? (
                <span>Register</span>
              ) : (
                <span className="line-through">Registration Closed</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
</div>
        </>
    );
};

