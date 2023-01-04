import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TextBox as DxTextBox } from 'devextreme-react//text-box';

import './_textField.scss';
import { LocaleContext } from 'context/locale';

const TextBox = ({
  stylingMode = 'underlined',
  label,
  placeholder,
  setFieldValue,
  name,
  errors,
  touched,
  values,
  ...props
}) => {
  const { isRtl, translate } = useContext(LocaleContext);
  const isError = errors && !!(errors[name] && touched[name]);
  return (
    <>
      <DxTextBox
        stylingMode={stylingMode}
        label={label && translate(label)}
        labelMode="static"
        rtlEnabled={isRtl}
        placeholder={placeholder && translate(placeholder)}
        onValueChanged={e => setFieldValue && setFieldValue(name, e.value)}
        className={isError && 'contains-error'}
        value={values && values[name]}
        {...props}
      />
      {isError ? <div className="error-msg">{errors[name]}</div> : null}
    </>
  );
};

TextBox.propTypes = {
  stylingMode: PropTypes.string,
  label: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  placeholder: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  required: PropTypes.bool,
};

export default TextBox;
