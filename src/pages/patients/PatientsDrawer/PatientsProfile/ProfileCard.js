import React from 'react';
import PropTypes from 'prop-types';

import Button from 'shared/components/Button/button';
import Text from 'shared/components/Text';

// const title = { EN: 'Personal Info', AR: 'Personal Info' };
// const list = [
//   {
//     id: 1,
//     label: { EN: 'Name', AR: 'Name' },
//     value: { EN: 'Username', AR: 'Username' },
//   },
//   {
//     id: 2,
//     label: { EN: 'Gender', AR: 'Gender' },
//     value: { EN: 'Male', AR: 'Male' },
//   },
//   {
//     id: 3,
//     label: { EN: 'D.O.B', AR: 'D.O.B' },
//     value: { EN: 'Sep 04, 2020', AR: 'Sep 04, 2020' },
//   },
//   {
//     id: 4,
//     label: { EN: 'Age', AR: 'Age' },
//     value: { EN: '30', AR: '30' },
//   },
// ];

const ProfileCard = ({ title, list, isFull }) => (
  <div className="profile-card">
    <div className="profile-card-head d-flex align-items-center justify-content-between mb-3">
      <Text className="mb-1" value={title} />
      <Button type="gray" stylingMode="outlined" icon="la-edit" id="only-icon" width="31" height="31" />
    </div>
    <div className="profile-card-body">
      {list.map(item => (
        <div
          key={item.id}
          className={`profile-body-item d-flex flex-wrap align-items-center justify-content-between ${
            isFull ? 'full-row' : ''
          }`}
        >
          <Text size="13" className="secondary-dark" value={item.label} />
          <Text size="12" value={item.value} />
        </div>
      ))}
    </div>
  </div>
);

ProfileCard.propTypes = {
  title: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.shape({
        EN: PropTypes.string,
        AR: PropTypes.string,
      }),
      value: PropTypes.shape({
        EN: PropTypes.string,
        AR: PropTypes.string,
      }),
    }),
  ),
  isFull: PropTypes.bool,
};

export default ProfileCard;
