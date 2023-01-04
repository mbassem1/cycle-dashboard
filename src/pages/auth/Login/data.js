import React from 'react';
import * as Yup from 'yup';
import Text from 'shared/components/Text';
import { FIELD_REQUIRED, INVALID_EMAIL } from 'translations/translations';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(<Text value={INVALID_EMAIL} />)
    .required(<Text value={FIELD_REQUIRED} />),
  password: Yup.string().required(<Text value={FIELD_REQUIRED} />),
});

export default loginValidationSchema;
