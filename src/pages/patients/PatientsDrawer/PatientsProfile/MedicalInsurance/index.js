import React, { useState } from 'react';

import Modal from 'shared/iComponents/Modal';
import Text from 'shared/components/Text';
import Button from 'shared/components/Button/button';
import MedicalInsuranceEdit from 'pages/patients/PatientsEdit/MedicalInsuranceEdit';

const MedicalInsurance = () => {
  const [openModal, setOpenModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    providerName: 'AXA',
    providerId: '8415422458',
    membership: 'Gold',
    expiryDate: '12/5/2022',
    medicalId: '',
  });

  return (
    <>
      {openModal && (
        <Modal
          position="top"
          header={{ EN: 'Edit Contact Info', AR: 'Edit Contact Info' }}
          onClose={() => setOpenModal(false)}
        >
          <MedicalInsuranceEdit userInfo={userInfo} setUserInfo={setUserInfo} onClose={() => setOpenModal(false)} />
        </Modal>
      )}
      <div className="profile-card">
        <div className="profile-card-head d-flex align-items-center justify-content-between mb-3">
          <Text className="mb-1" value={{ EN: 'Medical Insurance', AR: 'Medical Insurance' }} />
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
          <div className="profile-body-item d-flex flex-wrap align-items-center justify-content-between">
            <Text size="13" className="secondary-dark" value={{ EN: 'Provider', AR: 'Provider' }} />
            <Text size="12" value={{ EN: userInfo.providerName, AR: userInfo.providerName }} />
          </div>
          <div className="profile-body-item d-flex flex-wrap align-items-center justify-content-between">
            <Text size="13" className="secondary-dark" value={{ EN: 'ID', AR: 'ID' }} />
            <Text size="12" value={{ EN: userInfo.providerId, AR: userInfo.providerId }} />
          </div>
          <div className="profile-body-item d-flex flex-wrap align-items-center justify-content-between">
            <Text size="13" className="secondary-dark" value={{ EN: 'Membership type', AR: 'Membership type' }} />
            <Text size="12" value={{ EN: userInfo.membership, AR: userInfo.membership }} />
          </div>
          <div className="profile-body-item d-flex flex-wrap align-items-center justify-content-between">
            <Text size="13" className="secondary-dark" value={{ EN: 'Expiry Date', AR: 'Expiry Date' }} />
            <Text size="12" value={{ EN: userInfo.expiryDate, AR: userInfo.expiryDate }} />
          </div>
        </div>
      </div>
    </>
  );
};
export default MedicalInsurance;
