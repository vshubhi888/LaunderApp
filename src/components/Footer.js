import React from "react";
import "../css/footer.css"; // Include custom CSS
import "../css/services.css";
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-item">Home</div>
        <div className="footer-item">Order</div>
        <div className="footer-item">Cart</div>
        <div className="footer-item">Profile</div>
        <div className="footer-item express">Express</div>
      </footer>
  );
};

export default Footer;
