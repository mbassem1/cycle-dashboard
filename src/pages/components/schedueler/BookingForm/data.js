import React from 'react';
import * as Yup from 'yup';
import Text from 'shared/components/Text';
import { FIELD_REQUIRED } from 'translations/translations';

const bookingFormSchema = Yup.object().shape({
  name: Yup.string().required(<Text value={FIELD_REQUIRED} />),
  phone: Yup.string().required(<Text value={FIELD_REQUIRED} />),
});

export default bookingFormSchema;
