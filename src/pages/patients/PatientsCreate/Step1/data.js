import React from 'react';
import * as Yup from 'yup';

import Text from 'shared/components/Text';
import { FIELD_REQUIRED } from 'translations/translations';

const stepOneValidationSchema = Yup.object().shape({
  fileNumber: Yup.string().required(<Text value={FIELD_REQUIRED} />),
  idNumber: Yup.number().required(<Text value={FIELD_REQUIRED} />),
  patientName: Yup.string().required(<Text value={FIELD_REQUIRED} />),
  age: Yup.number().required(<Text value={FIELD_REQUIRED} />),
  birthDate: Yup.string().required(<Text value={FIELD_REQUIRED} />),
  gender: Yup.string().required(<Text value={FIELD_REQUIRED} />),
});

export default stepOneValidationSchema;
