import React from "react";
import "../css/verification.css"; // Include custom CSS

const Verification = () => {
  return (
    <div className="verification-container">
      <div className="card">
        <h2 className="text-center mb-4 text-primary">Verification Code</h2>
        <div className="mb-3">
          <label className="form-label">Enter OTP:</label>
          <div className="d-flex justify-content-between">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <input key={idx} type="text" maxLength="1" className="form-control mx-1 text-center" style={{ width: "50px" }} />
              ))}
          </div>
        </div>
        <button className="btn btn-primary w-100 mb-3">Verify Code</button>
        <div className="text-center">
          <button className="btn btn-link text-primary">Resend OTP</button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
