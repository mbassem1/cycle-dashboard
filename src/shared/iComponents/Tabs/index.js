import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Text from 'shared/components/Text';
import Icon from '../../components/Icon';

// expected items
// [
//     {
//       id: 1,
//       text: DASHBOARD (imported from translations),
//       icon: 'la la-sun',
//       content: could be anything ( string, element, component ),
//     },
//     {
//       id: 2,
//       text: DASHBOARD (imported from translations),
//       icon: 'la la-sun',
//       content: could be anything ( string, element, component ),
//     },
// ];

// expoected types
// ( primary ) ( outline )

const CycleTabsItem = ({ item, selectedItem, setSelectedItem }) => {
  const { id, text, icon } = item;
  const isActive = id === selectedItem.id;
  const handleItemClick = tabItem => {
    setSelectedItem(tabItem);
  };
  return (
    <li
      onClick={() => handleItemClick(item)}
      className={`tabs-list-item ${isActive ? 'active' : ''}`}
      aria-hidden="true"
    >
      {icon && <Icon icon={icon} color="#5E81F4" />}
      <Text value={text} size="14" />
    </li>
  );
};

CycleTabsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.shape({
      EN: PropTypes.string,
      AR: PropTypes.string,
    }),
    icon: PropTypes.string,
  }),
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
  }),
  setSelectedItem: PropTypes.func,
};

const CycleTabs = ({ items, type, className = '' }) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className={`tabs-contain ${className}`}>
      <ul className={`tabs-list ${type}`}>
        {items.map(item => (
          <CycleTabsItem key={item.id} item={item} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        ))}
      </ul>
      <div className="tabs-content">{selectedItem.content}</div>
    </div>
  );
};

CycleTabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
  ).isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CycleTabs;
