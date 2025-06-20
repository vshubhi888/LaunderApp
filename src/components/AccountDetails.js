import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/account.css";

const SignUpForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    pincode: "",
  });
  const [loading, setLoading] = useState(false);  // Loading state for API request
  const [error, setError] = useState(null);  // Error state to show errors
  const [success, setSuccess] = useState(false);  // Success state for showing confirmation message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Start loading when submitting form
    setError(null);    // Reset error state
    setSuccess(false); // Reset success state

    try {
      const response = await fetch("your-signup-api-endpoint", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);  // Set success if the request is successful
        navigate("/login"); // Redirect to login page after successful signup
      } else {
        setError(data.message || "An error occurred, please try again.");  // Handle error from API
      }
    } catch (error) {
      setError("Failed to sign up. Please try again later.");
      console.error("Error:", error);
    } finally {
      setLoading(false);  // Stop loading after the API call
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <button className="back-button" onClick={() => navigate(-2)}>
          ←
        </button>
      </div>
      <div className="signup-content">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile number"
            className="form-input"
            value={formData.mobile}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Mail ID"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="form-input"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            className="form-input"
            value={formData.pincode}
            onChange={handleChange}
          />
          <button type="submit" className="form-button" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Show success message */}
        {success && <div className="success-message">Successfully signed up! Redirecting...</div>}

        {/* Show error message */}
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default SignUpForm;
