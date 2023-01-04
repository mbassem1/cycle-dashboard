/* eslint-disable react/react-in-jsx-scope */
import PatientsDrawer from 'pages/patients/PatientsDrawer';
import BookingLeftSide from 'pages/booking/BookingLeftSide';
import MainView from 'pages/purchasing/MainView';
import { clinics, dashboard, purchasing, schedule, components, booking, patients } from 'routes/paths';
import {
  BOOKING,
  BUTTONS,
  CARDS,
  CHECKBOXES,
  CLINICS,
  COMPONENTS,
  DASHBOARD,
  DROPDOWNS,
  FILE_UPLOADER,
  INPUTS,
  PATIENTS,
  PURCHASING,
  RADIOS,
  RECIEVING,
  SCHEDULE,
  SETTINGS,
  TABLE,
  TAGS,
  WAREHOUSES,
} from 'translations/translations';

export const items = [
  {
    id: 1,
    title: DASHBOARD,
    icon: 'la-tachometer-alt',
    path: dashboard.homepage,
    children: [
      {
        id: 1,
        title: DASHBOARD,
        icon: 'la-tachometer-alt',
        path: dashboard.homepage,
      },
      {
        id: 2,
        title: WAREHOUSES,
        icon: 'la-warehouse',
        path: dashboard.warehouse,
      },
      {
        id: 3,
        title: RECIEVING,
        icon: 'la-truck',
        path: dashboard.recieving,
      },
    ],
  },
  {
    id: 2,
    title: CLINICS,
    icon: 'la-star-of-life',
    path: clinics.homepage,
    children: [
      {
        id: 1,
        title: DASHBOARD,
        icon: 'la-tachometer-alt',
        path: clinics.homepage,
      },
      {
        id: 2,
        title: SETTINGS,
        icon: 'la-cog',
        path: clinics.setting,
      },
    ],
  },
  {
    id: 3,
    title: SCHEDULE,
    icon: 'la-calendar-check',
    path: schedule.homepage,
  },
  {
    id: 4,
    title: PURCHASING,
    icon: 'la-coins',
    path: purchasing.homepage,
    component: <MainView />,
  },

  {
    id: 5,
    title: COMPONENTS,
    icon: 'la-star-of-life',
    path: components.homepage,
    children: [
      {
        id: 1,
        title: BUTTONS,
        icon: 'la-tachometer-alt',
        path: components.buttons,
      },
      {
        id: 2,
        title: TAGS,
        icon: 'la-warehouse',
        path: components.tags,
      },
      {
        id: 3,
        title: INPUTS,
        icon: 'la-truck',
        path: components.inputs,
      },
      {
        id: 4,
        title: DROPDOWNS,
        icon: 'la-calendar-check',
        path: components.dropdowns,
      },
      {
        id: 5,
        title: CHECKBOXES,
        icon: 'la-coins',
        path: components.checkboxes,
      },
      {
        id: 6,
        title: RADIOS,
        icon: 'la-star-of-life',
        path: components.radios,
      },

      {
        id: 7,
        title: CARDS,
        icon: 'la-calendar',
        path: components.cards,
      },
      {
        id: 8,
        title: { EN: 'Modal', AR: 'Modal' },
        icon: 'la-calendar',
        path: components.modal,
      },
      {
        id: 9,
        title: FILE_UPLOADER,
        icon: 'la-coins',
        path: components.fileUploaders,
      },
      {
        id: 10,
        title: TABLE,
        icon: 'la-table',
        path: components.table,
      },
    ],
  },
  {
    id: 6,
    title: BOOKING,
    icon: 'la-calendar-check',
    path: booking.homepage,
    component: <BookingLeftSide />,
  },
  {
    id: 7,
    title: PATIENTS,
    icon: 'la-user-friends',
    path: patients.homepage,
    component: <PatientsDrawer />,
  },
];

export const filteredItem = path => {
  const data = items.find(singleItem => singleItem.path.split('/')[1] === path.split('/')[1]);
  return data;
};

export const menuTypes = {
  MAIN_MENU: 'main-menu',
  SUB_MENU: 'sub-menu',
};
