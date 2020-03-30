  
import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = (key, initialValue) => {

    const [ darkMode, setDarkMode ] = useLocalStorage(key, initialValue);

    

    useEffect(()=>{
        let section = document.querySelector('#jumbotron');
        let header2 = document.querySelector('#header-h2');
        let lpm = document.querySelector('#lpm');
        let logo = document.querySelector('#logo');
        let pencil = document.querySelector('#pencil');
        let sun = document.querySelector('#sun');
        let moon = document.querySelector('#moon');


        if(darkMode){
            section.classList.add('dark-mode');
            pencil.classList.add('fas-dark');
            sun.classList.remove('toggle-moon-sun');
            moon.classList.add('toggle-moon-sun');
            logo.classList.add('nav-logo-dm');
            header2.classList.add('author-dm');
            lpm.classList.add('author-lp');


        } else {
            section.classList.remove('dark-mode');
            pencil.classList.remove('fas-dark');
            moon.classList.remove('toggle-moon-sun');
            sun.classList.add('toggle-moon-sun');
            logo.classList.remove('nav-logo-dm');
            header2.classList.remove('author-dm');
            lpm.classList.remove('author-lp');
        }


    },[darkMode])

    return [ darkMode, setDarkMode ]
}

export default useDarkMode;