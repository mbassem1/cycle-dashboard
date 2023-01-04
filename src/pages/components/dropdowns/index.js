import React from 'react';
import SelectBox from 'shared/components/selectBox/selectBox';
import TextBox from 'shared/components/TextField/textField';
import { SELECT, USER, USER_WITH_ICONS } from 'translations/translations';
import CustomItem from './CustomItem';

const DropDownPage = () => {
  const customField = data => (
    <div className="d-flex  align-items-center gap-2 field">
      {data && (
        <div className="mt-3">
          <i className={`las ${data.icon}`} />
        </div>
      )}{' '}
      <TextBox className="" defaultValue={data && data.name} readOnly />
    </div>
  );
  return (
    <div className="container-fluid bg-white pb-5">
      <div className="row mt-4 mb-4">
        <div className="col-6">
          <div className="row mt-4">
            <h3>Select Box</h3>
            <div className="col-sm-6 mt-4">
              <SelectBox
                label={USER}
                required
                items={[
                  { id: 1, name: 'Ahmed' },
                  { id: 2, name: 'sara' },
                ]}
                displayExpr="name"
                valueExpr="id"
                placeholder={SELECT}
              />
            </div>
            <div className="col-sm-6 mt-4">
              <SelectBox
                label={USER_WITH_ICONS}
                required
                items={[
                  {
                    id: 1,
                    name: 'Ahmed',
                    icon: 'la-user-nurse',
                  },
                  {
                    id: 2,
                    name: 'sara',
                    icon: 'la-user-shield',
                  },
                ]}
                displayExpr="name"
                valueExpr="id"
                placeholder={SELECT}
                fieldRender={customField}
                itemRender={CustomItem}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownPage;
