import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Formik, Form } from 'formik';

import Text from 'shared/components/Text';
import TextBox from 'shared/components/TextField/textField';
import Button from 'shared/components/Button/button';
import { CONFIRM_PASSWORD, NEW_PASSWORD, SAVE } from 'translations/translations';
import Auth from '..';
import loginValidationSchema from './data';

const ResetPassword = () => {
  const location = useLocation();
  console.log(location.state);

  const initialValues = {
    password: '',
    passwordConfirmation: '',
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = values => {
    console.log(values);
  };

  return (
    <Auth>
      <div>
        <div className="header mb-5">
          <Text
            className="mb-4"
            size="24"
            value={{
              EN: 'Add a new password to your account to login.',
              AR: 'أضف كلمة مرور جديدة إلى حسابك لتسجيل الدخول.',
            }}
          />
          <Text
            className="mb-5 secondary-dark"
            value={{
              EN: 'Please, add new password then re-write it again.',
              AR: 'الرجاء إضافة كلمة مرور جديدة ثم إعادة كتابتها مرة أخرى.',
            }}
          />
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={values => handleFormSubmit(values)}
          validationSchema={loginValidationSchema}
        >
          {({ setFieldValue, errors, touched, values }) => (
            <Form>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <TextBox
                    name="password"
                    mode={showPassword ? 'text' : 'password'}
                    label={NEW_PASSWORD}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                    buttons={[
                      {
                        location: 'after',
                        name: '',
                        options: {
                          icon: `las ${showPassword ? 'la-eye-slash' : 'la-eye'}`,
                          type: 'default',
                          onClick: () => setShowPassword(prevState => !prevState),
                        },
                      },
                    ]}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <TextBox
                    name="passwordConfirmation"
                    mode={showPassword ? 'text' : 'password'}
                    label={CONFIRM_PASSWORD}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    values={values}
                    buttons={[
                      {
                        location: 'after',
                        name: '',
                        options: {
                          icon: `las ${showPassword ? 'la-eye-slash' : 'la-eye'}`,
                          type: 'default',
                          onClick: () => setShowPassword(prevState => !prevState),
                        },
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Button width="100%" text={SAVE} useSubmitBehavior />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Auth>
  );
};
export default ResetPassword;
