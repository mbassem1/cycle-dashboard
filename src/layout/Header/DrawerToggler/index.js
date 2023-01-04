import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { DrawerContext } from 'context/drawer';
import { LocaleContext } from 'context/locale';
import { localeUtils } from 'utils/locale';
import { filteredItem } from 'layout/Sidebar/utils';
import Button from 'shared/components/Button/button';

const DrawerToggler = () => {
  const { pathname } = useLocation();
  const { lang } = useContext(LocaleContext);
  const { setDrawerList, setDrawerVisible, drawerVisible, drawerVisibleMobile, setDrawerComponent } =
    useContext(DrawerContext);
  const isDrawerOpen = drawerVisible || drawerVisibleMobile;
  const isArabic = lang === localeUtils.AR;
  const urlData = filteredItem(pathname);

  const handleDrawer = () => {
    // check if current url have a sub menu
    if (urlData && urlData.children) {
      // add sub menu to drawer context
      setDrawerList(urlData.children);

      // toggle close / open drawer
      setDrawerVisible(prevState => !prevState);
    }

    // check if current url have a content
    if (urlData && urlData.component) {
      // add component content to drawer context
      setDrawerComponent(urlData.component);

      // toggle close / open drawer
      setDrawerVisible(prevState => !prevState);
    }
  };

  // check if current url dosen't have a sub menu or content then return empty.
  if (urlData && !urlData.children && !urlData.component) return null;

  return (
    <div className={`${isArabic ? 'ms-3' : 'me-3'}`}>
      <Button
        type="gray"
        stylingMode="outlined"
        icon={`la-angle-${isDrawerOpen ? (isArabic ? 'right' : 'left') : isArabic ? 'left' : 'right'}`}
        id="only-icon"
        width="36"
        height="36"
        onClick={handleDrawer}
      />
    </div>
  );
};

export default DrawerToggler;
