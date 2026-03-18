import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => (
  <div className="section fade-in">
    <h2>Featured Projects</h2>
    <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
      Here are a few select projects spanning full-stack development, AI, and real-time systems.
    </p>

    <div className="project-card fade-in" style={{ animationDelay: '0.1s' }}>
      <div style={headerStyle}>
        <h3>Dynamic Learning Platform</h3>
        <p className="project-meta">Feb 2026</p>
      </div>
      <p>
        Built a full-stack MERN-based learning platform that provides structured learning paths where advanced courses unlock dynamically after completing prerequisite modules.
      </p>
      <ul>
        <li>Integrated course progress tracking and completion management using personalized dashboards.</li>
        <li>Implemented role-based authentication and secure API access using JWT, allowing protected course content, personalized user sessions, and scalable user management.</li>
      </ul>
      <div className="tech-stack" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.2rem', marginBottom: '1rem' }}>
        <span style={tagStyle}>[Node.js]</span>
        <span style={tagStyle}>[Express]</span>
        <span style={tagStyle}>[MongoDB]</span>
        <span style={tagStyle}>[React]</span>
        <span style={tagStyle}>[RESTful APIs]</span>
        <span style={tagStyle}>[JWT]</span>
      </div>
      <a href="https://github.com/Himanshu000007" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
        <Github size={14} style={{ marginRight: '0.4rem' }} /> Source Code
      </a>
    </div>

    <div className="project-card fade-in" style={{ animationDelay: '0.2s' }}>
      <div style={headerStyle}>
        <h3>Inner Light – Mental Well Being Application</h3>
        <p className="project-meta">Nov 2025</p>
      </div>
      <p>
        Developed a full-stack web application focused on improving mental wellbeing by providing a safe space.
      </p>
      <ul>
        <li>Crafted and Designed and developed secure RESTful APIs using Node.js and Express.js for handling posts, replies, and user interactions.</li>
        <li>Architected secure and scalable backend APIs using Node.js and Express.js to manage anonymous posts, replies, and user data efficiently flow.</li>
      </ul>
      <div className="tech-stack" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.2rem', marginBottom: '1rem' }}>
        <span style={tagStyle}>[Node.js]</span>
        <span style={tagStyle}>[Express]</span>
        <span style={tagStyle}>[MongoDB]</span>
        <span style={tagStyle}>[React]</span>
        <span style={tagStyle}>[RESTful APIs]</span>
      </div>
      <a href="https://github.com/Himanshu000007" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
        <Github size={14} style={{ marginRight: '0.4rem' }} /> Source Code
      </a>
    </div>

    <div className="project-card fade-in" style={{ animationDelay: '0.3s' }}>
      <div style={headerStyle}>
        <h3>Real-Time Chat Application</h3>
        <p className="project-meta">Apr 2025</p>
      </div>
      <p>
        Constructed a real-time chat application using React, Node.js, Express, and Socket.IO, enabling instant messaging with live updates and seamless user interaction.
      </p>
      <ul>
        <li>Coded secure backend APIs with JWT authentication, message routing, and Socket.IO-based.</li>
        <li>Designed a responsive React UI supporting chat rooms, typing indicators, online/offline presence.</li>
      </ul>
      <div className="tech-stack" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.2rem', marginBottom: '1rem' }}>
        <span style={tagStyle}>[Socket.IO]</span>
        <span style={tagStyle}>[Node.js]</span>
        <span style={tagStyle}>[Express]</span>
        <span style={tagStyle}>[MongoDB]</span>
        <span style={tagStyle}>[React]</span>
        <span style={tagStyle}>[RESTful APIs]</span>
      </div>
      <a href="https://github.com/Himanshu000007" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
        <Github size={14} style={{ marginRight: '0.4rem' }} /> Source Code
      </a>
    </div>
  </div>
);

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  marginBottom: '0.5rem',
  flexWrap: 'wrap',
  gap: '1rem'
};

const tagStyle = {
  background: 'var(--accent-soft)',
  color: 'var(--accent)',
  padding: '0.2rem 0.6rem',
  borderRadius: '4px',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  letterSpacing: '0.05em',
  border: '1px solid rgba(124, 58, 237, 0.2)'
};

export default Projects;

