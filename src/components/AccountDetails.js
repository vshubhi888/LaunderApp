// src/components/AccountDetails.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountDetails = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving user data and navigating to a final page (e.g., welcome)
    navigate('/welcome');
  };

  return (
    <div>
      <h2>Account Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AccountDetails;
