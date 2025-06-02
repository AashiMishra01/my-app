// src/TeamMembersList.js
import React from 'react';

const TeamMembersList = ({ users }) => {
  return (
    <div style={styles.grid}>
      {users.map((user, index) => (
        <div key={index} style={styles.card}>
          <h3>{user.name}</h3>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '20px'
  },
  card: {
    backgroundColor: '#e1e5ea',
    padding: '20px',
    borderRadius: '8px',
    minWidth: '200px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  }
};

export default TeamMembersList;


