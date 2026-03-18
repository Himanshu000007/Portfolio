import React from 'react';

const Projects = () => (
  <div className="section">
    <h2>Projects</h2>

    <div className="project-card">
      <h3>Trend Gen – AI Content Generator</h3>
      <p className="project-meta">Nov 2025 · MERN, OpenAI API</p>
      <p>
        Full-stack MERN app that generates AI-powered content ideas, captions,
        and posting strategies for influencers on platforms like YouTube,
        Instagram, and LinkedIn.
      </p>
      <ul>
        <li>Integrated OpenAI API to generate platform-specific content.</li>
        <li>Implemented authentication and role-based access control.</li>
        <li>Analytics dashboard to track engagement and content performance.</li>
      </ul>
      <p>
        <strong>Stack:</strong> React, Node.js, Express, MongoDB, REST API
      </p>
    </div>

    <div className="project-card">
      <h3>Inner Light – Mental Wellbeing App</h3>
      <p className="project-meta">Jul 2025 · Node.js, Express, MongoDB</p>
      <p>
        Web app that supports users in improving mental wellbeing by providing safe and
        anonymous journaling and insights.
      </p>
      <ul>
        <li>Built RESTful APIs for journaling, mood tracking, and insights.</li>
        <li>Implemented secure storage with MongoDB and validation in Express.</li>
      </ul>
      <p>
        <strong>Stack:</strong> Node.js, Express, MongoDB, REST API
      </p>
    </div>

    <div className="project-card">
      <h3>Real-Time Chat Application</h3>
      <p className="project-meta">Apr 2025 · React, Node.js, Socket.io</p>
      <p>Real-time chat app supporting one-to-one and group conversations.</p>
      <ul>
        <li>Socket.io-based bidirectional communication.</li>
        <li>Online/offline indicators and typing status.</li>
      </ul>
      <p>
        <strong>Stack:</strong> React, Node.js, Express, MongoDB, Socket.io
      </p>
    </div>
  </div>
);

export default Projects;

