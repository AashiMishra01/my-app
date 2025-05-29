// src/SimpleStopwatch.js
import React, { useState, useEffect } from 'react';

function SimpleStopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime(prev => prev + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{time} sec</h1>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => { setTime(0); setRunning(false); }}>Reset</button>
    </div>
  );
}

export default SimpleStopwatch;

