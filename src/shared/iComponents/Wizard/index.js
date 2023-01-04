import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Icon from 'shared/components/Icon';
import Text from 'shared/components/Text';

// expected items
// const items = [
//   {
//     id: 1,
//     title: { EN: 'Step 1', AR: 'خطوة 1' },
//     icon: 'la-sun',
//   },
//   {
//     id: 2,
//     title: { EN: 'Step 2', AR: 'خطوة 2' },
//     icon: 'la-sun',
//   },
//   {
//     id: 3,
//     title: { EN: 'Step 3', AR: 'خطوة 3' },
//     icon: 'la-sun',
//   },
//   {
//     id: 4,
//     title: { EN: 'Step 4', AR: 'خطوة 4' },
//     icon: 'la-sun',
//   },
// ]

// expected completed steps
// array of numbers, each number is related to item id
// completedSteps = [1]

const WizardItem = ({ item, completedSteps }) => {
  const isCompleted = completedSteps.includes(item.id);

  return (
    <li className={`wizard-item ${isCompleted ? 'completed' : ''}`}>
      <div className="wizard-icon">
        <Icon icon={item.icon} />
      </div>
      <div className="wizard-text">
        <Text value={item.title} />
      </div>
    </li>
  );
};

WizardItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.shape({
      EN: PropTypes.string,
      AR: PropTypes.string,
    }),
    icon: PropTypes.string,
  }).isRequired,
  completedSteps: PropTypes.arrayOf(PropTypes.number),
};

const Wizard = ({ items, completedSteps }) => (
  <div className="wizard-contain mt-4">
    <ul className="wizard-list">
      {items.map(item => (
        <WizardItem key={item.id} item={item} completedSteps={completedSteps} />
      ))}
    </ul>
  </div>
);

Wizard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.shape({
        EN: PropTypes.string,
        AR: PropTypes.string,
      }),
      icon: PropTypes.string,
    }),
  ).isRequired,
  completedSteps: PropTypes.arrayOf(PropTypes.number),
};

export default Wizard;
