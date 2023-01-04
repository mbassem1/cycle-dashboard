import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import './styles.scss';
import TextBox from 'shared/components/TextField/textField';
import { BOOKING_MULTI, NOTE_OPTIONAL, PATIENT_NAME, PATIENT_PHONE, SAVE } from 'translations/translations';
import Button from 'shared/components/Button/button';
import { LocaleContext } from 'context/locale';
import DatePickerSingle from 'shared/iComponents/DatePickerSingle';
import bookingFormSchema from './data';
import AvailableSlots from './AvailableSlots';

const BookingForm = ({ selectedPatient }) => {
  const { patient, note, phone } = selectedPatient;

  const { translate } = useContext(LocaleContext);
  const initialValues = {
    name: patient || '',
    phone: phone || '',
    note: note || '',
  };

  const handleFormSubmit = values => {
    // eslint-disable-next-line no-console
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => handleFormSubmit(values)}
      validationSchema={bookingFormSchema}
    >
      {({ setFieldValue, errors, touched, values }) => (
        <Form>
          <div className="booking-form">
            <div className="row mt-4 mb-3">
              <div className="col-6">
                <TextBox
                  label={PATIENT_NAME}
                  name="name"
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  values={values}
                  buttons={[
                    {
                      location: 'after',
                      name: '',
                      options: { icon: 'las la-address-card', type: 'default' },
                    },
                  ]}
                />
              </div>
              <div className="col-6 ">
                <TextBox
                  label={PATIENT_PHONE}
                  name="phone"
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  values={values}
                  buttons={[
                    {
                      location: 'after',
                      name: '',
                      options: { icon: 'las la-phone', type: 'default' },
                    },
                  ]}
                />
              </div>
            </div>

            <div className="row mt-4 mb-3">
              <div className="col-12">
                <TextBox
                  label={NOTE_OPTIONAL}
                  name="note"
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  values={values}
                  buttons={[
                    {
                      location: 'after',
                      name: '',
                      options: { icon: 'las la-microphone', type: 'default' },
                    },
                  ]}
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12">
                <div className="booking-form__title">{translate(BOOKING_MULTI)}</div>
              </div>
              <div className="col-7">
                <DatePickerSingle
                  name="birthDate"
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  values={values}
                  opened
                  withoutInput
                />
              </div>
              <div className="col-5">
                <AvailableSlots />
              </div>
            </div>
            <div className="row mt-4 mb-3">
              <div className="col-12 d-flex justify-content-end">
                <Button text={SAVE} useSubmitBehavior />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;

BookingForm.propTypes = {
  selectedPatient: PropTypes.shape({
    patient: PropTypes.string,
    note: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};
