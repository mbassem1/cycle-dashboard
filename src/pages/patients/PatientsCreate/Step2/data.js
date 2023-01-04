import React from 'react';
import * as Yup from 'yup';

import Text from 'shared/components/Text';
import { FIELD_REQUIRED, INVALID_EMAIL } from 'translations/translations';

const stepTwoValidationSchema = Yup.object().shape({
  phone: Yup.number().required(<Text value={FIELD_REQUIRED} />),
  email: Yup.string().email(<Text value={INVALID_EMAIL} />),
  address: Yup.string(),
});

export default stepTwoValidationSchema;
