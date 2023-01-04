import React, { useContext, useState } from 'react';

import './style.scss';
import { ORDERS_INVESTIGATION } from 'translations/translations';
import { LocaleContext } from 'context/locale';
import CustomAccordion from 'shared/components/CustomAccordion';
import Text from 'shared/components/Text';
import Button from 'shared/components/Button/button';
import DrawerModal from 'shared/iComponents/DrawerModal';
import { ordersList } from './mockup';
import XrayDrawer from '../XrayDrawer';

const Orders = () => {
  const { translate } = useContext(LocaleContext);
  const [isDrwarOpen, setIsDrwarOpen] = useState(false);

  return (
    <CustomAccordion title={translate(ORDERS_INVESTIGATION)}>
      <div className="orders-grid">
        {ordersList.map(item => (
          <div key={item.id} className="orders-item d-flex align-items-center justify-content-between">
            <Text size="12" className="primary" value={{ EN: item.title, AR: item.title }} />
            <ul className="orders-actions-list d-flex align-items-center">
              <li>
                <Button icon="la-eye" id="only-icon" width="32" height="32" onClick={() => setIsDrwarOpen(true)} />
              </li>
              <li>
                <Button icon="la-print" id="only-icon" width="32" height="32" />
              </li>
            </ul>
          </div>
        ))}
      </div>

      {isDrwarOpen && (
        <DrawerModal onClose={() => setIsDrwarOpen(false)} widthAttr={683}>
          <XrayDrawer />
        </DrawerModal>
      )}
    </CustomAccordion>
  );
};

export default Orders;
