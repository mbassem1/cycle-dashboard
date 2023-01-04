import React, { useState } from 'react';
import Query from 'devextreme/data/query';

import { patientData } from '../data';

const getMovieById = id => Query(patientData).filter(['id', id]).toArray()[0];
const AppointmentTooltip = props => {
  const { data } = props;
  const { appointmentData } = data;
  const { patientId } = appointmentData;

  const [singlePatient] = useState(getMovieById(patientId) || {});
  const { patient, doctor, status } = singlePatient;

  return (
    <div className="movie-tooltip">
      <div className="movie-info">
        <div>Patient: {patient}</div>
        <div>Doctor: {doctor}</div>
        <div>Status: {status} </div>
      </div>
    </div>
  );
};

export default AppointmentTooltip;
