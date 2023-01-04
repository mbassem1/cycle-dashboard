import React, { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Icon from 'shared/components/Icon';
import Text from 'shared/components/Text';
import { menuTypes } from '../utils';

const SidebarItem = ({ item, type, onClick }) => {
  const { pathname } = useLocation();
  const isActive =
    type === menuTypes.MAIN_MENU
      ? pathname.includes(item.path)
      : pathname.split('/').pop() === item.path.split('/').pop();

  return (
    <li className={`sidebar-list-item ${isActive ? 'active' : ''}`} onClick={onClick} aria-hidden="true">
      <Link to={item.path}>
        <Icon icon={item.icon} color="#8181A5" size="24" />
        <Text value={item.title} size="13" />
      </Link>
    </li>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.shape({
      EN: PropTypes.string,
      AR: PropTypes.string,
    }),
  }),
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default SidebarItem;
