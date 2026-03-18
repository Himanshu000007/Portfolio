import React from 'react';
import profileImg from '../assets/profile.svg';

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p className="hero-tag">Software Developer</p>
        <h1>Himanshu Kumar</h1>
        <p className="hero-summary">
          I am a software developer with a strong foundation in core computer
          science and hands‑on experience building modern web applications.
          I focus on writing clean, maintainable code, communicating clearly with
          teammates, and breaking down complex problems into simple steps so
          projects move forward smoothly.
        </p>
        <div className="hero-links">
          <a href="https://linkedin.com/in/himanshu-kumar7" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Himanshu000007" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:himanshu8809564335@gmail.com">Email</a>
          <a href="https://instagram.com/himuuuuu__07" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <div className="hero-photo-wrapper">
        <img src={profileImg} alt="Himanshu Kumar" className="hero-photo" />
      </div>
    </div>
  );
};

export default Home;

