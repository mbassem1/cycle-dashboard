import React from 'react';

import './styles.scss';

const ChildHeader = data => {
  const { title, date = 'Feb 21, 2022' } = data;
  return (
    <div className="title-wrapper">
      <p>{title}</p>
      <p className="date">{date}</p>
    </div>
  );
};

export default ChildHeader;
