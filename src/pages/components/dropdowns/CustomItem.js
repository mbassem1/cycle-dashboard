import React from 'react';
import PropTypes from 'prop-types';

const CustomItem = ({ data }) => {
  const { name, icon } = data;
  return (
    <div className="d-flex  align-items-center gap-2">
      <i className={`las ${icon}`} />
      <div className="">{name}</div>
    </div>
  );
};

export default CustomItem;

CustomItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
  }),
};
