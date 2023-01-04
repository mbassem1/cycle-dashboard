import React from 'react';
import PropTypes from 'prop-types';

import TabPanel from 'devextreme-react/tab-panel';
import './style.scss';

const CustomTabPanel = ({ children, type = 'primary', ...props }) => (
  // for more props please visit ( https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxTabPanel/ )
  // expected type ( primary, outline ) and primary is the default type
  // Switch between them to see the difference
  <TabPanel {...props} className={`custom-tab-panel ${type} ${props.className}`}>
    {children}
  </TabPanel>
);

CustomTabPanel.propTypes = {
  children: PropTypes.element,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default CustomTabPanel;
