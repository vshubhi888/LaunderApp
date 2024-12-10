import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/form.css';


const Form = () => {  // Receive setCurrentScreen as a prop
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted with phone number: ${phoneNumber}`);
  };

  return (
    <section className="form-section">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">Enter OTP :</label>
          <div className="input-group">
          <div className="d-flex justify-content-between">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <input key={idx} type="text" maxLength="1" className="form-control mx-1 text-center" style={{ width: "50px" }} />
              ))}
          </div>
          </div>
        </div>

        <button 
          className="btn login-btn btn-outline-primary w-100 mt-3"
          onClick={(e) => { e.preventDefault(); navigate("/account"); }}  // Prevent form submission for this button
        >
          VERIFY
        </button>
        
        <button className="btn btn-outline-primary w-100 mt-2">
          Resend OTP
        </button>

      </form>
    </section>
  );
};

export default Form;
