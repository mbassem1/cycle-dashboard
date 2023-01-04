import React from 'react';
import Datebox from 'devextreme-react/date-box';
import './style.scss';

const DataPicker = ({ ...props }) => {
  const { fieldTitle, isRtl } = props;
  return (
    <div className="field">
      <div className="field-label">{fieldTitle}</div>
      <div className="field-value">
        <Datebox type="date" defaultValue={new Date()} className="date-box-wrapper" rtlEnabled={isRtl} {...props} />
      </div>
    </div>
  );
};

export default DataPicker;
