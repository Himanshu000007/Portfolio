import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun, Palette } from 'lucide-react';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const [colorTheme, setColorTheme] = useState('purple');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-color', colorTheme);
  }, [colorTheme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const cycleColorTheme = () => {
    const themes = ['purple', 'blue', 'emerald'];
    const nextIndex = (themes.indexOf(colorTheme) + 1) % themes.length;
    setColorTheme(themes[nextIndex]);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">HK</div>
      <nav className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>
          Skills
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
          Projects
        </NavLink>
        <NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>
          Education
        </NavLink>
        <NavLink to="/training" className={({ isActive }) => (isActive ? 'active' : '')}>
          Training
        </NavLink>
        <NavLink to="/certification" className={({ isActive }) => (isActive ? 'active' : '')}>
          Certification
        </NavLink>
        <NavLink to="/extra-curricular" className={({ isActive }) => (isActive ? 'active' : '')}>
          Coding Profiles
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
      </nav>
      <div className="navbar-actions" style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
        <button onClick={cycleColorTheme} className="theme-toggle" aria-label="Change color theme">
          <Palette size={18} />
        </button>
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle dark/light mode">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;

