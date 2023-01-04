import React, { useRef } from 'react';
import { Formik, Form } from 'formik';

import Button from 'shared/components/Button/button';
import TextBox from 'shared/components/TextField/textField';
import DatePickerSingle from 'shared/iComponents/DatePickerSingle';
import FileUploader from 'shared/components/fileUploader/fileUploader';
import stepFourValidationSchema from './data';

const Step4 = ({ formData, setFormData, setStepsView, prevStep }) => {
  const formRef = useRef(null);
  const initialValues = {
    providerName: formData.providerName,
    providerId: formData.providerId,
    membership: formData.membership,
    expiryDate: formData.expiryDate,
    medicalId: formData.medicalId,
  };
  const getFormValues = val => {
    const { providerName, providerId, membership, expiryDate, medicalId } = val;
    setFormData(prevState => ({
      ...prevState,
      providerName,
      providerId,
      membership,
      expiryDate,
      medicalId,
    }));
  };

  const handlePrevSteps = () => {
    getFormValues(formRef.current.values);
    setStepsView(prevStep);
  };

  const handleFormSubmit = values => {
    getFormValues(values);
    const collectedValues = { ...formData, ...values };

    console.log('Collected Values ===>', collectedValues);
  };
  return (
    <Formik
      innerRef={formRef}
      initialValues={initialValues}
      onSubmit={values => handleFormSubmit(values)}
      validationSchema={stepFourValidationSchema}
    >
      {({ setFieldValue, errors, touched, values }) => (
        <Form>
          <div className="row">
            <div className="col-md-6 mb-4">
              <TextBox
                label={{ EN: 'Provider Name', AR: 'Provider Name' }}
                name="providerName"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                buttons={[
                  {
                    location: 'after',
                    name: '',
                    options: {
                      icon: 'las la-id-card',
                      type: 'default',
                    },
                  },
                ]}
              />
            </div>
            <div className="col-md-6 mb-4">
              <TextBox
                label={{ EN: 'ID', AR: 'ID' }}
                name="providerId"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                buttons={[
                  {
                    location: 'after',
                    name: '',
                    options: {
                      icon: 'las la-id-card',
                      type: 'default',
                    },
                  },
                ]}
              />
            </div>

            <div className="col-md-6 mb-4">
              <TextBox
                label={{ EN: 'Membership Type', AR: 'Membership Type' }}
                name="membership"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                buttons={[
                  {
                    location: 'after',
                    name: '',
                    options: {
                      icon: 'las la-id-card',
                      type: 'default',
                    },
                  },
                ]}
              />
            </div>
            <div className="col-md-6 mb-4">
              <DatePickerSingle
                name="expiryDate"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                label={{ EN: 'Expiry Date', AR: 'Expiry Date' }}
              />
            </div>
            <div className="col-md-12 mb-4">
              <FileUploader
                id="medicalId"
                type="drag"
                accept="image/*"
                label={{ EN: 'Medical Insurance ID', AR: 'Medical Insurance ID' }}
                name="medicalId"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
              />
            </div>
          </div>
          <div className="mt-4 wizard-foot-actions d-flex align-items-center justify-content-between">
            <Button width="135" type="normal" text={{ EN: 'Back', AR: 'Back' }} onClick={handlePrevSteps} />
            <Button width="135" text={{ EN: 'Save', AR: 'Save' }} useSubmitBehavior />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step4;
