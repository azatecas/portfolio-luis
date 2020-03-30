import React from 'react';
// import './Pencil.css';
import './App.css';

import Title from './components/Title';
import NavBar from './components/NavBar';
import ParticleBg from './components/ParticleBg';
import About from './components/About';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
        
        <ParticleBg />
        <NavBar />
        <Title />
        <div className="content">
          <About />
          <Skills />
        </div>
        
        
    </div>
  );
}

export default App;
