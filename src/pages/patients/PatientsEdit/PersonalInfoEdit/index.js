import React from 'react';
import { Formik, Form } from 'formik';

import Button from 'shared/components/Button/button';
import SelectBox from 'shared/components/selectBox/selectBox';
import DatePickerSingle from 'shared/iComponents/DatePickerSingle';
import TextBox from 'shared/components/TextField/textField';
import FileUploader from 'shared/components/fileUploader/fileUploader';
import stepOneValidationSchema from './data';

const PersonalInfoEdit = ({ userInfo, setUserInfo, onClose }) => {
  const initialValues = {
    patientName: userInfo.nameEn,
    patientNameAr: userInfo.nameAr,
    age: userInfo.age,
    gender: userInfo.gender,
    birthDate: userInfo.birthDate, // expected single date 12/5/2022'
    patientIdImage: userInfo.patientIdImage,
  };

  const handleFormSubmit = values => {
    setUserInfo(values);
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => handleFormSubmit(values)}
      validationSchema={stepOneValidationSchema}
    >
      {({ setFieldValue, errors, touched, values }) => (
        <Form>
          <div className="row">
            <div className="col-md-6 mb-4">
              <TextBox
                label={{ EN: 'Patient Name', AR: 'Patient Name' }}
                name="patientName"
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
                label={{ EN: 'Patient Name (Ar)', AR: 'Patient Name (Ar)' }}
                name="patientNameAr"
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
              <SelectBox
                name="gender"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                label={{ EN: 'Gender', AR: 'Gender' }}
                items={[
                  { id: 1, name: 'Male' },
                  { id: 2, name: 'Female' },
                ]}
                displayExpr="name"
                valueExpr="name"
              />
            </div>
            <div className="col-md-6 mb-4">
              <DatePickerSingle
                name="birthDate"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                label={{ EN: 'Date of birth', AR: 'Date of birth' }}
              />
            </div>
            <div className="col-md-6 mb-4">
              <TextBox
                label={{ EN: 'Age', AR: 'Age' }}
                name="age"
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
            <div className="col-md-12 mb-4">
              <FileUploader
                id="patientId"
                type="drag"
                accept="image/*"
                label={{ EN: 'Patient ID', AR: 'Patient ID' }}
                name="patientIdImage"
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

export default PersonalInfoEdit;
