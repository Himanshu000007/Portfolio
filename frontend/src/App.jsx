import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
  const [view, setView] = useState('home');

  const renderView = () => {
    switch (view) {
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar currentView={view} onChangeView={setView} />
      <main className="main">{renderView()}</main>
    </>
  );
};

export default App;
