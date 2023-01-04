import React from 'react';
import * as Yup from 'yup';

import Text from 'shared/components/Text';
import { FIELD_REQUIRED } from 'translations/translations';

const stepFourValidationSchema = Yup.object().shape({
  providerName: Yup.string().required(<Text value={FIELD_REQUIRED} />),
  providerId: Yup.string().required(<Text value={FIELD_REQUIRED} />),
  membership: Yup.string().required(<Text value={FIELD_REQUIRED} />),
  expiryDate: Yup.string().required(<Text value={FIELD_REQUIRED} />),
});

export default stepFourValidationSchema;
