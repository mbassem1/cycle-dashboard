import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SelectBox as DxSelectBox } from 'devextreme-react/select-box';

import './_select.scss';
import { LocaleContext } from 'context/locale';

const SelectBox = ({ label, placeholder, setFieldValue, name, errors, touched, values, ...props }) => {
  const { isRtl, translate } = useContext(LocaleContext);
  const isError = errors && !!(errors[name] && touched[name]);
  return (
    <>
      <DxSelectBox
        label={translate(label)}
        labelMode="static"
        searchEnabled
        stylingMode="underlined"
        rtlEnabled={isRtl}
        placeholder={placeholder && translate(placeholder)}
        onValueChanged={e => setFieldValue && setFieldValue(name, e.value)}
        value={values && values[name]}
        {...props}
      />
      {isError ? <div className="error-msg">{errors[name]}</div> : null}
    </>
  );
};

SelectBox.propTypes = {
  label: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  placeholder: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
};

export default SelectBox;
