import React, { useRef } from 'react';
import { Formik, Form } from 'formik';

import Button from 'shared/components/Button/button';
import TextBox from 'shared/components/TextField/textField';
import DatePickerSingle from 'shared/iComponents/DatePickerSingle';
import FileUploader from 'shared/components/fileUploader/fileUploader';
import stepFourValidationSchema from './data';

const MedicalInsuranceEdit = ({ userInfo, setUserInfo, onClose }) => {
  const formRef = useRef(null);
  const initialValues = {
    providerName: userInfo.providerName,
    providerId: userInfo.providerId,
    membership: userInfo.membership,
    expiryDate: userInfo.expiryDate,
    medicalId: userInfo.medicalId,
  };

  const handleFormSubmit = values => {
    setUserInfo(values);
    onClose();
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
          <div className="mt-4 wizard-foot-actions d-flex align-items-center justify-content-end">
            <Button width="135" text={{ EN: 'Save', AR: 'Save' }} useSubmitBehavior />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MedicalInsuranceEdit;
