// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // Import components
// import SignUp from './components/SignUp';
// import OTP from './components/Otp';
// import AccountDetails from './components/AccountDetails';
// import Welcome from './components/Welcome';
// import './App.css';


// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Use Routes instead of Switch */}
//         <Routes>
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/otp" element={<OTP />} />
//           <Route path="/account-details" element={<AccountDetails />} />
//           <Route path="/" element={<Welcome />} />
//           {/* Optionally add a catch-all route */}
//           </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import Login from "./routes/Login";
import SplashScreen from "./routes/SplashScreen";
import Verification from "./routes/Verification";

function App() {
  const [currentScreen, setCurrentScreen] = useState("splash");

  useEffect(() => {
    if (currentScreen === "splash") {
      setTimeout(() => {
        setCurrentScreen("login");
      }, 2000); // Show splash screen for 2 seconds
    }
  }, [currentScreen]);

  return (
    <>
      {currentScreen === "splash" && <SplashScreen />}
      {currentScreen === "login" && <Login setCurrentScreen={setCurrentScreen} />}
      {currentScreen === "verification" && <Verification />}
    </>
  );
}

export default App;

