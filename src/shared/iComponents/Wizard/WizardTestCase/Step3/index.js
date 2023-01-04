import React from 'react';

const Step3 = ({ setStepsView, prevStep }) => {
  const handlePrevSteps = () => {
    setStepsView(prevStep);
  };

  return (
    <>
      <h1>Step 3</h1>
      <div style={{ height: '300px' }}>Step 3 form</div>
      <div>
        <button className="btn btn-primary" type="button" onClick={handlePrevSteps}>
          Prev
        </button>
      </div>
    </>
  );
};

export default Step3;
