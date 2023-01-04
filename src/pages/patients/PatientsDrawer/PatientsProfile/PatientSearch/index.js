import React from 'react';
import { Formik, Form } from 'formik';
import Button from 'shared/components/Button/button';
import TextBox from 'shared/components/TextField/textField';

const PatientSearch = () => {
  const initialValues = {
    patientName: '',
  };

  const handleFormSubmit = values => {
    console.log('Values', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={values => handleFormSubmit(values)}>
      {({ setFieldValue, errors, touched, values }) => (
        <Form>
          <div className="row">
            <div className="col-md-12 mb-4">
              <TextBox
                label={{ EN: 'Patient Name / ID / Phone', AR: 'Patient Name / ID / Phone' }}
                name="patientName"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                buttons={[
                  {
                    location: 'after',
                    name: '',
                    options: { icon: 'las la-address-card', type: 'default' },
                  },
                ]}
              />
            </div>
          </div>
          <div className="mt-4 wizard-foot-actions d-flex align-items-center justify-content-end">
            <Button width="135" text={{ EN: 'Search', AR: 'Search' }} useSubmitBehavior />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PatientSearch;
