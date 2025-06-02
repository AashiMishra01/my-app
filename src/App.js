// App.js
import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import PublicOverview from './PublicOverview';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import ProfileCardPage from './ProfileCardPage';
import SimpleStopwatch from './SimpleStopwatch';
import { useLogin } from './LoginContext';

function App() {
  const { isLoggedIn, logout } = useLogin();

  return (
    <>
      <nav style={{ padding: '10px', background: '#eee', textAlign: 'center' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/profile" style={{ marginRight: '20px' }}>Profile</Link>
        <Link to="/dashboard" style={{ marginRight: '20px' }}>Dashboard</Link>
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<PublicOverview />} />
        <Route path="/profile" element={<ProfileCardPage />} />
        <Route path="/stopwatch" element={<SimpleStopwatch />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;






