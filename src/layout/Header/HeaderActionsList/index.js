import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Logo from 'assets/icons/logo_icon.svg';
import DarkLogo from 'assets/icons/dark_icon.svg';
import { LocaleContext } from 'context/locale';
import { localeText, localeUtils } from 'utils/locale';
import { useMobile } from 'hooks';
import { ThemeContext } from 'context/theme';
import Button from 'shared/components/Button/button';
import ToolBar from 'shared/iComponents/Toolbar';
import { toolBarTypes } from 'shared/iComponents/Toolbar/utils';
import Text from 'shared/components/Text';
import DrawerModal from 'shared/iComponents/DrawerModal';
import Notifications from '../Notifications';
import HeaderSearch from '../HeaderSearch';

const HeaderActionsListItem = ({ children }) => {
  const { lang } = useContext(LocaleContext);
  const isArabic = lang === localeUtils.AR;

  return <li className={isArabic ? 'ms-2' : 'me-2'}>{children}</li>;
};

const HeaderActionsList = () => {
  const { useDarkTheme, setUseDarkTheme } = useContext(ThemeContext);
  const { changeLang } = useContext(LocaleContext);
  const isMobile = useMobile();
  const [showUserDrawer, setShowUserDrawer] = useState(false);

  return isMobile ? (
    <div className="mobile-logo">
      <img width="32" src={useDarkTheme ? DarkLogo : Logo} alt="Cycle" />
    </div>
  ) : (
    <>
      <ul className="d-flex align-items-center">
        <HeaderActionsListItem>
          <HeaderSearch />
        </HeaderActionsListItem>
        <HeaderActionsListItem>
          <Button
            type="gray"
            stylingMode="outlined"
            icon={useDarkTheme ? 'la-sun' : 'la-moon'}
            id="only-icon"
            width="36"
            height="36"
            onClick={() => setUseDarkTheme(prevState => !prevState)}
          />
        </HeaderActionsListItem>
        <HeaderActionsListItem>
          <ToolBar
            items={[
              {
                id: 1,
                text: <Text value={{ EN: 'Arabic', AR: 'عربي' }} size="14" />,
                onClick: () => {
                  changeLang(localeUtils.AR);
                  localStorage.setItem(localeText, localeUtils.AR);
                },
              },
              {
                id: 2,
                text: <Text value={{ EN: 'English', AR: 'إنجليزي' }} size="14" />,
                onClick: () => {
                  changeLang(localeUtils.EN);
                  localStorage.setItem(localeText, localeUtils.EN);
                },
              },
            ]}
            minWidth="132"
            position="right bottom"
            icon="la-globe"
          />
        </HeaderActionsListItem>
        <HeaderActionsListItem>
          <ToolBar component={<Notifications />} type={toolBarTypes.CONTENT} icon="la-bell" position="right bottom" />
        </HeaderActionsListItem>
        <HeaderActionsListItem>
          <Button type="gray" stylingMode="outlined" icon="la-cog" id="only-icon" width="36" height="36" />
        </HeaderActionsListItem>
        <HeaderActionsListItem>
          <Button
            onClick={() => setShowUserDrawer(true)}
            type="gray"
            stylingMode="outlined"
            icon="la-user"
            id="only-icon"
            width="36"
            height="36"
          />
        </HeaderActionsListItem>
      </ul>
      {showUserDrawer && (
        <DrawerModal onClose={() => setShowUserDrawer(false)}>
          <Text value={{ EN: 'User content drawer', AR: 'User content drawer' }} />
        </DrawerModal>
      )}
    </>
  );
};

HeaderActionsListItem.propTypes = {
  children: PropTypes.element,
};

export default HeaderActionsList;
