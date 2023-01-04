import React from 'react';

const Step1 = ({ setSteps, setStepsView, nextStep }) => {
  const handleNextStep = () => {
    setSteps(prevState => prevState.concat(nextStep));
    setStepsView(nextStep);
  };

  const onSubmit = data => console.log(data);

  return (
    <>
      <h1>Step 1</h1>
      <div style={{ height: '300px' }}>Step 1 form</div>
      <div>
        <button className="btn btn-primary" type="button" onClick={handleNextStep}>
          Next
        </button>
      </div>
    </>
  );
};

export default Step1;
