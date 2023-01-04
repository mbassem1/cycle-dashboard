import React from 'react';
import { Formik, Form } from 'formik';

import Button from 'shared/components/Button/button';
import TextBox from 'shared/components/TextField/textField';
import stepTwoValidationSchema from './data';

const ContactInfoEdit = ({ userInfo, setUserInfo, onClose }) => {
  const initialValues = {
    phone: userInfo.phone,
    email: userInfo.email,
    address: userInfo.address,
  };

  const handleFormSubmit = values => {
    console.log(values);
    setUserInfo(values);
    onClose();
  };

  return (
    <Formik
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
          <div className="mt-4 wizard-foot-actions d-flex align-items-center justify-content-end">
            <Button width="135" text={{ EN: 'Save', AR: 'Save' }} useSubmitBehavior />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactInfoEdit;
