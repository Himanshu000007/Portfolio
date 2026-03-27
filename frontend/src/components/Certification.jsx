import React from 'react';
import cloudCert from '../assets/cloud computing.png';

const Certification = () => (
  <div className="section fade-in">
    <h2>Certification</h2>
    <div className="timeline-item">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
        <h3>Cloud Computing</h3>
        <p className="timeline-meta">Apr 2025</p>
      </div>
      <p className="timeline-meta">NPTEL · <a href="https://drive.google.com/file/d/1Q32vvL64QbTRgdUa-ybbPuqcyZvALQZg/view" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Drive Link</a></p>
      
      <div className="cert-card animate-slide-up" style={{ 
        marginTop: '1.5rem', 
        padding: '12px', 
        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)', 
        border: '3px solid #d4af37', 
        borderRadius: '12px', 
        boxShadow: '0 10px 20px rgba(0,0,0,0.15)', 
        display: 'inline-block',
        maxWidth: '100%'
      }}>
        <div style={{ border: '1px solid #e0c05a', padding: '4px', borderRadius: '8px', backgroundColor: '#fff', overflow: 'hidden' }}>
          <img 
            src={cloudCert} 
            alt="Cloud Computing Certificate" 
            style={{ width: '100%', maxHeight: '450px', objectFit: 'contain', display: 'block', borderRadius: '4px' }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Certification;
