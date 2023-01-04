/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';

import './style.scss';
import Text from 'shared/components/Text';
import Button from 'shared/components/Button/button';
import Toggle from 'shared/components/toggle/toggle';
import TextBox from 'shared/components/TextField/textField';
import SelectBox from 'shared/components/selectBox/selectBox';
import TagsBox from 'shared/components/TagsBox/tagsBox';
import DatePickerSingle from 'shared/iComponents/DatePickerSingle';
import { PatientsContext } from 'context/patients';

const PatientsSearch = () => {
  const { setShowPatientCreate } = useContext(PatientsContext);
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
  const [useAdvancedSearch, setUseAdvancedSearch] = useState(false);

  const handleFormSubmit = values => {
    console.log(values);
  };

  return (
    <div className="patients-search">
      <div className="patients-search-head d-flex align-items-center justify-content-between">
        <div>
          <Text className="mb-1" value={{ EN: 'Patients Files', AR: 'Patients Files' }} />
          <Text size="12" className="secondary-dark" value={{ EN: '4842 Patients', AR: '4842 Patients' }} />
        </div>
        <Button text={{ EN: 'Add patient', AR: 'أضف مريض ' }} onClick={() => setShowPatientCreate(true)} />
      </div>
      <div className="patients-search-body">
        <Formik initialValues={initialValues} onSubmit={values => handleFormSubmit(values)}>
          {({ setFieldValue, errors, touched, values }) => (
            <Form>
              <div className="row">
                <div className="col-md-12 mb-5">
                  <Toggle
                    defaultValue={useAdvancedSearch}
                    onValueChange={value => setUseAdvancedSearch(value)}
                    label={{ EN: 'Advanced Search', AR: 'Advanced Search' }}
                  />
                </div>
                <div className="col-md-12 mb-4">
                  <TagsBox
                    name="fileNumber"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                    label={{ EN: 'File No.', AR: 'File No.' }}
                    placeholder={{ EN: 'Please select a clinic', AR: 'Please select a clinic' }}
                    items={['Item 1', 'Item 2', 'Item 3', 'Item 4']}
                  />
                </div>
                <div className="col-md-12 mb-4">
                  <TagsBox
                    label={{ EN: 'Patient Name', AR: 'Patient Name' }}
                    placeholder={{ EN: 'Please enter patient name', AR: 'Please enter patient name' }}
                    name="patientName"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                    items={['Item 1', 'Item 2', 'Item 3', 'Item 4']}
                  />
                </div>
                <div className="col-md-12 mb-4">
                  <TagsBox
                    label={{ EN: 'Phone No.', AR: 'Phone No.' }}
                    placeholder={{ EN: 'Please enter phone number', AR: 'Please enter phone number' }}
                    name="phoneNumber"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                    items={['Item 1', 'Item 2', 'Item 3', 'Item 4']}
                  />
                </div>

                {useAdvancedSearch && (
                  <>
                    <div className="col-md-12 mb-4">
                      <TagsBox
                        name="clinics"
                        errors={errors}
                        touched={touched}
                        setFieldValue={setFieldValue}
                        values={values}
                        label={{ EN: 'Clinic (one or more than one)', AR: 'Clinic (one or more than one)' }}
                        placeholder={{ EN: 'Please select a clinic', AR: 'Please select a clinic' }}
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
                        placeholder={{ EN: 'Please select a doctor', AR: 'Please select a doctor' }}
                        items={[
                          { id: 1, name: 'Doctor 1' },
                          { id: 2, name: 'Doctor 2' },
                        ]}
                        displayExpr="name"
                        valueExpr="name"
                      />
                    </div>
                    <div className="col-md-12 mb-4">
                      <DatePickerSingle
                        name="registrationDate"
                        errors={errors}
                        touched={touched}
                        setFieldValue={setFieldValue}
                        values={values}
                        label={{ EN: 'Registration Date', AR: 'Registration Date' }}
                        placeholder={{ EN: 'Please enter registration date', AR: 'Please enter registration date' }}
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
                        placeholder={{ EN: 'Please select a medicine', AR: 'Please select a medicine' }}
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
                        placeholder={{ EN: 'Please enter age', AR: 'Please enter age' }}
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
                        placeholder={{ EN: 'Please enter age', AR: 'Please enter age' }}
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
                        placeholder={{ EN: 'Please select a gender', AR: 'Please select a gender' }}
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
                  </>
                )}
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

export default PatientsSearch;
