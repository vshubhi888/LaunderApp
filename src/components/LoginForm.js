import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/form.css';

const LoginForm = () => {  
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(''); // State for error handling

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation to check phone number length
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    
    setError(''); // Clear error if validation passes

    // Navigate to verification page with phone number as state
    navigate("/verification", { state: { phoneNumber } });
  };

  return (
    <section className="form-section">
      <form onSubmit={handleSubmit}> {/* Handle form submission */}
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
              maxLength="10"  // Limit to 10 digits
            />
          </div>
        </div>

        {/* Error Message Display */}
        {error && <div className="error-message">{error}</div>}

        <button 
          className="btn login-btn btn-outline-primary w-100 mt-3"
          type="submit"
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

export default LoginForm;
