import { useEffect } from 'react';

const useOutsideClick = (ref, onOutsideClick, isDrawer) => {
  const handleOutsideClick = event => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !document.getElementsByClassName('dx-overlay-wrapper')[0]
    ) {
      if (isDrawer) {
        document.getElementById('rootBODY').classList.remove('overflow-hidden', 'dark-bg');
        ref.current.classList.remove('active');
        ref.current.addEventListener('transitionend', () => {
          onOutsideClick();
        });
      } else {
        onOutsideClick();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
};

export default useOutsideClick;
