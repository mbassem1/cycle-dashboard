import React from 'react';
import Query from 'devextreme/data/query';
import { formatDate } from 'devextreme/localization';
import { patientData } from '../data';

function getMovieById(id) {
  return Query(patientData).filter(['id', id]).toArray()[0];
}

const Appointment = model => {
  const { data } = model;
  const { targetedAppointmentData } = data;
  const singlePatient = getMovieById(targetedAppointmentData.patientId) || {};
  const { patient } = singlePatient;

  return (
    <div className="showtime-preview">
      <div> {patient}</div>

      <div>
        {formatDate(targetedAppointmentData.displayStartDate, 'shortTime')}

        {formatDate(targetedAppointmentData.displayEndDate, 'shortTime')}
      </div>
    </div>
  );
};

export default Appointment;
