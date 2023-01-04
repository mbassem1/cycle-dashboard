/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Button from 'shared/components/Button/button';
import { DESIGNED_DEVELOPED_BY } from 'translations/translations';
import { LocaleContext } from 'context/locale';
import { localeText, localeUtils } from 'utils/locale';
import LoginBackGround from '../../assets/images/login-background.svg';
import Logo from '../../assets/icons/logo.svg';

const Auth = ({ children }) => {
  const { lang, changeLang, translate } = useContext(LocaleContext);

  // language handler
  const handleLangSwitcher = () => {
    if (lang === localeUtils.EN) {
      changeLang(localeUtils.AR);
      localStorage.setItem(localeText, localeUtils.AR);
    }
    if (lang === localeUtils.AR) {
      changeLang(localeUtils.EN);
      localStorage.setItem(localeText, localeUtils.EN);
    }
  };

  return (
    <div className="login-contain">
      <div className="login-data">
        <div className="login-card">
          <div className="login-content">
            <div className="login-head">
              <div className="login-logo">
                <img src={Logo} alt="Logo" />
              </div>
            </div>
            <div className="login-body">{children}</div>
          </div>
        </div>
        <div className="login-data-foot">
          <p className="secondary-dark">
            {translate(DESIGNED_DEVELOPED_BY)}
            <a href="#" style={{ paddingInlineStart: '4px' }}>
              PTIT 2022
            </a>
          </p>
          <Button onClick={handleLangSwitcher} stylingMode="outlined" text={{ EN: 'العربية', AR: 'English' }} />
        </div>
      </div>
      <div className="login-image" style={{ backgroundImage: `url(${LoginBackGround})` }} />
    </div>
  );
};

Auth.propTypes = {
  children: PropTypes.node,
};

export default Auth;
