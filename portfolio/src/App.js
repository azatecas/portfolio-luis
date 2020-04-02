import React from 'react';
import './App.css';
import Title from './components/Title';
import NavBar from './components/NavBar';
import ParticleBg from './components/ParticleBg';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {

  return (
    <div className="App">        
        <ParticleBg />
        <NavBar />
        <Title />
        <div className="content">
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </div>      
    </div>
  );
}

export default App;
