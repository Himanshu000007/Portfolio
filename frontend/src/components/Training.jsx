import React from 'react';

const Training = () => (
  <div className="section fade-in">
    <h2>Training</h2>
    <div className="timeline-item">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
        <h3>Mastering Java for Application Development - LPU</h3>
        <p className="timeline-meta">Jun 2025 - Jul 2025</p>
      </div>
      <p className="timeline-meta" style={{ marginBottom: '1rem' }}>
        <a href="#" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Certificate</a>
      </p>
      <ul>
        <li>Completed structured training that covered core Java fundamentals, object-oriented concepts, exception handling, file handling, collections, and multithreading.</li>
        <li>Applied the learned concepts to build and debug Java applications, focusing on clean coding and logic development, and real project implementation.</li>
        <li>Understood MVC architecture and backend request handling.</li>
      </ul>
    </div>
  </div>
);

export default Training;
