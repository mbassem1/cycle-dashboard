import React from 'react';

import './style.scss';
import Text from 'shared/components/Text';

const Filter = () => {
  console.log('Filter');
  return (
    <div className="tabs-contain filter-tabs">
      <ul className="tabs-list primary">
        <li className="tabs-list-item active" aria-hidden>
          <Text value={{ EN: 'All', AR: 'All' }} size="14" />
        </li>
        <li className="tabs-list-item" aria-hidden>
          <Text value={{ EN: 'UROLOGY', AR: 'UROLOGY' }} size="14" />
        </li>
        <li className="tabs-list-item" aria-hidden>
          <Text value={{ EN: 'ENT', AR: 'ENT' }} size="14" />
        </li>
        <li className="tabs-list-item" aria-hidden>
          <Text value={{ EN: 'DENTAL', AR: 'DENTAL' }} size="14" />
        </li>
        <li className="tabs-list-item" aria-hidden>
          <Text value={{ EN: 'SURGERY', AR: 'SURGERY' }} size="14" />
        </li>
        <li className="tabs-list-item" aria-hidden>
          <Text value={{ EN: 'CLINIC', AR: 'CLINIC' }} size="14" />
        </li>
        <li className="tabs-list-item" aria-hidden>
          <Text value={{ EN: 'DENTAL', AR: 'DENTAL' }} size="14" />
        </li>
        <li className="tabs-list-item" aria-hidden>
          <Text value={{ EN: 'SURGERY', AR: 'SURGERY' }} size="14" />
        </li>
        <li className="tabs-list-item" aria-hidden>
          <Text value={{ EN: 'CLINIC', AR: 'CLINIC' }} size="14" />
        </li>
      </ul>
    </div>
  );
};
export default Filter;
