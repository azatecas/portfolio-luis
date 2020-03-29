import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import moon from '../img/moon-icon.svg';
import sun from '../img/sun-icon.svg';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode('dark', false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
        <nav className="nav">
            <div className="nav-logo">
                <h1>Luis Pepen's Portfolio</h1>
            </div>
            <div className="nav-links">
                <a href="#">About</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>

                <div className="dm-cont" onClick={toggleMode}>
                    <div className="dm-moon" >
                        <img 
                            src={moon} 
                            alt='dark_mode_toggle'
                            width="50px"
                        />
                     </div>

                     <div className="dm-sun" >
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