import React, { useContext } from 'react';

import { PatientsContext } from 'context/patients';
import PatientsProfile from './PatientsProfile';
import PatientsSearch from './PatientsSearch';

const PatientsDrawer = () => {
  const { isDetailedView } = useContext(PatientsContext);

  return isDetailedView ? <PatientsProfile /> : <PatientsSearch />;
};

export default PatientsDrawer;
