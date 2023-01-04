import React, { useState } from 'react';

import Modal from 'shared/iComponents/Modal';
import Text from 'shared/components/Text';
import Button from 'shared/components/Button/button';
import HealthStatusEdit from 'pages/patients/PatientsEdit/HealthStatusEdit';

const HealthStatus = () => {
  const [openModal, setOpenModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    disease: ['Disease Name 1', 'Disease Name 2'],
    allergy: ['Surgery Name 1', 'Surgery Name 2'],
    blood: 'A+',
  });

  return (
    <>
      {openModal && (
        <Modal
          position="top"
          header={{ EN: 'Edit Health Status', AR: 'Edit Health Status' }}
          onClose={() => setOpenModal(false)}
        >
          <HealthStatusEdit userInfo={userInfo} setUserInfo={setUserInfo} onClose={() => setOpenModal(false)} />
        </Modal>
      )}
      <div className="profile-card">
        <div className="profile-card-head d-flex align-items-center justify-content-between mb-3">
          <Text className="mb-1" value={{ EN: 'Health Status', AR: 'Health Status' }} />
          <Button
            type="gray"
            stylingMode="outlined"
            icon="la-edit"
            id="only-icon"
            width="31"
            height="31"
            onClick={() => setOpenModal(true)}
          />
        </div>
        <div className="profile-card-body">
          <div className="profile-body-item d-flex flex-wrap align-items-center justify-content-between full-row">
            <Text size="13" className="secondary-dark" value={{ EN: 'Diseases', AR: 'Diseases' }} />
            <Text size="12" value={{ EN: userInfo.disease.join(', '), AR: userInfo.disease.join(', ') }} />
          </div>
          <div className="profile-body-item d-flex flex-wrap align-items-center justify-content-between full-row">
            <Text size="13" className="secondary-dark" value={{ EN: 'Allergies', AR: 'Allergies' }} />
            <Text size="12" value={{ EN: userInfo.allergy.join(', '), AR: userInfo.allergy.join(', ') }} />
          </div>
          <div className="profile-body-item d-flex flex-wrap align-items-center justify-content-between full-row">
            <Text size="13" className="secondary-dark" value={{ EN: 'Blood Type', AR: 'Blood Type' }} />
            <Text size="12" value={{ EN: userInfo.blood, AR: userInfo.blood }} />
          </div>
        </div>
      </div>
    </>
  );
};
export default HealthStatus;
