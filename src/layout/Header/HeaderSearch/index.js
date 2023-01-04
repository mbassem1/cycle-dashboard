import React, { useRef, useState } from 'react';

import './style.scss';
import TextBox from 'shared/components/TextField/textField';
import { useOutsideClick } from 'hooks';
import { SEARCH } from 'translations/translations';
import PatientsFiles from '../../../pages/patients/PatientsDrawer/PatientsFiles';

const HeaderSearch = () => {
  const headerSearchRef = useRef(null);
  const [showResult, setShowResult] = useState(false);

  // hide if clicked outside
  useOutsideClick(headerSearchRef, () => setShowResult(false));
  const handleValueChange = val => {
    if (val && val.length >= 1) {
      setShowResult(true);
    }  else {
      setShowResult(false);
    }
  }

  return (
    <div className="header-search-wrap" ref={headerSearchRef}>
      <TextBox
        placeholder={SEARCH}
        buttons={[
          {
            location: 'after',
            name: '',
            options: {
              icon: 'las la-search',
              type: 'default',
            },
          },
        ]}
        onValueChanged={e => handleValueChange(e.value)}
        valueChangeEvent="keyup"
      />
      {showResult && (
        <div className="header-search-result">
          <PatientsFiles hideClose />
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
