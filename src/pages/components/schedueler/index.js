import React, { useContext, useEffect, useRef, useState } from 'react';
import DXScheduler, { Editing, Resource, View } from 'devextreme-react/scheduler';
import { LocaleContext } from 'context/locale';
import { ContextMenu } from 'devextreme-react';
import {
  ADD_APPOINTMENT,
  ARE_YOU_SURE,
  ATTEDNED_PATIENT,
  BOOKED_PATIENT,
  DAY,
  LATE_PATIENT,
  SHOW_AV_SLOTS,
  UNATTENDED_PATIENT,
  WEEK,
} from 'translations/translations';
import Query from 'devextreme/data/query';

import Modal from 'shared/iComponents/Modal';
import { DrawerContext } from 'context/drawer';
import Button from 'shared/components/Button/button';
import Toggle from 'shared/components/toggle/toggle';
import Appointment from './Appointment';
import { data, patientData, clinicsData } from './data';
import './styles.scss';
import BookingForm from './BookingForm';
import AppointmentMenuTemplate from './AppointmentMenuTemplate';

const currentDate = new Date(2021, 3, 27);
const groups = ['clinicId'];

const Scheduler = ({ ...props }) => {
  const getPatientById = id => Query(patientData).filter(['id', id]).toArray()[0];
  const appointmentClassName = '.dx-scheduler-appointment';
  const { lang, translate } = useContext(LocaleContext);
  const { drawerVisible } = useContext(DrawerContext);
  const scheduler = useRef();
  const [modal, setModal] = useState(false);
  const [contextMenuItems, setContextMenuItems] = useState([]);
  const [target] = useState(appointmentClassName);
  const [selectedPatient, setSelectedPatient] = useState({});
  const [currentModal, setCurrentModal] = useState('bookingForm');
  const [currentAppointment, setCurrentAppointment] = useState({});

  const handleOnAppointemntClick = e => {
    const schedulerState = scheduler.current.instance;
    setModal(true);
    setCurrentModal('bookingForm');
    setSelectedPatient(getPatientById(e.appointmentData.patientId));

    schedulerState.hideAppointmentTooltip();
  };

  const onAppointmentContextMenu = ({ appointmentData }) => {
    setCurrentAppointment(appointmentData);
    setContextMenuItems([
      {
        text: 'Attend',
        icon: 'la-walking',
        color: '',
        onItemClick: () => null,
      },
      {
        text: 'Delete',
        icon: 'la-trash-alt',
        color: 'red',
        onItemClick: () => {
          setModal(true);
          setCurrentModal('deleteAppointment');
        },
      },
    ]);
  };

  const onDeletedAppointment = () => {
    const schedulerState = scheduler.current.instance;
    schedulerState.deleteAppointment(currentAppointment);
    setModal(false);
  };
  const onContextMenuItemClick = e => {
    e.itemData.onItemClick(e);
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log({ selectedPatient });
  }, [selectedPatient]);

  useEffect(() => {
    if (scheduler) {
      setTimeout(() => {
        scheduler.current.instance.repaint();
      }, [300]);
    }
  }, [scheduler, drawerVisible, lang]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="avSlots">
            <div className="d-flex align-items-center justify-content-between">
              <Toggle label={SHOW_AV_SLOTS} />
            </div>
          </div>
        </div>
      </div>
      <DXScheduler
        ref={scheduler}
        dataSource={data}
        defaultCurrentView="day"
        defaultCurrentDate={currentDate}
        groups={groups}
        height="75vh"
        firstDayOfWeek={0}
        startDayHour={9}
        endDayHour={23}
        showAllDayPanel={false}
        crossScrollingEnabled
        cellDuration={10}
        appointmentComponent={Appointment}
        rtlEnabled={lang === 'ar'}
        // onAppointmentClick={handleOnAppointemntClick}
        onCellClick={handleOnAppointemntClick}
        onAppointmentContextMenu={onAppointmentContextMenu}
        useDropDownViewSwitcher={false}
        {...props}
      >
        <View type="day" name={translate(DAY)} allDayPanelMode="all" />
        <View type="week" name={translate(WEEK)} allDayPanelMode="all" />
        {modal && (
          <Modal
            width="622"
            position="center"
            onClose={() => setModal(false)}
            header={currentModal === 'bookingForm' ? ADD_APPOINTMENT : ARE_YOU_SURE}
          >
            {currentModal === 'bookingForm' ? (
              <BookingForm selectedPatient={selectedPatient} />
            ) : (
              <div className="modal-actions">
                <Button text={{ EN: 'Close', AR: 'Close' }} type="outline" onClick={() => setModal(false)} />
                <Button
                  text={{ EN: 'Yes, confirm', AR: 'Yes, confirm' }}
                  type="default"
                  onClick={onDeletedAppointment}
                />
              </div>
            )}
          </Modal>
        )}

        <Editing allowAdding />
        <Resource dataSource={patientData} fieldExpr="patientId" useColorAsDefault />
        <Resource dataSource={clinicsData} fieldExpr="clinicId" />
      </DXScheduler>
      <ContextMenu
        dataSource={contextMenuItems}
        width={200}
        target={target}
        onItemClick={onContextMenuItemClick}
        itemRender={AppointmentMenuTemplate}
      />
      <div className="colors-container">
        <div className="single-color">
          <div className="color primary" />
          <span>{translate(BOOKED_PATIENT)}</span>
        </div>
        <div className="single-color">
          <div className="color succsess" />
          <span>{translate(ATTEDNED_PATIENT)}</span>
        </div>
        <div className="single-color">
          <div className="color warn" />
          <span>{translate(LATE_PATIENT)}</span>
        </div>
        <div className="single-color">
          <div className="color danger" />
          <span>{translate(UNATTENDED_PATIENT)}</span>
        </div>
      </div>
    </>
  );
};

export default Scheduler;
