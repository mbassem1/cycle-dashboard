import React, { useState, createContext } from 'react';

const PatientsContext = createContext();

const PatientsProvider = ({ children }) => {
  const [ isDetailedView, setIsDetailsView ] = useState(false);
  const [ showPatientCreate, setShowPatientCreate ] = useState(false);

  return <PatientsContext.Provider value={{ isDetailedView, setIsDetailsView, showPatientCreate, setShowPatientCreate }}>{children}</PatientsContext.Provider>;
};

export { PatientsProvider, PatientsContext };
