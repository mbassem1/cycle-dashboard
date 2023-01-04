import { LocaleContext } from 'context/locale';
import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import Button from 'shared/components/Button/button';
import TagsBox from 'shared/components/TagsBox/tagsBox';
import DatePickerSingle from 'shared/iComponents/DatePickerSingle';
import DrawerModal from 'shared/iComponents/DrawerModal';
import {
  BOOKING_SEARCH,
  CALENDAR,
  NEAREST_AVAILABLE_DATE,
  PATIENTS,
  SELECT_A_CLINIC_PLEASE,
  SELECT_A_DOCTOR_PLEASE,
} from 'translations/translations';
import SearchPatient from '../SearchPatient';
import validations from './formSchems';
import './styles.scss';

const BookingLeftSide = () => {
  const [isDrwarOpen] = useState(false);
  const { translate } = useContext(LocaleContext);

  const initialValues = {
    doctors: [],
    clinics: [],
    bookingDate: '',
  };

  const handleFormSubmit = values => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={values => handleFormSubmit(values)} validationSchema={validations}>
      {({ setFieldValue, errors, touched, values }) => (
        <Form>
          <>
            <div className="booking-wrapper">
              <div className="booking-header">
                <div>
                  <div className="booking-header__title">{translate(BOOKING_SEARCH)}</div>
                  <div className="booking-header__subtitle">{`876 ${translate(PATIENTS)}`}</div>
                </div>
                {/* <Button
            type="gray"
            stylingMode="outlined"
            icon="la-plus"
            id="only-icon"
            width="36"
            height="36"
            onClick={() => setIsDrwarOpen(!isDrwarOpen)}
          /> */}
              </div>
              <div className="booking-body">
                <div className="row mt-4">
                  <div className="col-12">
                    <TagsBox
                      name="doctors"
                      placeholder={SELECT_A_DOCTOR_PLEASE}
                      label={{ EN: 'Doctor', AR: 'الطبيب' }}
                      items={['Doctor Name 1', 'Doctor Name 2', 'Doctor Name 3', 'Doctor Name 4']}
                      errors={errors}
                      touched={touched}
                      setFieldValue={setFieldValue}
                      values={values}
                    />
                  </div>
                </div>
                <div className="row mt-4 mb-4">
                  <div className="col-12">
                    <TagsBox
                      placeholder={SELECT_A_CLINIC_PLEASE}
                      name="clinics"
                      label={{ EN: 'Clinic', AR: 'العيادة' }}
                      items={['Clinic Name 1', 'Clinic Name 2', 'Clinic Name 3', 'Clinic Name 4']}
                      errors={errors}
                      touched={touched}
                      setFieldValue={setFieldValue}
                      values={values}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Button width="100%" type="normal">
                      {translate(NEAREST_AVAILABLE_DATE)}
                    </Button>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 ">
                    <p className="input-label">{translate(CALENDAR)}</p>
                    <DatePickerSingle
                      name="bookaingDate"
                      opened
                      withoutInput
                      errors={errors}
                      touched={touched}
                      setFieldValue={setFieldValue}
                      values={values}
                      label={CALENDAR}
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <Button width="100%">Search</Button>
                  </div>
                </div>
              </div>
            </div>
            {isDrwarOpen && (
              <DrawerModal widthAttr={682}>
                <SearchPatient />
              </DrawerModal>
            )}
          </>
        </Form>
      )}
    </Formik>
  );
};

export default BookingLeftSide;
