import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import '../css/services.css';
import GlobeMenu from '../components/GlobeMenu';
const services = [
  { icon: '/icons/ironing.png', label: 'IRONING' },
  { icon: '/icons/dryclean.png', label: '' },
  { icon: '/icons/laundry.png', label: 'LAUNDRY' },
  { icon: '/icons/steam.png', label: 'STEAM IRONING' },
];

const ServicesPage = () => (
  <div className="services-page">
    <GlobeMenu />
  
    <div className="container-fluid py-4 bg-light min-vh-100">
      <div className="mb-4">
        <h2 className="fw-semibold" style={{ color: '#263238' }}>Services</h2>
      </div>
      <div className="row g-4">
        {services.map((s, i) => (
          <div className="col-6" key={i}>
            <div className="card shadow-sm border-0 rounded-4 position-relative text-center py-4 h-100">
              <button type="button" className="btn btn-light btn-sm rounded-circle position-absolute top-0 end-0 m-2 p-0 info-btn">
                <span className="fw-bold text-secondary" style={{ fontSize: '1.1rem' }}>i</span>
              </button>
              <img src={s.icon} alt={s.label} className="mx-auto d-block mb-3" style={{ width: 64, height: 64, objectFit: 'contain' }} />
              <div className="fw-normal text-uppercase small letter-spacing-1">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default ServicesPage;
