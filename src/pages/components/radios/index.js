import React from 'react';
import RadioGroup from 'shared/components/radio/radio';

const RadiosPage = () => {
  // Radio Translations
  const radioLabels = [
    { label: { EN: 'Male', AR: 'ذكر' }, value: 1 },
    { label: { EN: 'Female', AR: 'إثني' }, value: 2 },
  ];
  return (
    <div className="container-fluid bg-white pb-5">
      <div className="row mt-4 mb-4">
        <div className="col-6">
          <div className="row mt-4">
            <h3>Default Radio Group</h3>
            <div className="col-sm-12 mt-4">
              <RadioGroup dataSource={radioLabels} layout="horizontal" valueExpr="value" />
            </div>
            <h3>Required Radio Group</h3>
            <div className="col-sm-12 mt-4">
              <RadioGroup dataSource={radioLabels} layout="horizontal" valueExpr="value" required />
            </div>
            <div className="col-sm-12 mt-4">
              <h3>Disabled Radio Group</h3>
              <RadioGroup
                dataSource={radioLabels}
                layout="horizontal"
                valueExpr="value"
                disabled
                value={radioLabels[0].value}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadiosPage;
