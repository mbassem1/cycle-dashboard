import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { LocaleContext } from 'context/locale';

const Text = ({ className, value, size = 15, color, ...props }) => {
  const { translate } = useContext(LocaleContext);

  return (
    <p
      className={`cycle-text ${className}`}
      aria-hidden
      onClick={props.onClick}
      style={{ fontSize: `${size}px`, color }}
      {...props}
    >
      {translate(value)}
    </p>
  );
};

Text.propTypes = {
  value: PropTypes.shape({
    EN: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    AR: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Text;
