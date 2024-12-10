import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/splash.css"; // Include custom CSS

const SplashScreen = () => {

  const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/login");
        }, 2000); // 2 seconds

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, [navigate]);
    
  return (
    <div className="splash-container">
      <div>
        <div className="circle"></div>
        <h1 className="text-white text-center mt-3">Launder Up</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
