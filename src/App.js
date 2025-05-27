import React, { useState, useEffect } from 'react';

function SimpleStopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleStop = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = () => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      fontFamily: 'Arial' 
    }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime()}</h2>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleStart} disabled={isRunning} style={{ marginRight: '10px' }}>Start</button>
        <button onClick={handlePause} disabled={!isRunning} style={{ marginRight: '10px' }}>Pause</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}

export default SimpleStopwatch;
