import './style.css';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Description from './components/Description/Description';
import workImg from './images/work.png';
import restImg from './images/rest.png';
import Timer from './components/Timer/Timer';
import bellSound from './sounds/bell.wav';

const App = () => {
  const [status, setStatus] = useState('off');
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const playBell = () => {
    const bell = new Audio(bellSound);
    bell.play();
  };

  const startTimer = () => {
    setTime(1200);
    setStatus('work');
    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime - 1); 
    }, 1000);
    setTimer(intervalId);
  };

  useEffect(() => {
    if (time <= 0 && status !== 'off') {
      playBell();
      if (status === 'work') {
        setStatus('rest');
        setTime(20);
      } else if (status === 'rest') {
        setStatus('work');
        setTime(1200);
      }
    }
  }, [time, status]);

  const stopTimer = () => {
    setStatus('off');
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
    setTime(0);
  };

  const closeApp = () => {
    window.close();
  }

  return (
    <div>
      <h1>Protect your eyes</h1>
      {status === 'off' && <Description />}
      {status === 'work' && (<img src={workImg} alt='Work' />)}
      {status === 'rest' && (<img src={restImg} alt='Rest' />)}
      {status !== 'off' && <Timer seconds={time} />}
      {status === 'off' && (<button className='btn' onClick={startTimer}>Start</button>)}
      {status !== 'off' && (<button className='btn' onClick={stopTimer}>Stop</button>)}
      <button className='btn btn-close' onClick={closeApp}>X</button>
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
