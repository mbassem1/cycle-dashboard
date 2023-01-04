import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { NEW } from 'translations/translations';
import './styles.scss';
import Button from '../Button/button';

const CustomAccordion = ({ title, children }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    document.body.requestFullscreen();
    setIsFullscreen(!isFullscreen);
  };

  const handleExitFullscreen = () => {
    document.exitFullscreen();
    setIsFullscreen(false);
  };
  const handleToggle = () => {
    if (isFullscreen) {
      handleExitFullscreen();
    } else {
      handleFullscreen();
    }
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title">
        <div className="left-side" aria-hidden>
          <p>{title}</p>
        </div>

        <div className="right-side">
          <Button text={NEW} type="normal" />
          <Button type="gray" stylingMode="outlined" icon="la-filter" id="only-icon" width="36" height="36" />
          <Button
            type="gray"
            stylingMode="outlined"
            icon="la-expand"
            id="only-icon"
            width="36"
            height="36"
            onClick={handleToggle}
          />
        </div>
      </div>
      <div className="accordion-content">{children}</div>
      {/* <div className="accordion-footer" /> */}
    </div>
  );
};

CustomAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomAccordion;
