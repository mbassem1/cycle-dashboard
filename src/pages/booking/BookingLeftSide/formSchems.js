import React from 'react';
import * as Yup from 'yup';

import Text from 'shared/components/Text';
import { FIELD_REQUIRED } from 'translations/translations';

const validations = Yup.object().shape({
  doctors: Yup.array().required(<Text value={FIELD_REQUIRED} />),
  clinics: Yup.array().required(<Text value={FIELD_REQUIRED} />),
  bookingDate: Yup.string().required(<Text value={FIELD_REQUIRED} />),
});

export default validations;
