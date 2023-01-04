import React, { useState } from 'react';

import Button from 'shared/components/Button/button';
import Text from 'shared/components/Text';
import Modal from 'shared/iComponents/Modal';
import NotifyModal from 'shared/iComponents/Modal/shared/NotifyModal';
import UserPassIcon from '../../../../assets/icons/user_pass_icon.svg';
import ErrorIcon from '../../../../assets/icons/error_icon.svg';

const TestCase = () => {
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [modalThree, setModalThree] = useState(false);

  return (
    <div style={{ height: '1500px' }}>
      <button onClick={() => setModalOne(true)} type="button">
        Top position
      </button>
      <button onClick={() => setModalTwo(true)} type="button">
        Center position
      </button>
      <button onClick={() => setModalThree(true)} type="button">
        Center position 2
      </button>
      {modalOne && (
        <Modal position="top" header={{ EN: 'Modal header', AR: 'Modal header' }} onClose={() => setModalOne(false)}>
          <Text value={{ EN: 'Content', AR: 'Content' }} />
        </Modal>
      )}

      {modalTwo && (
        <Modal width="414" position="center" hideCloseIcon onClose={() => setModalTwo(false)}>
          <NotifyModal
            padding="16px 0"
            icon={<img src={UserPassIcon} alt="User Password Icon" />}
            body={
              <Text
                value={{ EN: 'Your password has been changed sucessfully', AR: 'تم تغيير كلمة المرور الخاصة بك بنجاح' }}
                color="#1C1D21"
              />
            }
            action={<Button text={{ EN: 'Done', AR: 'تم ' }} onClick={() => setModalTwo(false)} />}
          />
        </Modal>
      )}
      {modalThree && (
        <Modal width="414" position="center" hideCloseIcon onClose={() => setModalThree(false)}>
          <NotifyModal
            padding="16px 0"
            icon={<img src={ErrorIcon} alt="Error Icon" />}
            body={
              <Text value={{ EN: 'This Item can not be removed', AR: 'لا يمكن إزالة هذا العنصر' }} color="#1C1D21" />
            }
            action={<Button text={{ EN: 'Done', AR: 'تم ' }} onClick={() => setModalThree(false)} />}
          />
        </Modal>
      )}
    </div>
  );
};
export default TestCase;
