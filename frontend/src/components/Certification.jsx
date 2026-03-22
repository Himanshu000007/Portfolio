import React from 'react';

const Certification = () => (
  <div className="section fade-in">
    <h2>Certification</h2>
    <div className="timeline-item">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
        <h3>Cloud Computing</h3>
        <p className="timeline-meta">Apr 2025</p>
      </div>
      <p className="timeline-meta">NPTEL · <a href="#" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Link</a></p>
    </div>
  </div>
);

export default Certification;
