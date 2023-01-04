/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';

import './styles.scss';
import Text from 'shared/components/Text';
import Button from 'shared/components/Button/button';
import TextBox from 'shared/components/TextField/textField';
import SelectBox from 'shared/components/selectBox/selectBox';
import TagsBox from 'shared/components/TagsBox/tagsBox';
import DatePickerSingle from 'shared/iComponents/DatePickerSingle';
import DatePickerRange from 'shared/iComponents/DatePickerRange';

const SearchPatient = () => {
  const initialValues = {
    fileNumber: '',
    patientName: '',
    phoneNumber: '',
    doctor: '',
    clinics: [],
    registrationDate: '', // expected range date 12/5/2022 - 12/14/2022'
    medicine: '',
    ageFrom: '',
    ageTo: '',
    gender: '',
    birthDate: '', // expected single date 12/5/2022'
  };

  const handleFormSubmit = values => {
    console.log(values);
  };

  return (
    <div className="patients-search">
      <div className="patients-search-head">
        <Text className="mb-1" value={{ EN: 'Search for a new patient...', AR: 'Search for a new patient...' }} />
      </div>
      <div className="patients-search-body">
        <Formik initialValues={initialValues} onSubmit={values => handleFormSubmit(values)}>
          {({ setFieldValue, errors, touched, values }) => (
            <Form>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <TextBox
                    label={{ EN: 'Patient Name', AR: 'Patient Name' }}
                    name="patientName"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                  />
                </div>
                <div className="col-md-12 mb-4">
                  <TextBox
                    label={{ EN: 'Phone No.', AR: 'Phone No.' }}
                    name="phoneNumber"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                  />
                </div>

                <div className="col-md-12 mb-4">
                  <TagsBox
                    name="clinics"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                    label={{ EN: 'Clinic (one or more than one)', AR: 'Clinic (one or more than one)' }}
                    items={['Clinic 1', 'Clinic 2', 'Clinic 3', 'Clinic 4']}
                  />
                </div>
                <div className="col-md-12 mb-4">
                  <SelectBox
                    name="doctor"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                    label={{ EN: 'Doctor', AR: 'Doctor' }}
                    items={[
                      { id: 1, name: 'Doctor 1' },
                      { id: 2, name: 'Doctor 2' },
                    ]}
                    displayExpr="name"
                    valueExpr="name"
                  />
                </div>
                <div className="col-md-12 mb-4">
                  <DatePickerRange
                    name="registrationDate"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                    label={{ EN: 'Registration Date', AR: 'Registration Date' }}
                  />
                </div>
                <div className="col-md-12 mb-4">
                  <SelectBox
                    name="medicine"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                    label={{ EN: 'Medicine (selection by medicine)', AR: 'Medicine (selection by medicine)' }}
                    items={[
                      { id: 1, name: 'Medicine 1' },
                      { id: 2, name: 'Medicine 2' },
                    ]}
                    displayExpr="name"
                    valueExpr="name"
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <TextBox
                    label={{ EN: 'Age (From)', AR: 'Age (From)' }}
                    name="ageFrom"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <TextBox
                    label={{ EN: 'Age (To)', AR: 'Age (To)' }}
                    name="ageTo"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                  />
                </div>
                <div className="col-md-12 mb-4">
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
                <div className="col-md-12 mb-4">
                  <DatePickerSingle
                    name="birthDate"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                    label={{ EN: 'Date of birth', AR: 'Date of birth' }}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Button width="100%" text={{ EN: 'Search', AR: 'Search' }} useSubmitBehavior />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchPatient;
