import React, { useState } from 'react';

import Modal from 'shared/iComponents/Modal';
import Text from 'shared/components/Text';
import Button from 'shared/components/Button/button';
import ContactInfoEdit from 'pages/patients/PatientsEdit/ContactInfoEdit';

const ContactInfo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    phone: '+20 100 000 0000',
    email: 'email@email.com',
    address: 'Lorem Ipsum is simply',
  });

  return (
    <>
      {openModal && (
        <Modal
          position="top"
          header={{ EN: 'Edit Contact Info', AR: 'Edit Contact Info' }}
          onClose={() => setOpenModal(false)}
        >
          <ContactInfoEdit userInfo={userInfo} setUserInfo={setUserInfo} onClose={() => setOpenModal(false)} />
        </Modal>
      )}
      <div className="profile-card">
        <div className="profile-card-head d-flex align-items-center justify-content-between mb-3">
          <Text className="mb-1" value={{ EN: 'Contact Info', AR: 'Contact Info' }} />
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
            <Text size="13" className="secondary-dark" value={{ EN: 'Phone', AR: 'Phone' }} />
            <Text size="12" value={{ EN: userInfo.phone, AR: userInfo.phone }} />
          </div>
          <div className="profile-body-item d-flex flex-wrap align-items-center justify-content-between">
            <Text size="13" className="secondary-dark" value={{ EN: 'Email', AR: 'Email' }} />
            <Text size="12" value={{ EN: userInfo.email, AR: userInfo.email }} />
          </div>
          <div className="profile-body-item d-flex flex-wrap align-items-center justify-content-between">
            <Text size="13" className="secondary-dark" value={{ EN: 'Address', AR: 'Address' }} />
            <Text size="12" value={{ EN: userInfo.address, AR: userInfo.address }} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactInfo;
