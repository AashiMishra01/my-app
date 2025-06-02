// src/PublicOverview.js
import React from 'react';
import { Link } from 'react-router-dom';

const PublicOverview = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Our Company</h1>
      <p>This is a public overview of our platform. Please login to access more features.</p>
      <Link to="/login" style={styles.loginLink}>Login</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    padding: '20px',
    backgroundColor: '#f3f3f3',
    borderRadius: '10px'
  },
  loginLink: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none'
  }
};

export default PublicOverview;

