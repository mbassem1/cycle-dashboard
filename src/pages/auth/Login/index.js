import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

import Text from 'shared/components/Text';
import TextBox from 'shared/components/TextField/textField';
import Button from 'shared/components/Button/button';
import Toggle from 'shared/components/toggle/toggle';
import { auth } from 'routes/paths';
import { UserContext } from 'context/user';
import { EMAIL, FORGET_PASSWORD, PASSWORD, REMEMBER_ME, SIGN_IN } from 'translations/translations';
import { DrawerContext } from 'context/drawer';
import Auth from '..';
import loginValidationSchema from './data';

const Login = () => {
  const navigate = useNavigate();
  const { setDrawerComponent, setDrawerVisible, setDrawerList } = useContext(DrawerContext);
  const { setIsAuthenticated } = useContext(UserContext);
  const initialValues = {
    email: '',
    password: '',
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = values => {
    console.log(values);
    setDrawerVisible(false);
    setDrawerList([]);
    setDrawerComponent(null);
    setIsAuthenticated(true);
  };

  return (
    <Auth>
      <div>
        <div className="header mb-5">
          <Text
            className="mb-4"
            size="24"
            value={{
              EN: 'Welcome to our APP. Sign In to continue.',
              AR: 'مرحبًا بكم في تطبيقنا. قم بتسجيل الدخول للمتابعة.',
            }}
          />
          <Text
            className="mb-5 secondary-dark"
            value={{
              EN: 'Enter your E-mail and Password to proceed.',
              AR: 'أدخل بريدك الإلكتروني وكلمة المرور للمتابعة.',
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
                    label={EMAIL}
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
                <div className="col-md-12 mb-3">
                  <TextBox
                    name="password"
                    mode={showPassword ? 'text' : 'password'}
                    label={PASSWORD}
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
                  <div className="d-flex align-items-center justify-content-between">
                    <Toggle label={REMEMBER_ME} />
                    <Text
                      className="cursor-pointer primary"
                      value={FORGET_PASSWORD}
                      onClick={() => navigate(auth.forgetPassword)}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button width="100%" text={SIGN_IN} useSubmitBehavior />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Auth>
  );
};
export default Login;
