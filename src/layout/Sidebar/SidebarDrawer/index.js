import React, { useContext, useEffect } from 'react';

import './style.scss';
import { DrawerContext } from 'context/drawer';
import SidebarItem from '../SidebarItem';
import { menuTypes } from '../utils';

const SideBarDrawer = () => {
  const { drawerVisible, drawerList, drawerComponent } = useContext(DrawerContext);
  useEffect(() => {
    if (drawerComponent) {
      document.getElementById('rootBODY').classList.add('drawer-active-component');
    } else {
      document.getElementById('rootBODY').classList.remove('drawer-active-component');
    }
  }, [drawerComponent]);
  return (
    <div className={`sidebar-drawer ${drawerVisible ? 'active' : ''}`}>
      {drawerList && !drawerComponent && (
        <ul className="sidebar-list-wrap">
          {drawerList.map(item => (
            <SidebarItem key={item.id} item={item} type={menuTypes.SUB_MENU} />
          ))}
        </ul>
      )}
      {drawerComponent && drawerComponent}
    </div>
  );
};

export default SideBarDrawer;
