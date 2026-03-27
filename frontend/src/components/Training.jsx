import React from 'react';
import javaCert from '../assets/java.png';

const Training = () => (
  <div className="section fade-in">
    <h2>Training</h2>
    <div className="timeline-item">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
        <h3>Mastering Java for Application Development - LPU</h3>
        <p className="timeline-meta">Jun 2025 - Jul 2025</p>
      </div>
      <p className="timeline-meta" style={{ marginBottom: '1rem' }}>
        <a href="https://drive.google.com/file/d/1Fuux-rFk550nE3Ub4zx0o9XPuHC0JTBg/view" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Certificate Link</a>
      </p>
      <div className="cert-card animate-slide-up" style={{
        margin: '1.5rem 0',
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
            src={javaCert}
            alt="Java Training Certificate"
            style={{ width: '100%', maxHeight: '450px', objectFit: 'contain', display: 'block', borderRadius: '4px' }}
          />
        </div>
      </div>
      <ul>
        <li>Completed structured training that covered core Java fundamentals, object-oriented concepts, exception handling, file handling, collections, and multithreading.</li>
        <li>Applied the learned concepts to build and debug Java applications, focusing on clean coding and logic development, and real project implementation.</li>
        <li>Understood MVC architecture and backend request handling.</li>
      </ul>
    </div>
  </div>
);

export default Training;
