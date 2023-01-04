import React, { useEffect, useRef, useContext } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import './style.scss';
import { LocaleContext } from 'context/locale';
import { useOutsideClick } from 'hooks';

const modalRootContainer = document.getElementById('modal-root');

const DrawerModal = ({ children, onClose, widthAttr = 400 }) => {
  const { isRtl } = useContext(LocaleContext);
  const drawerContainRef = useRef(null);

  // close modal if clicked outside
  useOutsideClick(drawerContainRef, () => onClose(), true);

  useEffect(() => {
    document.getElementById('rootBODY').classList.add('overflow-hidden', 'dark-bg');
    setTimeout(() => {
      drawerContainRef.current.classList.add('active');
    }, 1);
  }, []);

  return createPortal(
    <div
      className="drawer-modal-contain"
      ref={drawerContainRef}
      style={{ width: widthAttr, [isRtl ? 'left' : 'right']: `-${widthAttr}px` }}
    >
      <div className="drawer-modal-wrap">{children}</div>
    </div>,
    modalRootContainer,
  );
};

DrawerModal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
  widthAttr: PropTypes.number,
};

export default DrawerModal;
