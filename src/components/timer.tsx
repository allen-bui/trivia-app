import React from 'react';

interface Timer {
  timer: number;
  setTimer: any;
}

const Timer: React.FC<Timer> = ({ timer, setTimer }) => {
  return (
    <div>
      {timer} seconds remaining
    </div>
  )
}

export default Timer;