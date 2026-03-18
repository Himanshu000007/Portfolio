import React from 'react';

const Skills = () => (
  <div className="section">
    <h2>Skills</h2>
    <div className="skills-grid">
      <div>
        <h3>Languages</h3>
        <ul>
          <li>Java</li>
          <li>C / C++</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5, CSS3</li>
        </ul>
      </div>
      <div>
        <h3>Frameworks & Libraries</h3>
        <ul>
          <li>React</li>
          <li>Node.js, Express</li>
          <li>REST API</li>
        </ul>
      </div>
      <div>
        <h3>Databases & Tools</h3>
        <ul>
          <li>MySQL, MongoDB</li>
          <li>Git, GitHub</li>
        </ul>
      </div>
      <div>
        <h3>Fundamentals</h3>
        <ul>
          <li>Data Structures & Algorithms</li>
          <li>Operating Systems</li>
          <li>DBMS</li>
          <li>Computer Networks</li>
        </ul>
      </div>
    </div>
    <div className="resume-download">
      <a href="/resume.pdf" download>
        Download Resume
      </a>
    </div>
  </div>
);

export default Skills;

