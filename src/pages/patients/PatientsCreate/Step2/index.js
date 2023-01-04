import React, { useRef } from 'react';
import { Formik, Form } from 'formik';

import Button from 'shared/components/Button/button';
import TextBox from 'shared/components/TextField/textField';
import stepTwoValidationSchema from './data';

const Step2 = ({ formData, setFormData, setSteps, setStepsView, prevStep, nextStep }) => {
  const formRef = useRef(null);
  const initialValues = {
    phone: formData.phone,
    email: formData.email,
    address: formData.address,
  };

  const getFormValues = val => {
    const { phone, email, address } = val;
    setFormData(prevState => ({
      ...prevState,
      phone,
      email,
      address,
    }));
  };
  const handlePrevSteps = () => {
    getFormValues(formRef.current.values);
    setStepsView(prevStep);
  };

  const handleFormSubmit = values => {
    console.log(values);
    getFormValues(values);
    setSteps(prevState => prevState.concat(nextStep));
    setStepsView(nextStep);
  };

  return (
    <Formik
      innerRef={formRef}
      initialValues={initialValues}
      onSubmit={values => handleFormSubmit(values)}
      validationSchema={stepTwoValidationSchema}
    >
      {({ setFieldValue, errors, touched, values }) => (
        <Form>
          <div className="row">
            <div className="col-md-6 mb-4">
              <TextBox
                label={{ EN: 'Phone No.', AR: 'Phone No.' }}
                name="phone"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                buttons={[
                  {
                    location: 'after',
                    name: '',
                    options: {
                      icon: 'las la-mobile',
                      type: 'default',
                    },
                  },
                ]}
              />
            </div>
            <div className="col-md-6 mb-4">
              <TextBox
                label={{ EN: 'E-mail (optional)', AR: 'E-mail (optional)' }}
                name="email"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                buttons={[
                  {
                    location: 'after',
                    name: '',
                    options: {
                      icon: 'las la-at',
                      type: 'default',
                    },
                  },
                ]}
              />
            </div>

            <div className="col-md-12 mb-4">
              <TextBox
                label={{ EN: 'Address (optional)', AR: 'Address (optional)' }}
                name="address"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                buttons={[
                  {
                    location: 'after',
                    name: '',
                    options: {
                      icon: 'las la-map-marker',
                      type: 'default',
                    },
                  },
                ]}
              />
            </div>
          </div>
          <div className="mt-4 wizard-foot-actions d-flex align-items-center justify-content-between">
            <Button width="135" type="normal" text={{ EN: 'Back', AR: 'Back' }} onClick={handlePrevSteps} />
            <Button width="135" text={{ EN: 'Next', AR: 'Next' }} useSubmitBehavior />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step2;
