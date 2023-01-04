import React from 'react';

const Step2 = ({ setSteps, setStepsView, prevStep, nextStep }) => {
  const handleNextStep = () => {
    setSteps(prevState => prevState.concat(nextStep));
    setStepsView(nextStep);
  };

  const handlePrevSteps = () => {
    setStepsView(prevStep);
  };

  return (
    <>
      <h1>Step 2</h1>
      <div style={{ height: '300px' }}>Step 2 form</div>
      <div>
        <button className="btn btn-primary" type="button" onClick={handlePrevSteps}>
          Prev
        </button>
        <button className="btn btn-primary" type="button" onClick={handleNextStep}>
          Next
        </button>
      </div>
    </>
  );
};

export default Step2;
