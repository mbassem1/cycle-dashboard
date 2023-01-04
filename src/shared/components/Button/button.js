import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button as DxButton } from 'devextreme-react/button';

import './_button.scss';
import { LocaleContext } from 'context/locale';

const Button = ({ text, type = 'default', stylingMode = 'contained', icon, ...props }) => {
  const { isRtl, translate } = useContext(LocaleContext);

  return (
    <DxButton
      text={text && translate(text)}
      type={type}
      icon={icon && `las ${icon}`}
      stylingMode={stylingMode}
      rtlEnabled={isRtl}
      {...props}
    />
  );
};

Button.propTypes = {
  text: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  type: PropTypes.string,
  stylingMode: PropTypes.string,
  icon: PropTypes.string,
};

export default Button;
