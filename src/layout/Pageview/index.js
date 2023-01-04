import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { DrawerContext } from 'context/drawer';
import './style.scss';
import { useMobile } from 'hooks';

const Pageview = ({ children }) => {
  const { setDrawerVisible, setDrawerVisibleMobile, drawerComponent } = useContext(DrawerContext);
  const isMobile = useMobile();

  const handleDrawer = () => {
    // if drawer contains a component ( Not list )
    // don't close the drawer else close it
    if (!drawerComponent && !isMobile) {
      setDrawerVisible(false);
    }

    // close drawer on mobile view
    if (isMobile) {
      setDrawerVisible(false);
      setDrawerVisibleMobile(false);
    }
  };

  return (
    <section onClick={handleDrawer} className="page-contain" aria-hidden="true">
      {children}
    </section>
  );
};

Pageview.propTypes = {
  children: PropTypes.element,
};

export default Pageview;
