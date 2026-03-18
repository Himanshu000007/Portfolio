import React from 'react';
import { Code, Server, Layout } from 'lucide-react';

const About = () => {
  return (
    <div className="section about-section">
      <h2>About Me</h2>
      <div className="about-content" style={{ marginTop: '1.5rem', lineHeight: '1.7', color: 'var(--muted)' }}>
        <p>
          I am a passionate Software Developer who loves turning complex problems into elegant,
          user-friendly solutions. My journey in tech is driven by an insatiable curiosity and
          a commitment to continuous learning.
        </p>

        <div className="resume-highlights" style={{ marginTop: '2.5rem' }}>
          <h3 style={{ color: 'var(--text)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🔥 Resume Highlights
          </h3>
          <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><strong>Full-Stack Mastery:</strong> Built and deployed scalable web applications using the MERN stack.</li>
            <li><strong>AI Integration:</strong> Developed Trend Gen, an AI-powered content generator leveraging OpenAI's API.</li>
            <li><strong>Real-Time Systems:</strong> Implemented robust bidirectional communication features using Socket.io.</li>
            <li><strong>Problem Solving:</strong> Strong foundational skills honed through active competitive programming and algorithmic challenges.</li>
          </ul>
        </div>

        <div className="currently-learning" style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
          <h3 style={{ color: 'var(--text)', marginTop: 0, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🚀 Currently Learning
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layout size={18} color="var(--accent)" />
              <span>Next.js</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Server size={18} color="var(--accent)" />
              <span>System Design</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code size={18} color="var(--accent)" />
              <span>Docker</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
