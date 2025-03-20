import React, { useMemo } from 'react';
import './Timer.css';

const Timer = ({ seconds }) => {
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const minutesStr = minutes.toString().padStart(2, '0');
    const secondsStr = secs.toString().padStart(2, '0');
    return `${minutesStr}:${secondsStr}`;
  };
  const formattedTime = useMemo(() => formatTime(seconds), [seconds]);

  return (
    <div className='timer'>
      {formattedTime}
    </div>
  );
};

export default Timer;