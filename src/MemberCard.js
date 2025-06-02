// src/MemberCard.js
import React from 'react';

const MemberCard = ({ user }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '200px' }}>
      <h3>{user.name}</h3>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default MemberCard;
