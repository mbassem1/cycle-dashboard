import React from 'react';
import { Formik, Form } from 'formik';

import Button from 'shared/components/Button/button';
import DatePickerSingle from 'shared/iComponents/DatePickerSingle';
import TextBox from 'shared/components/TextField/textField';
import FileUploader from 'shared/components/fileUploader/fileUploader';
import FileUploaderProfile from 'shared/components/FileUploaderProfile';
import Text from 'shared/components/Text';
import RadioGroup from 'shared/components/radio/radio';
import stepOneValidationSchema from './data';

const Step1 = ({ formData, setFormData, setSteps, setStepsView, nextStep }) => {
  const initialValues = {
    fileNumber: formData.fileNumber,
    idNumber: formData.idNumber,
    passport: formData.passport,
    patientName: formData.patientName,
    patientNameAr: formData.patientNameAr,
    age: formData.age,
    gender: formData.gender,
    birthDate: formData.birthDate, // expected single date 12/5/2022'
    patientIdImage: formData.patientIdImage,
  };

  const handleFormSubmit = values => {
    const { fileNumber, idNumber, passport, patientName, patientNameAr, age, gender, birthDate, patientIdImage } =
      values;
    setFormData(prevState => ({
      ...prevState,
      fileNumber,
      idNumber,
      passport,
      patientName,
      patientNameAr,
      age,
      gender,
      birthDate,
      patientIdImage,
    }));
    setSteps(prevState => prevState.concat(nextStep));
    setStepsView(nextStep);
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
            <div className="col-md-12 mb-4">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <FileUploaderProfile id="patientProfile" accept="image/*" />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <TextBox
                label={{ EN: 'File No.', AR: 'File No.' }}
                name="fileNumber"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                buttons={[
                  {
                    location: 'after',
                    name: '',
                    options: {
                      icon: 'las la-check-circle',
                      type: 'default',
                    },
                  },
                ]}
              />
            </div>
            <div className="col-md-4 mb-4">
              <TextBox
                label={{ EN: 'ID Number', AR: 'ID Number' }}
                name="idNumber"
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

            <div className="col-md-4 mb-4">
              <TextBox
                label={{ EN: 'Passport “optional”', AR: 'Passport “optional”' }}
                name="passport"
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
              <div className="name-fields-wrap">
                <Text className="secondary-dark" value={{ EN: 'Patient Name', AR: 'Patient Name' }} />
                <div className="row">
                  <div className="col-md-3 mb-4">
                    <TextBox
                      label={{ EN: 'First', AR: 'First' }}
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
                  <div className="col-md-3 mb-4">
                    <TextBox
                      label={{ EN: 'Second', AR: 'Second' }}
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
                  <div className="col-md-3 mb-4">
                    <TextBox
                      label={{ EN: 'Third', AR: 'Third' }}
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
                  <div className="col-md-3 mb-4">
                    <TextBox
                      label={{ EN: 'Last', AR: 'Last' }}
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

                  <div className="col-md-3 mb-4">
                    <TextBox
                      label={{ EN: 'First (Ar)', AR: 'First (Ar)' }}
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
                  <div className="col-md-3 mb-4">
                    <TextBox
                      label={{ EN: 'Second (Ar)', AR: 'Second (Ar)' }}
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
                  <div className="col-md-3 mb-4">
                    <TextBox
                      label={{ EN: 'Third (Ar)', AR: 'Third (Ar)' }}
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
                  <div className="col-md-3 mb-4">
                    <TextBox
                      label={{ EN: 'Last (Ar)', AR: 'Last (Ar)' }}
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
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <RadioGroup
                dataSource={[
                  { text: { EN: 'Male', AR: 'ذكر' }, value: 1 },
                  { text: { EN: 'Female', AR: 'إثني' }, value: 2 },
                ]}
                layout="horizontal"
                valueExpr="value"
                name="gender"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                label={{ EN: 'Gender', AR: 'Gender' }}
              />
            </div>
            <div className="col-md-4 mb-4">
              <DatePickerSingle
                name="birthDate"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                label={{ EN: 'Date of birth', AR: 'Date of birth' }}
              />
            </div>
            <div className="col-md-4 mb-4">
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
            <Button width="135" text={{ EN: 'Next', AR: 'Next' }} useSubmitBehavior />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step1;
