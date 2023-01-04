import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RadioGroup as DXRadioGroup } from 'devextreme-react/radio-group';

import './_radio.scss';
import { LocaleContext } from 'context/locale';
import Text from '../Text';

const RadioGroup = ({ label, setFieldValue, name, errors, touched, values, ...props }) => {
  /* help documentation
   https://js.devexpress.com/Documentation/Guide/UI_Components/RadioGroup/Customize_Item_Appearance
  */
  const { isRtl } = useContext(LocaleContext);
  const isError = errors && !!(errors[name] && touched[name]);

  const renderRadioGroupItem = ({ text }) => <Text value={text} size="14" />;
  return (
    <>
      {label && <Text size="14" className="secondary-dark form-label" value={label} />}
      <DXRadioGroup
        rtlEnabled={isRtl}
        itemRender={renderRadioGroupItem}
        value={values && values[name]}
        onValueChanged={e => setFieldValue && setFieldValue(name, e.value)}
        {...props}
      />
      {isError ? <div className="error-msg">{errors[name]}</div> : null}
    </>
  );
};

RadioGroup.propTypes = {
  label: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
};

export default RadioGroup;
