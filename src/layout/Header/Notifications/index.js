import React from 'react';

import './style.scss';
import Text from 'shared/components/Text';
import Icon from 'shared/components/Icon';
import { NOTIFICATIONS_TEXT } from 'translations/translations';
import { items } from './mocks';

const Notifications = () => {
  const { length } = items;

  return (
    <div className="notification-contain">
      <div className="notification-head">
        <Text value={NOTIFICATIONS_TEXT(length)} />
      </div>
      <div className="notification-body">
        {items.map(item => (
          <div key={item.id} className="notification-item">
            <div className="notification-content">
              <div className="notification-icon">
                <Icon icon="la-bell" color="#5E81F4" />
              </div>
              <div className="notification-data">
                <Text size="13" color="#1C1D21" value={item.text} />
                <Text size="12" value={item.description} />
              </div>
            </div>
            <div className="notification-date">
              <Text size="12" value={item.date} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notifications;
