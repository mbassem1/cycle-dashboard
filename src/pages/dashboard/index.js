import React from 'react';

import ToolBar from 'shared/iComponents/Toolbar';
import CycleTabs from 'shared/iComponents/Tabs';
import { DASHBOARD, WAREHOUSES, DELETE_ITEM } from 'translations/translations';
import Text from 'shared/components/Text';
import Icon from 'shared/components/Icon';

const Dashboard = () => (
  <div style={{ height: '1200px' }}>
    <CycleTabs
      items={[
        {
          id: 1,
          text: DASHBOARD,
          icon: 'la la-sun',
          content: 'Content 1',
        },
        {
          id: 2,
          text: WAREHOUSES,
          icon: 'la la-sun',
          content: 'Content 2',
        },
      ]}
      type="primary"
    />

    <CycleTabs
      items={[
        {
          id: 1,
          text: DASHBOARD,
          content: 'Content 1',
        },
        {
          id: 2,
          text: WAREHOUSES,
          content: 'Content 2',
        },
      ]}
      type="outline"
      className="mt-4"
    />

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
      <ToolBar
        items={[
          {
            id: 1,
            text: <Text value={DASHBOARD} size="14" />,
            icon: <Icon icon="la-tachometer-alt" />,
            onClick: () => console.log('Do some functionality here.'),
          },
          {
            id: 2,
            text: <Text value={WAREHOUSES} size="14" />,
            icon: <Icon icon="la-star-of-life" />,
          },
          {
            id: 3,
            text: <Text value={DELETE_ITEM} color="#FF808B" size="14" />,
            icon: <Icon icon="la-trash-alt" color="#FF808B" />,
          },
        ]}
        position="left top"
        className="ms-3"
      />
      <ToolBar
        items={[
          {
            id: 1,
            text: <Text value={DASHBOARD} size="14" />,
          },
          {
            id: 2,
            text: <Text value={WAREHOUSES} size="14" />,
          },
          {
            id: 3,
            text: <Text value={DELETE_ITEM} color="#FF808B" size="14" />,
          },
        ]}
        icon="la-ellipsis-h"
        position="right bottom"
        className="ms-3"
      />
    </div>
  </div>
);
export default Dashboard;
