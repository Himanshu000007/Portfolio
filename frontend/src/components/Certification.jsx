import React from 'react';

const Certification = () => (
  <div className="section fade-in">
    <h2>Certification</h2>
    <div className="timeline-item">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
        <h3>Cloud Computing</h3>
        <p className="timeline-meta">Apr 2025</p>
      </div>
      <p className="timeline-meta">NPTEL · <a href="https://drive.google.com/file/d/1Q32vvL64QbTRgdUa-ybbPuqcyZvALQZg/view" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Link</a></p>
      
      <div style={{ 
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
          <iframe 
            src="https://drive.google.com/file/d/1Q32vvL64QbTRgdUa-ybbPuqcyZvALQZg/preview" 
            title="Cloud Computing Certificate" 
            style={{ width: '100%', height: '450px', border: 'none', display: 'block', borderRadius: '4px' }}
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default Certification;
