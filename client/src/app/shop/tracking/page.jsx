'use client'
import ProgressBAR from './ProgressBAR';
import React, { useState, useEffect } from 'react';

import 'react-step-progress-bar/styles.css';
const OrderTrackingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4; // Set the total number of steps

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <>

      <ProgressBAR></ProgressBAR>
    </>
  );
};

export default OrderTrackingPage;
