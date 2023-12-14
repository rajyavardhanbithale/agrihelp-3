import React, { useState, useEffect } from 'react';
import { ProgressBar, Step } from 'react-step-progress';
import 'react-step-progress/dist/index.css';

const ProgressBAR = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10; // Update the increment based on your steps
        return newProgress <= 100 ? newProgress : 0;
      });
    }, 5000); // Set the interval to 5 seconds (5000 milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ProgressBar percent={progress}>
        <Step>
          {({ accomplished }) => (
            <div className={`step ${accomplished ? 'accomplished' : ''}`}>Step 1</div>
          )}
        </Step>
        <Step>
          {({ accomplished }) => (
            <div className={`step ${accomplished ? 'accomplished' : ''}`}>Step 2</div>
          )}
        </Step>
        {/* Add more steps as needed */}
      </ProgressBar>
    </>
  );
};

export default ProgressBAR;
