import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import './style.scss';
import Icon from 'shared/components/Icon';
import Text from 'shared/components/Text';
// import useOutsideClick from 'hooks/useOutsideClick';

const modalRootContainer = document.getElementById('modal-root');

const Modal = ({ children, onClose, header, hideCloseIcon = false, position = 'center', width = '600' }) => {
  const modalRef = useRef(null);

  // close modal if clicked outside
  // useOutsideClick(modalRef, () => onClose());

  useEffect(() => {
    document.getElementById('rootBODY').classList.add('overflow-hidden');
    return () => {
      document.getElementById('rootBODY').classList.remove('overflow-hidden');
    };
  }, []);

  return createPortal(
    <div className={`modal-container ${position}`} onClick={() => onClose()} aria-hidden>
      <div
        onClick={e => e.stopPropagation()}
        aria-hidden
        className="modal-wrapper"
        ref={modalRef}
        style={{ maxWidth: `${width}px` }}
      >
        {(header || !hideCloseIcon) && (
          <div className={`modal-header ${!header ? 'only-icon' : ''}`}>
            {header && <Text value={header} />}
            {!hideCloseIcon && <Icon onClick={() => onClose()} icon="la-times" />}
          </div>
        )}

        <div className="modal-body">{children}</div>
      </div>
    </div>,
    modalRootContainer,
  );
};

Modal.propTypes = {
  header: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  hideCloseIcon: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.element,
  position: PropTypes.string,
  width: PropTypes.string,
};

export default Modal;
