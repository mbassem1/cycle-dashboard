/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

import Wizard from '..';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const WizardTestCase = () => {
  const [steps, setSteps] = useState([1]);
  const [stepsView, setStepsView] = useState(1);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const RenderedSteps = () => {
    let RenderedStep;
    if (stepsView === 1) {
      RenderedStep = (
        <Step1 inputs={inputs} setInputs={setInputs} setSteps={setSteps} setStepsView={setStepsView} nextStep={2} />
      );
    }
    if (stepsView === 2) {
      RenderedStep = (
        <Step2
          inputs={inputs}
          setInputs={setInputs}
          setSteps={setSteps}
          setStepsView={setStepsView}
          prevStep={1}
          nextStep={3}
        />
      );
    }
    if (stepsView === 3) {
      RenderedStep = (
        <Step3 inputs={inputs} setInputs={setInputs} setSteps={setSteps} setStepsView={setStepsView} prevStep={2} />
      );
    }
    return RenderedStep;
  };

  return (
    <>
      <Wizard
        items={[
          {
            id: 1,
            title: { EN: 'Step 1', AR: 'خطوة 1' },
            icon: 'la-user',
          },
          {
            id: 2,
            title: { EN: 'Step 2', AR: 'خطوة 2' },
            icon: 'la-globe',
          },
          {
            id: 3,
            title: { EN: 'Step 3', AR: 'خطوة 3' },
            icon: 'la-sun',
          },
        ]}
        completedSteps={steps}
      />
      <RenderedSteps />
    </>
  );
};

export default WizardTestCase;
