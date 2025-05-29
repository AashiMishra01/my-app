// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SimpleStopwatch from './SimpleStopwatch';
import ProfileCardPage from './ProfileCardPage';

function App() {
  return (
    <>
      <nav style={{ padding: '10px', background: '#eee', textAlign: 'center' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Stopwatch</Link>
        <Link to="/profile">Profile Card</Link>
      </nav>

      <Routes>
        <Route path="/" element={<SimpleStopwatch />} />
        <Route path="/profile" element={<ProfileCardPage />} />
      </Routes>
    </>
  );
}

export default App;


