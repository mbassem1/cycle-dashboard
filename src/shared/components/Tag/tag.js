import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { LocaleContext } from 'context/locale';

const Tag = ({ text, textColor, onClick, icon, ...props }) => {
  const { translate } = useContext(LocaleContext);

  return (
    <div className={`${icon ? 'tag-icon tag' : 'tag'}  ${textColor}`} {...props}>
      {text && translate(text)}
      {icon && <i className="las la-times" onClick={onClick} aria-hidden="true" />}
    </div>
  );
};
Tag.propTypes = {
  text: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  icon: PropTypes.bool,
  onClick: PropTypes.func,
  textColor: PropTypes.string,
};

export default Tag;
