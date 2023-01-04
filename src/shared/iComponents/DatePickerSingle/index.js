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

const DatePickerSingle = ({
  setFieldValue,
  name,
  errors,
  touched,
  values,
  label,
  opened = false,
  withoutInput = false,
}) => {
  registerLocale('ar', ar);
  const dateRef = useRef(null);
  const { lang } = useContext(LocaleContext);
  const [isOpened, setIsOpened] = useState(opened);
  const [calendarDate, setCalendarDate] = useState((values[name] && new Date(values[name])) || new Date());
  const [selectedDate, setSelectedDate] = useState(values[name]);

  // hide on outside click
  useOutsideClick(dateRef, () => !opened && setIsOpened(false));

  const onChange = date => {
    setSelectedDate(moment(date).format('MM/DD/YYYY'));
    setCalendarDate(date);
    if (opened) {
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
  };

  return (
    <div className="datePicker-wrap">
      {!withoutInput && (
        <TextBox
          name={name}
          errors={errors}
          touched={touched}
          label={label}
          mode="text"
          value={selectedDate}
          onValueChanged={e => setFieldValue && setFieldValue(name, e.value)}
          onFocusIn={() => setIsOpened(true)}
          placeholder={{ EN: 'Please select a date', AR: 'Please select a date' }}
          buttons={[
            {
              location: 'after',
              name: '',
              options: { icon: 'las la-calendar', type: 'default' },
            },
          ]}
        />
      )}

      {isOpened && (
        <div className="datePicker-container" ref={dateRef}>
          <DatePicker selected={calendarDate} onChange={onChange} inline locale={lang === 'ar' ? 'ar' : 'en'} />
        </div>
      )}
    </div>
  );
};

export default DatePickerSingle;

DatePickerSingle.propTypes = {
  label: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  name: PropTypes.string,
  errors: PropTypes.shape({}),
  touched: PropTypes.shape({}),
  values: PropTypes.shape({}),
  setFieldValue: PropTypes.func,
  opened: PropTypes.bool,
  withoutInput: PropTypes.bool,
};
