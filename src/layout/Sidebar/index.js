import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { DrawerContext } from 'context/drawer';
import { ThemeContext } from 'context/theme';

import { useMobile } from 'hooks';
import Logo from 'assets/icons/logo_icon.svg';
import DarkLogo from 'assets/icons/dark_icon.svg';
import Button from 'shared/components/Button/button';
import { UserContext } from 'context/user';
import SidebarItem from './SidebarItem';
import { items, menuTypes } from './utils';
import SideBarDrawer from './SidebarDrawer';

const SideBarItemIn = ({ item }) => {
  const { setDrawerVisible, setDrawerList, setDrawerVisibleMobile, setDrawerComponent } = useContext(DrawerContext);
  const isMobile = useMobile();

  const handleDrawer = () => {
    // if have sub menu
    if (item.children) {
      // add sub menu to the drawer context
      setDrawerList(item.children);

      // open the drawer
      setDrawerVisible(true);

      // reset drawer content
      setDrawerComponent(null);
    }

    // if have sub component
    if (item.component) {
      // add component to drawer contaxt
      setDrawerComponent(item.component);

      // open the drawer
      setDrawerVisible(true);

      // reset drawer sub menu
      setDrawerList([]);
    }

    // if doesn't have a sub menu or component
    if (!item.children && !item.component) {
      // reset drawer content ( Submenu && Content )
      setDrawerList([]);
      setDrawerComponent(null);

      // force close drawer
      setDrawerVisible(false);

      // if mobile view and doesn't have a sub menu or component
      // force close mobile drawer
      if (isMobile) {
        setDrawerVisibleMobile(false);
      }
    }
  };

  return <SidebarItem item={item} onClick={handleDrawer} type={menuTypes.MAIN_MENU} />;
};

const Sidebar = () => {
  const { useDarkTheme } = useContext(ThemeContext);
  const { setIsAuthenticated } = useContext(UserContext);

  return (
    <aside className="sidebar-contain">
      <div className="sidebar-wrap">
        <div className="sidebar-logo">
          <img src={useDarkTheme ? DarkLogo : Logo} alt="Cycle" />
        </div>
        <div className="sidebar-list">
          <ul className="sidebar-list-wrap">
            {items.map(item => (
              <SideBarItemIn item={item} key={item.id} />
            ))}
          </ul>
        </div>
        <div className="sidebar-foot">
          <Button
            onClick={() => setIsAuthenticated(false)}
            type="gray"
            stylingMode="outlined"
            icon="la-sign-out-alt"
            id="only-icon"
            width="36"
            height="36"
          />
        </div>
      </div>
      <SideBarDrawer />
    </aside>
  );
};

SideBarItemIn.propTypes = {
  item: PropTypes.shape({
    children: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        icon: PropTypes.string,
      }),
    ),
    component: PropTypes.element,
  }),
};

export default Sidebar;
