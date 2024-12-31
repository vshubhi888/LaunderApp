// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// Import components
import './App.css';
import AccountDetails from "./components/AccountDetails";
import Login from "./routes/Login";
import ServicesPage from "./routes/Services";
import SplashScreen from "./routes/SplashScreen";
import Verification from "./routes/Verification";


function App() {
  return (
    <Router>
      <div>
        {/* Use Routes instead of Switch */}
        <Routes>
          <Route path="*" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/account" element={<AccountDetails />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* Optionally add a catch-all route */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;



