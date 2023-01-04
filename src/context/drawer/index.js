import React, { useEffect, useState, createContext } from 'react';

const DrawerContext = createContext();
const DrawerProvider = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerVisibleMobile, setDrawerVisibleMobile] = useState(false);
  const [drawerList, setDrawerList] = useState([]);
  const [drawerComponent, setDrawerComponent] = useState(null);

  useEffect(() => {
    if (drawerVisible) document.getElementById('rootBODY').classList.add('drawer-active');
    else document.getElementById('rootBODY').classList.remove('drawer-active');
  }, [drawerVisible]);

  useEffect(() => {
    if (drawerVisibleMobile) document.getElementById('rootBODY').classList.add('drawer-mobile-active');
    else document.getElementById('rootBODY').classList.remove('drawer-mobile-active');
  }, [drawerVisibleMobile]);

  useEffect(() => {
    window.onpopstate = () => {
      setDrawerList([]);
      setDrawerComponent(null);
      setDrawerVisible(false);
    };
  }, []);

  return (
    <DrawerContext.Provider
      value={{
        drawerVisible,
        setDrawerVisible,
        drawerList,
        setDrawerList,
        drawerVisibleMobile,
        setDrawerVisibleMobile,
        drawerComponent,
        setDrawerComponent,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export { DrawerProvider, DrawerContext };
