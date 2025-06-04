// App.js
import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import PublicOverview from './PublicOverview';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import ProfileCardPage from './ProfileCardPage';
import SimpleStopwatch from './SimpleStopwatch';
import SignupForm from './SignupForm';
import { useLogin } from './LoginContext';
import TodoDemo from './TodoDemo';
import TaskListApp from './TaskListApp';
import TaskEditor from './TaskEditor';
import { TaskProvider } from './TaskContext'; // Wrap the app

function App() {
  const { isLoggedIn, logout } = useLogin();

  return (
    <TaskProvider>
      <nav style={{ padding: '10px', background: '#eee', textAlign: 'center' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/profile" style={{ marginRight: '20px' }}>Profile</Link>
        <Link to="/dashboard" style={{ marginRight: '20px' }}>Dashboard</Link>
        <Link to="/stopwatch" style={{ marginRight: '20px' }}>Stopwatch</Link>
        <Link to="/signup" style={{ marginRight: '20px' }}>Signup</Link>
        <Link to="/todo" style={{ marginRight: '20px' }}>Todo</Link>
        <Link to="/tasks" style={{ marginRight: '20px' }}>Tasks</Link>
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
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/todo" element={<TodoDemo />} />
        <Route path="/tasks" element={<TaskListApp />} />
        <Route path="/tasks/edit" element={<TaskEditor />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </TaskProvider>
  );
}

export default App;
