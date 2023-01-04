/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Column } from 'devextreme-react/data-grid';
import { useNavigate, generatePath } from 'react-router-dom';

import './style.scss';
import ToolBar from 'shared/iComponents/Toolbar';
import Icon from 'shared/components/Icon';
import { DELETE_ITEM, EDIT, VIEW_DETAILS } from 'translations/translations';
import Modal from 'shared/iComponents/Modal';
import Button from 'shared/components/Button/button';
import Text from 'shared/components/Text';
import Table from 'shared/components/Table';
import { patients } from 'routes/paths';
import { PatientsContext } from 'context/patients';
import UserImage from '../../assets/images/user-img.png';
import { patientsData } from './mockup';
import PatientsCreate from './PatientsCreate';

const PrimaryTable = () => {
  const tableRef = useRef();
  const navigate = useNavigate();
  const { setIsDetailsView, showPatientCreate, setShowPatientCreate } = useContext(PatientsContext);
  const [customersList] = useState(patientsData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // actions component render
  const renderActions = gridInfo => {
    const { data, rowIndex } = gridInfo;
    const forceModalUp = rowIndex > 3;

    return (
      <ToolBar
        items={[
          {
            id: 1,
            text: <Text value={VIEW_DETAILS} size="12" />,
            icon: <Icon icon="la-eye" />,
            onClick: () => {
              setIsDetailsView(true);
              navigate(generatePath(patients.patientsDetails, { id: data.id }));
            },
          },
          {
            id: 2,
            text: <Text value={EDIT} size="12" />,
            icon: <Icon icon="la-edit" />,
            onClick: () => setShowEditModal(true),
          },
          {
            id: 3,
            text: <Text value={DELETE_ITEM} color="#FF808B" size="12" />,
            icon: <Icon icon="la-trash" color="#FF808B" />,
            onClick: () => {
              setShowDeleteModal(true);
              console.log(data);
            },
          },
        ]}
        position={`${forceModalUp ? 'top' : 'bottom'} right`}
      />
    );
  };

  // image and id render
  const renderImageWithId = gridInfo => {
    const { data } = gridInfo;
    return (
      <div className="d-flex align-items-center">
        <div
          className={`user-img ${!data.isAllSaved ? 'not-completed' : ''} `}
          style={{ backgroundImage: `url(${UserImage})` }}
        />
        <Text value={{ EN: data.id.toString(), AR: data.id.toString() }} />
      </div>
    );
  };

  // name and email render
  const renderNameWithEmail = gridInfo => {
    const { data } = gridInfo;
    return (
      <>
        <Text
          onClick={() => {
            setIsDetailsView(true);
            navigate(generatePath(patients.patientsDetails, { id: data.id }));
          }}
          value={{ EN: data.name, AR: data.name }}
          className="primary cursor-pointer"
        />
        <Text size="12" value={{ EN: data.email, AR: data.email }} />
      </>
    );
  };

  // toggle patients drawer
  useEffect(() => {
    setIsDetailsView(false);
  }, []);

  return (
    <>
      {showDeleteModal && (
        <Modal
          width="450"
          header={{ EN: 'Are you sure to delete this item?', AR: 'هل أنت متأكد من حذف هذا العنصر؟' }}
          onClose={() => setShowDeleteModal(false)}
        >
          <div className="modal-actions">
            <Button text={{ EN: 'Close', AR: 'Close' }} type="outline" onClick={() => setShowDeleteModal(false)} />
            <Button text={{ EN: 'Yes, confirm', AR: 'Yes, confirm' }} type="default" />
          </div>
        </Modal>
      )}
      {showPatientCreate && (
        <Modal
          width="768"
          position="top"
          header={{ EN: 'Add a new patient', AR: 'Add a new patient' }}
          onClose={() => setShowPatientCreate(false)}
        >
          <PatientsCreate />
        </Modal>
      )}
      {showEditModal && (
        <Modal
          width="768"
          position="top"
          header={{ EN: 'Edit a patient', AR: 'Edit a patient' }}
          onClose={() => setShowEditModal(false)}
        >
          <PatientsCreate />
        </Modal>
      )}
      <Table ref={tableRef} keyExpr="id" dataSource={customersList} pagerMode="compact">
        <Column dataField="id" caption="Image/ID" width={180} cellRender={renderImageWithId} dataType="string" />
        <Column dataField="code" minWidth={140} dataType="string" />
        <Column dataField="name" minWidth={180} cellRender={renderNameWithEmail} dataType="string" />
        <Column dataField="phone" minWidth={140} dataType="string" />
        <Column dataField="lastVisit" minWidth={140} dataType="string" />
        <Column width={80} alignment="right" cellRender={renderActions} cssClass="td-actions" />
      </Table>
    </>
  );
};

export default PrimaryTable;
