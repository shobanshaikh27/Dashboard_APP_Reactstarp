import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

const CountUpComponent = ({ end, duration = 2 }) => {
  const countUpRef = useRef(null);

  useEffect(() => {
    const countUp = new CountUp(countUpRef.current, end, { duration });
    countUp.start();
  }, [end, duration]);

  return <span ref={countUpRef} />;
};

export default CountUpComponent;