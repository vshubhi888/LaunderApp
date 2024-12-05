// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import components
import SignUp from './components/SignUp';
import OTP from './components/Otp';
import AccountDetails from './components/AccountDetails';
import Welcome from './components/Welcome';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        {/* Use Routes instead of Switch */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/account-details" element={<AccountDetails />} />
          <Route path="/" element={<Welcome />} />
          {/* Optionally add a catch-all route */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
