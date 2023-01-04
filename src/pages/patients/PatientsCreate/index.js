import React, { useState } from 'react';

import './style.scss';
import Wizard from 'shared/iComponents/Wizard';
import Step2 from './Step2';
import Step3 from './Step3';
import Step1 from './Step1';
import Step4 from './Step4';

const PatientsCreate = () => {
  const [steps, setSteps] = useState([1]);
  const [stepsView, setStepsView] = useState(1);
  const [formData, setFormData] = useState({
    fileNumber: '',
    idNumber: '',
    passport: '',
    patientName: '',
    patientNameAr: '',
    age: '',
    gender: '',
    birthDate: '', // expected single date 12/5/2022'
    patientIdImage: null,
    phone: '',
    email: '',
    address: '',
    blood: '',
    disease: [],
    surgery: [],
    allergy: [],
    providerName: '',
    providerId: '',
    membership: '',
    expiryDate: '',
    medicalId: null,
  });

  const RenderedSteps = () => {
    let RenderedStep;
    if (stepsView === 1) {
      RenderedStep = (
        <Step1
          formData={formData}
          setFormData={setFormData}
          setSteps={setSteps}
          setStepsView={setStepsView}
          nextStep={2}
        />
      );
    }
    if (stepsView === 2) {
      RenderedStep = (
        <Step2
          formData={formData}
          setFormData={setFormData}
          setSteps={setSteps}
          setStepsView={setStepsView}
          prevStep={1}
          nextStep={3}
        />
      );
    }
    if (stepsView === 3) {
      RenderedStep = (
        <Step3
          formData={formData}
          setFormData={setFormData}
          setSteps={setSteps}
          setStepsView={setStepsView}
          prevStep={2}
          nextStep={4}
        />
      );
    }
    if (stepsView === 4) {
      RenderedStep = <Step4 formData={formData} setFormData={setFormData} setStepsView={setStepsView} prevStep={3} />;
    }
    return RenderedStep;
  };

  return (
    <>
      <div className="patients-create-wizard">
        <Wizard
          items={[
            {
              id: 1,
              title: { EN: 'Personal Info', AR: 'Personal Info' },
              icon: 'la-user',
            },
            {
              id: 2,
              title: { EN: 'Contacts Info', AR: 'Contacts Info' },
              icon: 'la-address-book',
            },
            {
              id: 3,
              title: { EN: 'Health Info “optional”', AR: 'Health Info “optional”' },
              icon: 'la-hand-holding-heart',
            },
            {
              id: 4,
              title: { EN: 'Medical Ins.', AR: 'Medical Ins.' },
              icon: 'la-calendar-check',
            },
          ]}
          completedSteps={steps}
        />
      </div>
      <RenderedSteps />
    </>
  );
};

export default PatientsCreate;
