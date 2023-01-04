import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ timer, setTimer }) => {
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(prevState => prevState - 1);
      if (timer === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);

  return <p className="danger mx-3">{new Date(timer * 1000).toISOString().substring(14, 19)}</p>;
};

Counter.propTypes = {
  timer: PropTypes.number,
  setTimer: PropTypes.func,
};

export default Counter;
