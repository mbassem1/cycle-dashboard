import React from 'react';
import { useNavigate, generatePath } from 'react-router-dom';

import './style.scss';
import Text from 'shared/components/Text';
import Icon from 'shared/components/Icon';
import { patientsData } from 'pages/patients/mockup';
import { patients } from 'routes/paths';
import UserImage from '../../../../assets/images/user-img.png';

const PatientsFiles = ({ hideClose = false }) => {
  const navigate = useNavigate();

  return (
    <ul className="patients-files">
      {patientsData.map(item => (
        <li
          onClick={() => navigate(generatePath(patients.patientsDetails, { id: item.id }))}
          key={item.id}
          className="d-flex align-items-center justify-content-between"
          aria-hidden
        >
          <div className="d-flex align-items-center">
            <div className="patients-files-img" style={{ backgroundImage: `url(${UserImage})` }} />
            <div>
              <Text size="13" value={{ EN: item.name, AR: item.name }} />
              <Text size="11" className="secondary-dark" value={{ EN: item.id, AR: item.id }} />
            </div>
          </div>
          {!hideClose && <Icon icon="la-times" color="#FF808B" />}
        </li>
      ))}
    </ul>
  );
};
export default PatientsFiles;
