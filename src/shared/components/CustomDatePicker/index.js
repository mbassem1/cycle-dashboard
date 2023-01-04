import React, { useState, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import ar from 'date-fns/locale/ar';
import 'react-datepicker/dist/react-datepicker.css';
import { useOutsideClick } from 'hooks';

import { LocaleContext } from 'context/locale';
import TextBox from '../TextField/textField';
import './styles.scss';

const CustomDatePicker = ({ isRange = false, title, isOpen = false, alwaysOpen = false, withoutInput = false }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [isOpened, setIsOpened] = useState(isOpen);
  const dateRef = useRef(null);
  const { lang } = useContext(LocaleContext);
  registerLocale('ar', ar);

  useOutsideClick(dateRef, () => {
    if (alwaysOpen) {
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
  });

  const onChange = date => {
    if (isRange) {
      const [start, end] = date;
      setStartDate(start);
      setEndDate(end);
    } else {
      setStartDate(date);
    }
    if (alwaysOpen) {
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
  };

  const formattedDateValue = `${startDate ? startDate.toLocaleDateString() : ''} ${endDate ? '-' : ''} ${
    endDate ? endDate?.toLocaleDateString() : ''
  }`;

  return (
    <>
      <p className="calender-label">Calender</p>
      {!withoutInput && (
        <div>
          <TextBox
            label={title}
            mode="text"
            value={formattedDateValue}
            onFocusIn={() => setIsOpened(true)}
            buttons={[
              {
                location: 'after',
                name: '',
                options: { icon: 'las la-calendar', type: 'default' },
              },
            ]}
          />
        </div>
      )}

      {isOpened && (
        <div className="datePicker-container" ref={dateRef}>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange={isRange}
            inline
            locale={lang === 'ar' ? 'ar' : 'en'}
          />
        </div>
      )}
    </>
  );
};

export default CustomDatePicker;

CustomDatePicker.propTypes = {
  isRange: PropTypes.bool,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  alwaysOpen: PropTypes.bool,
  withoutInput: PropTypes.bool,
};
