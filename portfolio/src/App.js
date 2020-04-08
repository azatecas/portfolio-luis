import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import NavBar from './components/NavBar';
import ParticleBg from './components/ParticleBg';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {

  const [ isDark, setIsDark ] = useState(true);

    useEffect(() => {
      if(window.localStorage.getItem('dark') === 'true') {
        setIsDark(!isDark);  
        }  
    },[] );

  return (
    <div className="App">        
        <ParticleBg />
        <NavBar isDark={isDark} setIsDark={setIsDark}/>
        <Title />
        <div className="content">
          <About isDark={isDark} setIsDark={setIsDark}/>
          <Skills />
          <Portfolio />
          <Contact />
        </div>      
    </div>
  );
}

export default App;
