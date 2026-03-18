import React from 'react';

const Navbar = ({ currentView, onChangeView }) => {
  const makeHandler = (target) => () => onChangeView(target);

  const isActive = (target) => (currentView === target ? ' active' : '');

  return (
    <header className="navbar">
      <div className="navbar-logo">HK</div>
      <nav className="navbar-links">
        <button className={isActive('home')} onClick={makeHandler('home')}>
          Home
        </button>
        <button className={isActive('skills')} onClick={makeHandler('skills')}>
          Skills
        </button>
        <button className={isActive('projects')} onClick={makeHandler('projects')}>
          Projects
        </button>
        <button className={isActive('education')} onClick={makeHandler('education')}>
          Education
        </button>
        <button className={isActive('contact')} onClick={makeHandler('contact')}>
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

