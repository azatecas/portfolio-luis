import React, { useState, useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import moon from '../img/moon-icon.svg';
import sun from '../img/sun-icon.svg';





const NavBar = ({isDark, setIsDark}) => {
    const [darkMode, setDarkMode] = useDarkMode('dark', false);
    const [navColor, setNavColor ]= useState(false);




    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
        setIsDark(!isDark);
        //sets navbar background color based if darkmode is set or not
        if(window.localStorage.getItem('dark') !== 'false'){
            // console.log('should be black');
            const myNav = document.querySelector('nav');
            myNav.classList.add('nav-light');
            myNav.classList.remove('nav-dark')

            const hamMenu = document.querySelector('.nav-links');
            hamMenu.classList.remove('nav-mb-dark')
            hamMenu.classList.add('nav-mb-light')
            

        } else {
            const myNav = document.querySelector('nav');
            myNav.classList.add('nav-dark');
            myNav.classList.remove('nav-light');

            const hamMenu = document.querySelector('.nav-links');
            hamMenu.classList.add('nav-mb-dark');
            hamMenu.classList.remove('nav-mb-light');
        }
    }

    const handleScroll = e => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200) {
                setNavColor(true);                

                //sets navbar background color based if darkmode is set or not
                if(window.localStorage.getItem('dark') === 'true'){

                    const myNav = document.querySelector('nav');
                    myNav.classList.add('nav-light');
                    myNav.classList.remove('nav-dark');
                } else {
                    const myNav = document.querySelector('nav');
                    myNav.classList.add('nav-dark');
                    myNav.classList.remove('nav-light');
                }
            }else {
                setNavColor(false);
            }
        })
    }

    const toggleMenu = (e) => {
        const hamMenu = document.querySelector('.nav-links');
        hamMenu.classList.add('nav-links-mobile');
        hamMenu.classList.toggle('nav-links-mb');
        const x = document.querySelector('.menu')
        x.classList.toggle('change');
    }

    
    useEffect(() => {
        handleScroll();
        if(window.localStorage.getItem('dark') !== 'true'){

            const hamMenu = document.querySelector('.nav-links');
            hamMenu.classList.add('nav-mb-dark')
            hamMenu.classList.remove('nav-mb-light')
        } else {
            const hamMenu = document.querySelector('.nav-links');
            hamMenu.classList.remove('nav-mb-dark')
            hamMenu.classList.add('nav-mb-light')
        }
    }, []);
    
    return (
        <nav className={navColor ? "nav" : "nav scroll-clear"}  id="navbar" onScroll={handleScroll}>
            <div className="nav-logo">
                <h1 id='logo'>Luis Pepen's Portfolio</h1>
            </div>
            <div className="menu" onClick={toggleMenu}>
                <div className="bar1" ></div>
                <div className="bar2" ></div>
                <div className="bar3" ></div>
            </div>
            <div className="nav-links nav-links-mb" onClick={toggleMenu}>
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