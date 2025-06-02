// src/Dashboard.js
import React from 'react';
import TeamMembersList from './TeamMembersList';

const dummyUsers = [
  { name: 'Aashi', role: 'Frontend Developer' },
  { name: 'Naman', role: 'Backend Developer' },
  { name: 'Vishant', role: 'Designer' }
];

const Dashboard = () => {
  return (
    <div style={{ padding: '30px' }}>
      <h2>Team Dashboard</h2>
      <TeamMembersList users={dummyUsers} />
    </div>
  );
};

export default Dashboard;


