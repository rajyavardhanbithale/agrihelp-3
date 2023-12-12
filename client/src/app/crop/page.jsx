'use client'
import React, { useState, useEffect } from 'react';
import "../App.css";
import { arrowDownCircle, arrowUpCircle, reloadCircleOutline, reloadOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import axios from 'axios';



export default function Crop() {
  const [crop, setCrop] = useState(null)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    Nitrogen: '',
    Phosphorus: '',
    Potassium: '',
    PHlevel: '',
    Rainfall: '',
    City: '',
  });

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
    const mandatoryFields = ['Nitrogen', 'Phosphorus', 'Potassium', 'PHlevel', 'Rainfall', 'City'];

    const missingFields = mandatoryFields.filter(field => !formData[field]);
    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
      return;
    }

    // Make the POST request using axios
    const queryParams = `N=${formData.Nitrogen}&P=${formData.Phosphorus}&K=${formData.Potassium}&ph=${formData.PHlevel}&rain=${formData.Rainfall}&city=${formData.City}`;

    // Make the GET request using axios
    try {
      const response = await axios.get(`http://127.0.0.1:8000/v2/crop/recommendation?${queryParams}`);
      // console.log(response.data); // Handle the response as needed
      setCrop(response.data)
      setLoading(false)
      document.getElementById("recommendation").scrollIntoView();
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };



  return (
    <>
      <div>
        <div className="flex sm:h-fit md:h-screen overflow-hidden">
          <img
            className="hidden lg:block w-1/2"
            src="https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="flex scale-125 flex-col items-center justify-center align-middle w-full lg:w-1/2 mx-5 my-3">
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-5xl font-extrabold tracking-tight sm:text-4xl text-teal-900">
                  Crop Recommendation
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
                <div>
                  <input
                    type="text"
                    name="PHlevel"
                    value={formData.PHlevel}
                    onChange={handleInputChange}
                    className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
                    placeholder="PH level"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="Rainfall"
                    value={formData.Rainfall}
                    onChange={handleInputChange}
                    className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
                    placeholder="Rain-fall(in mm)"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="City"
                    value={formData.City}
                    onChange={handleInputChange}
                    className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
                    placeholder="City"
                  />
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
          </div>
        </div>

        {crop?.typeOfCrop && <Result crop={crop} />}




      </div>
    </>
  );
};

const CollapsibleSection = ({ title, content }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full bg-gray-200 px-6 py-2   `">
      <button
        onClick={() => setVisible(!visible)}
        className="w-full flex justify-between text-slate-900   text-left text-lg px-4 py-2 mt-2 rounded focus:outline-none"
      >
        {title}

        <IonIcon
          icon={visible ? arrowUpCircle : arrowDownCircle}
          className={`text-xl text-slate-800 duration-700 transform ${visible ? 'rotate-180' : 'rotate-360'}`}
        />


      </button>

      <div
        className={`bg-slate-300 px-3 py-2 mb-4 rounded-xl overflow-hidden transition-max-height transition-opacity ${visible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        {content}
      </div>
    </div>
  );
};


function Result(crop) {
  console.log(crop?.crop);
  return (
    <>
      <div className="mt-20 w-3/4 mx-auto" id="recommendation">
        <div className="flex justify-center items-center mb-16 ">
          <span className="w-1/2 bg-teal-950 py-6 px-5  text-white text-center text-3xl rounded-2xl font-bold ">RESULT</span>
        </div>
        <div className="w-full p-5  md:flex md:justify-between items-center">

          <div className="flex justify-center flex-col items-center text-left  p-5 border-solid border-gray-600 rounded-2xl lg:pr-10 text-2xl sm:w-full md:w-2/3">
            <div className='font-bold text-teal-800 text-3xl capitalize'>
              growing &nbsp;
              <span className="text-4xl text-teal-950 font-bold">
                {crop?.crop?.typeOfCrop}
              </span>
              &nbsp;
              is a good fit for you.
            </div>
            <p className='text-left mt-5'>{crop?.crop?.name?.information?.introduction}</p>
            <ul className="marker:text-teal-700 ist-outside list-disc mt-5 text-lg">
              {crop?.crop?.name?.information?.varieties.map((variety, idx) => (
                <li key={idx}>
                  <span className="font-bold">
                    {variety.split(":")[0]} :
                  </span>
                  {variety.split(":")[1]}
                </li>

              ))}
            </ul>
          </div>

          <img className='rounded-2xl h-full  sm:w-full md:w-1/3' src={crop?.crop?.name?.images?.[0]} alt="" />

        </div>
        <div className="w-full p-5 flex md:flex md:justify-between items-center">
          <img className='rounded-2xl h-full sm:w-full md:w-1/3' src={crop?.crop?.name?.images?.[1]} alt="" />
          <div className="flex justify-center flex-col items-center p-5 text-2xl sm:w-full md:w-2/3">
            <div className="ml-8">
              How to Grow {crop?.crop?.typeOfCrop}
              <ul className="marker:text-teal-700 list-disc mt-5 text-lg">
                {crop?.crop?.name?.tutorial?.cultivationSteps.map((step, idx) => (
                  <li key={idx}>
                    {step}
                  </li>
                ))}
              </ul>
              <span className="text-lg">

              </span>
            </div>
          </div>
        </div>

        <div className='mb-48'>
          <span className="w-1/2 bg-teal-950 py-4 px-5 mt-10
             text-white text-center text-2xl rounded-2xl font-bold  capitalize">
            frequently asked questions
          </span>
          <div className="mt-10">

            <CollapsibleSection
              title={`Difficulty While Growing ${crop?.crop?.typeOfCrop}`}
              content={<p className="text-sm">{crop?.crop?.name?.difficulty?.level}</p>}
            />
            <CollapsibleSection
              title={`Challenges While Growing ${crop?.crop?.typeOfCrop}`}
              content={
                <ul className="marker:text-teal-700 ist-outside list-disc mt-5 text-lg">
                  {crop?.crop?.name?.difficulty?.challenges.map((name1, idx) => (
                    <li key={idx}>
                      <span className="font-bold">
                        {name1.split(":")[0]} :
                      </span>
                      {name1.split(":")[1]}
                    </li>

                  ))}
                </ul>
              }
            />

            <CollapsibleSection
              title={`Tips to grow ${crop?.crop?.typeOfCrop}`}
              content={
                <ul className="marker:text-teal-700 ist-outside list-disc mt-5 text-lg">
                  {crop?.crop?.name?.tips.map((name1, idx) => (
                    <li key={idx}>

                      •  {name1}

                    </li>

                  ))}
                </ul>
              }
            />

          </div>
        </div>




      </div>
    </>
  )

}