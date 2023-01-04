/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './styles.scss';

const ChildItem = data => {
  const dataArr = Object.keys(data).map(key => ({ key, value: data[key] }));

  return (
    <div className="content-wrapper">
      <div className="actions">
        <span className="dots" />
      </div>
      {dataArr.map(item => (
        <div key={item.key} className="item-wrapper">
          <p className="head">{item.key}</p>
          <p className="content">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ChildItem;
