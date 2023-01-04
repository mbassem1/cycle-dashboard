import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';

import Text from 'shared/components/Text';
import Button from 'shared/components/Button/button';
import { auth } from 'routes/paths';
import Counter from 'shared/iComponents/Counter';
import { OTP_CODE_RECEIVE, RESEND } from 'translations/translations';
import Auth from '..';

const ForgetPassword = () => {
  const timerSeconds = 5;
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [otp, setOtp] = useState('');
  const [disableValidate, setDisableValidate] = useState(true);
  const [timer, setTimer] = useState(timerSeconds);
  const [resendOtp, setResendOtp] = useState(true);

  const handleOtp = () => {
    setResendOtp(true);
    setDisableValidate(true);
  };

  useEffect(() => {
    if (otp === '1234') {
      setError(
        <Text
          value={{
            EN: 'wrong OTP, please write the right one we send.',
            AR: 'OTP خاطئ ، يرجى كتابة الرقم الصحيح الذي نرسله.',
          }}
        />,
      );
    } else if (otp.length === 4) {
      setError(null);
      navigate(auth.resetPassword, { state: { id: otp } });
    }
  }, [otp]);

  useEffect(() => {
    if (timer === 0) {
      setDisableValidate(false);
      setResendOtp(false);
      setTimer(timerSeconds);
    }
  }, [timer]);

  return (
    <Auth>
      <div>
        <div className="header mb-5">
          <Text
            className="mb-4"
            size="24"
            value={{
              EN: 'We have sent a link to recover your password, please check it.',
              AR: 'لقد أرسلنا رابطًا لاستعادة كلمة المرور الخاصة بك ، يرجى التحقق منها.',
            }}
          />
          <Text
            className="mb-5 secondary-dark"
            value={{
              EN: 'We sent you an OTP to your email admin.admin@admin.com and mobile No. **** *** **** 000 please insert it.',
              AR: 'لقد أرسلنا لك OTP إلى بريدك الإلكتروني admin.admin@admin.com ورقم الهاتف المحمول **** *** **** 000 الرجاء إدخاله.',
            }}
          />
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <Text
              className="mb-2 secondary-dark"
              value={{
                EN: 'OTP',
                AR: 'OTP',
              }}
            />
            <OtpInput
              inputStyle="otp-input"
              shouldAutoFocus
              containerStyle="otp-container"
              value={otp}
              onChange={value => setOtp(value)}
              numInputs={4}
            />
            {error && <div className="error-msg">{error}</div>}
          </div>
        </div>
        <div className="mt-4">
          {resendOtp && (
            <div className="mb-3 d-flex align-items-center justify-content-between">
              <Text className="secondary-dark" value={OTP_CODE_RECEIVE} />
              <Counter timer={timer} setTimer={setTimer} />
            </div>
          )}
          <div>
            <Button disabled={disableValidate} width="100%" text={RESEND} onClick={handleOtp} />
          </div>
        </div>
      </div>
    </Auth>
  );
};
export default ForgetPassword;
