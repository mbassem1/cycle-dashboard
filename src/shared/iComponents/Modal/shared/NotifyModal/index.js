import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const NotifyModal = ({ icon, body, action, padding }) => (
  <div className="notify-modal" style={{ padding }}>
    {icon && <div className="notify-modal-icon">{icon}</div>}
    {body && <div className="notify-modal-data">{body}</div>}
    {action && <div className="notify-modal-action">{action}</div>}
  </div>
);

NotifyModal.propTypes = {
  icon: PropTypes.element,
  body: PropTypes.element,
  action: PropTypes.element,
  padding: PropTypes.string,
};

export default NotifyModal;
