/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import ar from 'date-fns/locale/ar';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { useOutsideClick } from 'hooks';

import { LocaleContext } from 'context/locale';
import TextBox from 'shared/components/TextField/textField';

const DatePickerRange = ({ setFieldValue, name, errors, touched, values, label }) => {
  registerLocale('ar', ar);
  const dateRef = useRef(null);
  const { lang } = useContext(LocaleContext);
  const [isOpened, setIsOpened] = useState(false);
  const [startDate, setStartDate] = useState((values[name] && new Date(values[name].split('-')[0])) || null);
  const [endDate, setEndDate] = useState((values[name] && new Date(values[name].split('-')[1])) || null);
  const [selectedDate, setSelectedDate] = useState(values[name]);

  // hide on outside click
  useOutsideClick(dateRef, () => setIsOpened(false));

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      const dateFormate = `${moment(start).format('MM/DD/YYYY')} - ${moment(end).format('MM/DD/YYYY')}`;
      setSelectedDate(dateFormate);
      setIsOpened(false);
    }
  };

  return (
    <div className="datePicker-wrap">
      <TextBox
        name={name}
        errors={errors}
        touched={touched}
        label={label}
        placeholder={{ EN: 'Please select a date', AR: 'Please select a date' }}
        mode="text"
        value={selectedDate}
        onValueChanged={e => setFieldValue && setFieldValue(name, e.value)}
        onFocusIn={() => setIsOpened(true)}
        buttons={[
          {
            location: 'after',
            name: '',
            options: { icon: 'las la-calendar', type: 'default' },
          },
        ]}
      />
      {isOpened && (
        <div className="datePicker-container" ref={dateRef}>
          <DatePicker
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            locale={lang === 'ar' ? 'ar' : 'en'}
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerRange;

DatePickerRange.propTypes = {
  label: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
};
