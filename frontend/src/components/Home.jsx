import React from 'react';
import { Download, ChevronRight, Code2, Rocket, Brain } from 'lucide-react';
import profileImg from '../assets/Profile.png';

const Home = () => {
  return (
    <div className="hero">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="hero-text">
        <div className="hero-tag-container">
          <span className="hero-tag">Software Developer</span>
          <span className="hero-status">
            <span className="status-dot"></span> Available for Work
          </span>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Himanshu Kumar</span>
        </h1>

        <p className="hero-summary">
          I am a software developer with a strong foundation in core computer
          science and hands‑on experience building modern robust web applications.
          I focus on writing clean, maintainable code, communicating clearly with
          teammates, and breaking down complex problems.
        </p>

        <div className="hero-badges">
          <div className="hero-badge"><Code2 size={16} /> MERN Stack</div>
          <div className="hero-badge"><Brain size={16} /> Problem Solving</div>
          <div className="hero-badge"><Rocket size={16} /> AI Integrations</div>
        </div>

        <div className="hero-links">
          <a href="/resume.pdf" className="btn-primary" target="_blank" rel="noreferrer">
            <Download size={18} /> Download Resume
          </a>
          <a href="https://linkedin.com/in/himanshu-kumar7" className="btn-secondary" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Himanshu000007" className="btn-secondary" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:himanshu8809564335@gmail.com" className="btn-secondary">
            Email
          </a>
        </div>
      </div>

      <div className="hero-photo-container">
        <div className="hero-photo-wrapper">
          <img src={profileImg} alt="Himanshu Kumar" className="hero-photo" />
          <div className="photo-backdrop"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

