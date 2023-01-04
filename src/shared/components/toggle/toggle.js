/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'devextreme-react/switch';

import './_toggle.scss';
import { LocaleContext } from 'context/locale';

const Toggle = ({ label, ...props }) => {
  const { isRtl, translate } = useContext(LocaleContext);

  return (
    <div className={`d-flex align-items-center ${props.className}`}>
      <Switch rtlEnabled={isRtl} {...props} />
      {label && (
        <label htmlFor="" className={`switch-label ${props.disabled ? 'disable' : ''}`}>
          {label && translate(label)}
        </label>
      )}
    </div>
  );
};

Toggle.propTypes = {
  label: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default Toggle;
