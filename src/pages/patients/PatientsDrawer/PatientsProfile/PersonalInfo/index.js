/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import PersonalInfoEdit from 'pages/patients/PatientsEdit/PersonalInfoEdit';
import Modal from 'shared/iComponents/Modal';
import Text from 'shared/components/Text';
import Button from 'shared/components/Button/button';

const PersonalInfo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nameEn: 'Username',
    nameAr: 'Username',
    age: 30,
    gender: 'Male',
    birthDate: '12/5/2022',
  });

  return (
    <>
      {openModal && (
        <Modal
          position="top"
          header={{ EN: 'Edit Personal Info', AR: 'Edit Personal Info' }}
          onClose={() => setOpenModal(false)}
        >
          <PersonalInfoEdit userInfo={userInfo} setUserInfo={setUserInfo} onClose={() => setOpenModal(false)} />
        </Modal>
      )}
      <div className="profile-card">
        <div className="profile-card-head d-flex align-items-center justify-content-between mb-3">
          <Text className="mb-1" value={{ EN: 'Personal Info', AR: 'Personal Info' }} />
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
            <Text size="13" className="secondary-dark" value={{ EN: 'Name', AR: 'Name' }} />
            <Text size="12" value={{ EN: userInfo.nameEn, AR: userInfo.nameAr }} />
          </div>
          <div className="profile-body-item d-flex flex-wrap align-items-center justify-content-between">
            <Text size="13" className="secondary-dark" value={{ EN: 'gender', AR: 'gender' }} />
            <Text size="12" value={{ EN: userInfo.gender, AR: userInfo.gender }} />
          </div>
          <div className="profile-body-item d-flex flex-wrap align-items-center justify-content-between">
            <Text size="13" className="secondary-dark" value={{ EN: 'D.O.B', AR: 'D.O.B' }} />
            <Text size="12" value={{ EN: userInfo.birthDate, AR: userInfo.birthDate }} />
          </div>
          <div className="profile-body-item d-flex flex-wrap align-items-center justify-content-between">
            <Text size="13" className="secondary-dark" value={{ EN: 'Age', AR: 'Age' }} />
            <Text size="12" value={{ EN: userInfo.age, AR: userInfo.age }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
