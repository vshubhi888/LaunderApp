import React from "react";
import LoginForm from "../components/LoginForm.js";
import Wave from '../components/Wave.js';
import "../css/login.css"; // Include custom CSS
const Login = () => {
  return (
    <div className="login-container">
      <Wave/>
      <div className="login-content">
        <LoginForm/>
      </div>
    </div>
  );
};

export default Login;
