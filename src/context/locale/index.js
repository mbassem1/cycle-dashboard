import { useState, useEffect, createContext } from 'react';
import { useSearchParams } from 'react-router-dom';

import { localeText, localeUtils } from 'utils/locale';

const LocaleContext = createContext();
function LocaleProvider({ children }) {
  // const { pathname } = useLocation();
  const [langParam, setLangParam] = useSearchParams({ lang: localStorage.getItem(localeText) || localeUtils.EN });
  const [lang, changeLang] = useState(langParam.get('lang') || localStorage.getItem(localeText) || localeUtils.EN);

  useEffect(() => {
    if (lang === localeUtils.AR) {
      document.getElementById('rootHTML').dir = localeUtils.RTL;
      document.getElementById('rootHTML').classList.add('rtl-theme');
    } else {
      document.getElementById('rootHTML').dir = localeUtils.LTR;
      document.getElementById('rootHTML').classList.remove('rtl-theme');
    }
    setLangParam({ lang });
  }, [lang]);

  // useEffect(() => {
  //   setLangParam({ lang });
  //   localStorage.setItem(localeText, lang);
  // }, [pathname]);

  return (
    <LocaleContext.Provider
      value={{
        lang,
        changeLang,
        direction: lang === localeUtils.AR ? localeUtils.RTL : localeUtils.LTR,
        isRtl: lang === localeUtils.AR,
        translate: (value, selectedLang = lang) => {
          if (selectedLang === localeUtils.AR) {
            return value.AR || value.EN;
          } else if (selectedLang === localeUtils.EN) {
            return value.EN;
          }
          return value.EN;
        },
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export { LocaleProvider, LocaleContext };
