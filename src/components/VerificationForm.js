import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation to access state
import "../css/verification.css";

const OTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { phoneNumber } = location.state || {};  // Get the phoneNumber from state (if available)
  const [otp, setOtp] = useState(new Array(6).fill(""));  // OTP input state
  const inputRefs = useRef([]);  // To focus next/previous input
  const [loading, setLoading] = useState(false);  // Loading state for API calls
  const [error, setError] = useState(null);  // Error state for handling API errors

  const handleChange = (value, index) => {
    if (value.length > 1) value = value[0]; // Limit to one character
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if a number is entered
    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (event, index) => {
    if (event.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      // Move to previous input on backspace
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Validate OTP using an API request (async call)
  const handleValidate = async () => {
    const enteredOtp = otp.join("");

    setLoading(true);  // Set loading to true during the API request
    setError(null);  // Reset error state

    try {
      if (enteredOtp === "000000") {
        alert('OTP is 000000, navigating to account for testing...');
        navigate("/account");
        return; // Exit the function after navigating
      }

      const response = await fetch('your-validation-api-endpoint', {
        method: 'POST',
        body: JSON.stringify({ phoneNumber, otp: enteredOtp }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('OTP validated successfully!');
        navigate("/account");
      } else {
        alert('Invalid OTP');
      }
    } catch (err) {
      alert('Error validating OTP');
      console.error('Error:', err);
    } finally {
      setLoading(false);  // Set loading to false when the API request is done
    }
  };

  // Resend OTP using an API request (async call)
  const handleResendOtp = async () => {
    setLoading(true);  // Set loading to true when starting the API request
    setError(null);  // Reset error state

    try {
      const response = await fetch('your-resend-otp-api-endpoint', {
        method: 'POST',
        body: JSON.stringify({ phoneNumber }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('OTP sent successfully!');
      } else {
        alert('Error sending OTP');
      }
    } catch (err) {
      setError('Failed to resend OTP');
      console.error(err);
    } finally {
      setLoading(false);  // Set loading to false when the API request is completed
    }
  };

  // Mask phone number for display
  const maskedPhoneNumber = phoneNumber ? `*******${phoneNumber.slice(-4)}` : "";

  return (
    <div className="otp-card-wrapper">
      <div className="otp-card text-center">
        <h6 className="otp-header">Verification</h6>
        <div className="otp-message">
          <span>A code has been sent to </span>
          <small className="masked-number">{maskedPhoneNumber}</small>
        </div>
        <div className="otp-input-group d-flex justify-center mt-2">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              className="otp-input"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
        <div className="button-container mt-4">
          <button
            className="btn btn-primary otp-validate-btn w-100"
            onClick={handleValidate}
            disabled={loading} // Disable the button while loading
          >
            {loading ? 'Validating...' : 'Validate'}
          </button>
          <button
            className="btn btn-primary otp-resend-btn w-100 mt-3"
            onClick={handleResendOtp} // Trigger the resend OTP function
            disabled={loading} // Disable the button while the API request is loading
          >
            {loading ? 'Sending OTP...' : 'Resend OTP'}
          </button>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
