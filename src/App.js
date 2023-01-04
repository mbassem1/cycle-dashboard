import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { clinics, dashboard, schedule, purchasing, components, auth, booking, patients } from 'routes/paths';
import Dashboard from 'pages/dashboard';
import Warehouses from 'pages/dashboard/pages/warehouses';
import Recieving from 'pages/dashboard/pages/recieving';
import Clinics from 'pages/clinics';
import Setting from 'pages/clinics/pages/setting';
import Schedule from 'pages/schedule';
import { ComponentsUI } from 'shared/components';
import Purchasing from 'pages/purchasing';
import ButtonsPage from 'pages/components/buttons';
import TagsPage from 'pages/components/tags';
import InputsPage from 'pages/components/inputs';
import DropDownPage from 'pages/components/dropdowns';
import CheckBoxesPage from 'pages/components/checkboxes';
import RadiosPage from 'pages/components/radios';
import CardsPage from 'pages/components/cards';
import FileUploadersPage from 'pages/components/FileUploaders';
import TestCase from 'shared/iComponents/Modal/TestCase';
import TableShowCase from 'shared/components/Table/ShowCase';
import Layout from 'layout';
import { UserContext } from 'context/user';
import Login from 'pages/auth/Login';
import ForgetPassword from 'pages/auth/ForgetPassword';
import ResetPassword from 'pages/auth/ResetPassword';
import Booking from 'pages/booking';
import Patients from 'pages/patients';
import PatientsDetails from 'pages/patients/PatientsDetails';

const App = () => {
  const { isAuthenticated } = useContext(UserContext);
  const routeGurad = page => (isAuthenticated ? page : <Navigate to={auth.login} />);

  return !isAuthenticated ? (
    <Routes>
      <Route path={auth.login} element={<Login />} />
      <Route path={auth.forgetPassword} element={<ForgetPassword />} />
      <Route path={auth.resetPassword} element={<ResetPassword />} />

      <Route path="*" element={<Navigate to={{ pathname: auth.login }} />} />
    </Routes>
  ) : (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate to={{ pathname: dashboard.homepage }} />} />
        <Route path="/shared/components" element={routeGurad(<ComponentsUI />)} />
        <Route path={dashboard.homepage} element={routeGurad(<Dashboard />)} />
        <Route path={dashboard.warehouse} element={routeGurad(<Warehouses />)} />
        <Route path={dashboard.recieving} element={routeGurad(<Recieving />)} />
        <Route path={clinics.homepage} element={routeGurad(<Clinics />)} />
        <Route path={clinics.setting} element={routeGurad(<Setting />)} />
        <Route path={schedule.homepage} element={routeGurad(<Schedule />)} />
        <Route path={purchasing.homepage} element={routeGurad(<Purchasing />)} />
        <Route path={components.homepage} element={routeGurad(<ComponentsUI />)} />
        <Route path={components.buttons} element={routeGurad(<ButtonsPage />)} />
        <Route path={components.tags} element={routeGurad(<TagsPage />)} />
        <Route path={components.inputs} element={routeGurad(<InputsPage />)} />
        <Route path={components.dropdowns} element={routeGurad(<DropDownPage />)} />
        <Route path={components.checkboxes} element={routeGurad(<CheckBoxesPage />)} />
        <Route path={components.radios} element={routeGurad(<RadiosPage />)} />
        <Route path={components.cards} element={routeGurad(<CardsPage />)} />
        <Route path={components.fileUploaders} element={routeGurad(<FileUploadersPage />)} />
        <Route path={components.modal} element={routeGurad(<TestCase />)} />
        <Route path={components.table} element={routeGurad(<TableShowCase />)} />
        <Route path={booking.homepage} element={routeGurad(<Booking />)} />
        <Route path={patients.homepage} element={routeGurad(<Patients />)} />
        <Route path={patients.patientsDetails} element={routeGurad(<PatientsDetails />)} />
      </Routes>
    </Layout>
  );
};

export default App;
