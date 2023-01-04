import React from 'react';
import * as Yup from 'yup';
import Text from 'shared/components/Text';
import { FIELD_REQUIRED, PASSWORD_NOT_MATCH } from 'translations/translations';

const loginValidationSchema = Yup.object().shape({
  password: Yup.string().required(<Text value={FIELD_REQUIRED} />),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], <Text value={PASSWORD_NOT_MATCH} />),
});

export default loginValidationSchema;
