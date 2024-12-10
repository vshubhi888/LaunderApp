import React, { useState } from 'react';
import '../css/form.css';
const Form = ({ setCurrentScreen }) => {  // Receive setCurrentScreen as a prop
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted with phone number: ${phoneNumber}`);
  };

  return (
    <section className="form-section">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">Enter Phone Number</label>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input 
              type="text" 
              id="phoneNumber"
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
              placeholder="Enter phone number" 
              className="form-control"
            />
          </div>
        </div>

        <button 
          className="btn login-btn btn-outline-primary w-100 mt-3"
          onClick={(e) => { e.preventDefault(); setCurrentScreen("verification"); }}  // Prevent form submission for this button
        >
          LOGIN
        </button>
        
        <div className="text-center mt-3">OR</div>

        <button className="btn btn-outline-primary w-100 mt-2">
          Log in with Google
        </button>

        <button className="btn btn-outline-primary w-100 mt-2">
          Log in with Facebook
        </button>
      </form>
    </section>
  );
};

export default Form;
