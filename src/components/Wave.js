import React from 'react';
import '../css/wave.css';
const Wave = () => {
  return (
    <div className="wave">
    <div className="header">
      <h1 className="text">
        Launder Up
        </h1>
    </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L34.3,96C68.6,96,137,96,206,112C274.3,128,343,160,411,149.3C480,139,549,85,617,85.3C685.7,85,754,139,823,176C891.4,213,960,235,1029,218.7C1097.1,203,1166,149,1234,133.3C1302.9,117,1371,139,1406,149.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
  </div>
  );
};

export default Wave;