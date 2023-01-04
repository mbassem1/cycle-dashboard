import React from 'react';
import CheckBox from 'shared/components/checkBox/checkBox';
import { ACTIVE, DISABLE, SUCCESS } from 'translations/translations';

const CheckBoxesPage = () => (
  <div className="container-fluid bg-white pb-5">
    <div className="row mt-4 mb-4">
      <div className="col-6">
        <div className="row mt-4">
          <h3>Check Box</h3>
          <div className="col-sm-6 mt-4">
            <CheckBox text={ACTIVE} required />
          </div>
          <div className="col-sm-6 mt-4">
            <CheckBox text={DISABLE} disabled />
          </div>
          <div className="col-sm-6 mt-4">
            <CheckBox text={SUCCESS} className="success" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CheckBoxesPage;
