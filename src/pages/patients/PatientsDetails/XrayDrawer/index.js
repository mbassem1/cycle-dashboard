import { LocaleContext } from 'context/locale';
import React, { useContext } from 'react';
import { XRAY_HEADER } from 'translations/translations';
import Gallery from './Gallary';

import './styles.scss';

const XrayDrawer = () => {
  const { translate } = useContext(LocaleContext);

  return (
    <div className="xray-container">
      <div className="xray-header">
        <div className="xray-header-title">{translate(XRAY_HEADER)}</div>
      </div>

      <div className="xray-info">
        <div className="xray-info-header">File Information</div>
        <div className="xray-info-body">
          <div className="xray-info-body-item">
            <div className="row">
              <div className="col-2">
                <div className="xray-info-body-item-label">Date:</div>
              </div>
              <div className="col-10">
                <div className="xray-info-body-item-value">14 June</div>
              </div>
            </div>
          </div>
          <div className="xray-info-body-item">
            <div className="row">
              <div className="col-2">
                <div className="xray-info-body-item-label">Clinic:</div>
              </div>
              <div className="col-10">
                <div className="xray-info-body-item-value">Dental</div>
              </div>
            </div>
          </div>

          <div className="xray-info-body-item">
            <div className="row">
              <div className="col-2">
                <div className="xray-info-body-item-label">Doctor:</div>
              </div>
              <div className="col-10">
                <div className="xray-info-body-item-value">Mohamed Mahmoud</div>
              </div>
            </div>
          </div>
          <div className="xray-info-body-item">
            <div className="row">
              <div className="col-2">
                <div className="xray-info-body-item-label">Note:</div>
              </div>
              <div className="col-10">
                <div className="xray-info-body-item-value">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia,
                  nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia,
                  nisl nisl aliquam nisl, eu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xray-scans">
        <div className="xray-scans-header">Scans</div>
        <Gallery />
      </div>
    </div>
  );
};

export default XrayDrawer;
