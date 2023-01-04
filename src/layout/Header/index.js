import React, { useContext, useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import './style.scss';
import { useMobile } from 'hooks';
import { DrawerContext } from 'context/drawer';
import Text from 'shared/components/Text';
import { filteredItem } from 'layout/Sidebar/utils';
import DrawerToggler from './DrawerToggler';
import HeaderActionsList from './HeaderActionsList';

const Header = () => {
  const { setDrawerVisibleMobile, setDrawerVisible, drawerVisible, drawerVisibleMobile } = useContext(DrawerContext);
  const isMobile = useMobile();
  const { pathname } = useLocation();
  const [addShadow, setAddShadow] = useState(false);
  const isDrawerOpen = drawerVisible || drawerVisibleMobile;
  const currentTab = useMemo(() => {
    let val;
    if (filteredItem(pathname)) {
      if (filteredItem(pathname).children) {
        const currentItem = filteredItem(pathname).children.find(
          item => pathname.split('/').pop() === item.path.split('/').pop(),
        );
        val = currentItem;
      } else {
        val = filteredItem(pathname);
      }
    }
    return val;
  }, [pathname]);

  const handleDrawer = () => {
    setDrawerVisibleMobile(prevState => !prevState);
    setDrawerVisible(false);
  };

  useEffect(() => {
    let lastKnownScrollPosition = 0;
    let ticking = false;
    const handlePageScrolling = () => {
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastKnownScrollPosition > 1) {
            setAddShadow(true);
          } else {
            setAddShadow(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener('scroll', handlePageScrolling);

    return () => {
      document.removeEventListener('scroll', handlePageScrolling);
    };
  }, []);

  return (
    <header className={`header-contain ${addShadow ? 'scrolling' : ''}`}>
      <div className="header-wrap">
        <div className="header-data">
          {isMobile ? (
            <div className={`sidebar-key ${isDrawerOpen ? 'open' : ''}`} onClick={handleDrawer} aria-hidden="true">
              <div className="sidebar-key-line" />
              <div className="sidebar-key-line" />
              <div className="sidebar-key-line" />
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <DrawerToggler />
              {currentTab && currentTab.title && <Text size="20" value={currentTab.title} />}
            </div>
          )}
        </div>
        <div className="header-actions">
          <div className="d-flex align-items-center">
            <HeaderActionsList />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
