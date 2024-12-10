import React from "react";
import Form from "../components/Form.js";
import Wave from '../components/Wave.js';
import "../css/login.css"; // Include custom CSS
const Login = ({ setCurrentScreen }) => {
  return (
    <div className="login-container">
      <Wave/>
      <div className="login-content">
        <Form setCurrentScreen={setCurrentScreen} />
      </div>
    </div>
  );
};

export default Login;
