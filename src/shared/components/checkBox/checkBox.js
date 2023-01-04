import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CheckBox as DxCheckBox } from 'devextreme-react/check-box';
import { Validator, RequiredRule } from 'devextreme-react/validator';

import { LocaleContext } from 'context/locale';

const CheckBox = ({ text, required = false, ...props }) => {
  const { isRtl, translate } = useContext(LocaleContext);

  return (
    <DxCheckBox text={translate(text)} iconSize="medium" rtlEnabled={isRtl} {...props}>
      {required && (
        <Validator>
          <RequiredRule />
        </Validator>
      )}
    </DxCheckBox>
  );
};

CheckBox.propTypes = {
  text: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  required: PropTypes.bool,
};

export default CheckBox;
