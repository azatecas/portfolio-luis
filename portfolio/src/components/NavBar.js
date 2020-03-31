import React, { useState, useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import moon from '../img/moon-icon.svg';
import sun from '../img/sun-icon.svg';





const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode('dark', false);
    const [navColor, setNavColor ]= useState(false);




    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    const handleScroll = e => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300) {
                setNavColor(true);
            }else {
                setNavColor(false);
            }
        })
    }
    
    useEffect(() => {
        handleScroll();
    }, []);
    



    return (
        <nav className={navColor ? "nav scroll" : "nav scroll-clear"} id="navbar" onScroll={handleScroll}>
            <div className="nav-logo">
                <h1 id='logo'>Luis Pepen's Portfolio</h1>
            </div>
            <div className="nav-links">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>

                <div className="dm-cont" onClick={toggleMode}>
                    <div id="moon" className="dm-moon" >
                        <img 
                            src={moon} 
                            alt='dark_mode_toggle'
                            width="50px"
                        />
                     </div>

                     <div id="sun" className="dm-sun" >
                        <img 
                            src={sun} 
                            alt='dark_mode_toggle'
                            width="50px"
                        />
                     </div>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;