import React from "react";
import Form from "../components/VerificationForm.js";
import Wave from '../components/Wave.js';
import "../css/verification.css"; // Include custom CSS
const Verification = () => {
  return (
    <div className="verification-container">
      <Wave/>
      <div className="verification-content">
      <Form />
      </div>
    </div>
  );
};

export default Verification;
