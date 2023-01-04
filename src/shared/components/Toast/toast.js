import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Toast as DXToast } from 'devextreme-react/toast';

import './_toast.scss';
import { LocaleContext } from 'context/locale';
import Button from '../Button/button';

const Toast = ({ title, description, type, onConfirm, onCancel, confirmLabel, cancelLabel, icon, ...props }) => {
  /* help documentation
   https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxToast/Configuration/#contentTemplate */

  const { isRtl, translate } = useContext(LocaleContext);

  const renderContent = () => (
    <div className={`${type} toast-box`}>
      <div className="icon">
        <i className={icon} />
      </div>
      <div className="toast-txt">
        <h3 className="">{translate(title)}</h3>
        <p className={onCancel && 'long-txt'}>{translate(description)}</p>
      </div>
      {onConfirm && (
        <div className="action-toast">
          <Button text={confirmLabel} onClick={onConfirm} />
          {onCancel && <Button text={cancelLabel} onClick={onCancel} />}
        </div>
      )}
    </div>
  );

  return (
    <DXToast
      position={isRtl ? 'top left' : 'top right'}
      type={type}
      contentRender={renderContent}
      width={onConfirm ? (onCancel ? 'inherit' : 'min-content') : 'min-content'}
      {...props}
    />
  );
};

Toast.propTypes = {
  title: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  description: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  cancelLabel: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  confirmLabel: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  type: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  icon: PropTypes.string,
  width: PropTypes.string,
};
export default Toast;
