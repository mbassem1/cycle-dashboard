import React from 'react';
import Icon from 'shared/components/Icon';
import './styles.scss';

const AppointmentMenuTemplate = itemData => {
  const { text, icon, color } = itemData;
  return (
    <div className="menu-container">
      <div className="menu-container__text" style={{ color }}>
        {text}
      </div>
      <Icon icon={icon} color={color} />
    </div>
  );
};
export default AppointmentMenuTemplate;
