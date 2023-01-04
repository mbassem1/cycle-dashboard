import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PatientsContext } from 'context/patients';
import CustomizedSlider from 'pages/components/stepperSlider';
import Invoices from './Invoices';
import Orders from './Orders';
import Notes from './Notes';
import Filter from './Filter';

const PatientsDetails = () => {
  const { id } = useParams();
  const { setIsDetailsView } = useContext(PatientsContext);

  console.log('id', id);

  // toggle patients drawer
  useEffect(() => {
    setIsDetailsView(true);
  }, []);

  return (
    <div className="card-contain">
      <div className="row">
        <div className="col-md-8 mb-4 mt-4">
          <Filter />
        </div>
        <div className="col-md-4 mb-4 mt-4">
          <CustomizedSlider />
        </div>
        <div className="col-lg-6 col-md-12 mb-3">
          <Notes />
        </div>
        <div className="col-lg-6 col-md-12 mb-3">
          <div className="row">
            <div className="col-md-12 mb-3">
              <Orders />
            </div>
            <div className="col-md-12">
              <Invoices />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsDetails;
