/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import Button from 'shared/components/Button/button';
import Text from 'shared/components/Text';
import Modal from 'shared/iComponents/Modal';
import ToolBar from 'shared/iComponents/Toolbar';
import { toolBarTypes } from 'shared/iComponents/Toolbar/utils';
import UserImage from '../../../../assets/images/user-img.png';
import PatientsFiles from '../PatientsFiles';
import ContactInfo from './ContactInfo';
import HealthStatus from './HealthStatus';
import MedicalInsurance from './MedicalInsurance';
import PatientSearch from './PatientSearch';
import PersonalInfo from './PersonalInfo';

import './style.scss';

const PatientsProfile = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && (
        <Modal
          position="top"
          header={{ EN: 'Search for patient', AR: 'Search for patient' }}
          onClose={() => setOpenModal(false)}
        >
          <PatientSearch onClose={() => setOpenModal(false)} />
        </Modal>
      )}
      <div className="patients-search">
        <div className="patients-search-head d-flex align-items-center justify-content-between flex-wrap">
          <div className="d-flex align-items-center mb-1">
            <div className="patients-files-img" style={{ backgroundImage: `url(${UserImage})` }} />
            <div>
              <Text value={{ EN: 'Username', AR: 'Username' }} />
              <Text size="12" className="secondary-dark" value={{ EN: 'ID: 123', AR: 'ID: 123' }} />
            </div>
          </div>
          <div className="d-flex align-items-center mb-1">
            <ToolBar
              isTogglerButton={false}
              position="bottom right"
              TogglerActionText={<Text value={{ EN: 'Patients', AR: 'Patients' }} size="12" />}
              component={<PatientsFiles />}
              type={toolBarTypes.CONTENT}
              minWidth="300"
            />
            <div>
              <Button
                type="gray"
                stylingMode="outlined"
                icon="la-plus"
                id="only-icon"
                width="36"
                height="36"
                onClick={() => setOpenModal(true)}
              />
            </div>
          </div>
        </div>
        <div className="patients-search-body">
          <PersonalInfo />

          <ContactInfo />

          <HealthStatus />

          <MedicalInsurance />
        </div>
      </div>
    </>
  );
};

export default PatientsProfile;
