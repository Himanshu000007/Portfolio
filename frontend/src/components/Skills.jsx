import React from 'react';
import { Code, Box, Layers, Database, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={20} color="var(--accent)" />,
      skills: ['Java', 'C++/C', 'C#', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks',
      icon: <Box size={20} color="var(--accent)" />,
      skills: ['React', 'JCF', 'Node.js', 'Express.js', 'Mongoose', 'RESTful APIs', 'Tailwind'],
    },
    {
      title: 'Tools/Platforms',
      icon: <Layers size={20} color="var(--accent)" />,
      skills: ['MySQL', 'Git', 'GitHub', 'Docker', 'Kubernetes', 'Postman'],
    },
    {
      title: 'Fundamentals',
      icon: <Database size={20} color="var(--accent)" />,
      skills: ['DSA', 'Oops', 'DBMS', 'Operating System', 'Computer Networks'],
    },
    {
      title: 'Soft Skills',
      icon: <Users size={20} color="var(--accent)" />,
      skills: ['Leadership', 'Problem-Solving', 'Team Player', 'Adaptability', 'Project Management'],
    },
  ];

  return (
    <div className="section fade-in">
      <h2>Technical Arsenal</h2>
      <p style={{ color: 'var(--muted)', marginBottom: '2.5rem' }}>
        A comprehensive breakdown of the tools and technologies I use to build robust applications.
      </p>

      <div className="skills-grid" style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-card fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="skill-header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <div className="skill-bars" style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '1rem' }}>
              {category.skills.map((skill, i) => {
                const percent = 75 + (i * 7) % 20; 
                return (
                  <div key={i} className="skill-bar-container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 500 }}>{skill}</span>
                      <span style={{ color: 'var(--muted)' }}>{percent}%</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(150, 150, 150, 0.2)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div className="skill-progress" style={{ width: `${percent}%`, height: '100%', background: 'var(--accent-gradient)', borderRadius: '999px', transformOrigin: 'left', animation: `progressGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.15}s both` }}></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

