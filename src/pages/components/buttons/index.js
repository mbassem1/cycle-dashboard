import React from 'react';
import Button from 'shared/components/Button/button';
import { ACTIVE, DISABLE, RESTING } from 'translations/translations';

const ButtonsPage = () => (
  <div className="container-fluid bg-white pb-5">
    <div className="row mb-4">
      <div className="col-6">
        <div className="row mt-4">
          <h3>Primary buttons</h3>
          <div className="col-sm-3 mt-4">
            <Button text={ACTIVE} />
          </div>
          <div className="col-sm-3 mt-4">
            <Button text={RESTING} type="normal" />
          </div>
          <div className="col-sm-3 mt-4">
            <Button text={DISABLE} disabled />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-4">
          <h3>Outline buttons</h3>
          <div className="col-sm-3 mt-4">
            <Button stylingMode="outlined" text={ACTIVE} />
          </div>
          <div className="col-sm-3 mt-4">
            <Button text={RESTING} type="normal" stylingMode="outlined" />
          </div>
          <div className="col-sm-3 mt-4">
            <Button text={DISABLE} stylingMode="outlined" disabled />
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-6">
        <div className="row mt-4">
          <h3>Primary buttons with icon</h3>
          <div className="col-sm-3 mt-4">
            <Button icon="la-user-plus" text={ACTIVE} />
          </div>

          <div className="col-sm-3 mt-4">
            <Button text={RESTING} type="normal" icon="la-user-plus" />
          </div>
          <div className="col-sm-3 mt-4">
            <Button text={DISABLE} disabled icon="la-user-plus" />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-4">
          <h3>Outline buttons</h3>
          <div className="col-sm-3 mt-4">
            <Button text={ACTIVE} stylingMode="outlined" icon="la-user-plus" />
          </div>
          <div className="col-sm-3 mt-4">
            <Button text={RESTING} type="normal" stylingMode="outlined" icon="la-user-plus" />
          </div>
          <div className="col-sm-3 mt-4">
            <Button text={DISABLE} stylingMode="outlined" disabled icon="la-user-plus" />
          </div>
          <div className="col-sm-3 mt-4">
            <Button icon="la-user-plus" id="only-icon" width="36" height="36" />
          </div>
          <div className="col-sm-3 mt-4">
            <Button type="normal" icon="la-user-plus" id="only-icon" width="46" />
          </div>
          <div className="col-sm-3 mt-4">
            <Button type="normal" stylingMode="outlined" icon="la-user-plus" id="only-icon" width="46" />
          </div>
          <div className="col-sm-3 mt-4">
            <Button stylingMode="outlined" icon="la-user-plus" id="rounded" />
          </div>
          <div className="col-sm-3 mt-4">
            <Button stylingMode="outlined" type="gray" icon="la-user-plus" id="only-icon" width="46" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ButtonsPage;
