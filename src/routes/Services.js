import React from 'react';
import Footer from '../components/Footer';
import '../css/services.css';
const ServicesPage = () => {
  const services = [
    { name: "Ironing", icon: "https://via.placeholder.com/100" },
    { name: "Laundry", icon: "https://via.placeholder.com/100" },
    { name: "Steam Ironing", icon: "https://via.placeholder.com/100" },
    { name: "Dry Cleaning", icon: "https://via.placeholder.com/100" }
  ];

  return (
    <div className="services-page">
      <div className="header">
        <div className="language-icon">🌍</div>
        <div className="menu-icon">⋮</div>
      </div>
      <div className="heading">
      <h1>Services</h1>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.icon} alt={service.name} className="service-icon" />
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
