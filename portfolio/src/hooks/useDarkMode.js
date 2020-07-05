import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {

    const [ darkMode, setDarkMode ] = useLocalStorage(key, initialValue);

    useEffect(() => {
        let App = document.querySelector('.App');
        let content = document.querySelector('.content');
        let section = document.querySelector('#jumbotron');
        let header2 = document.querySelector('#header-h2');
        let lpm = document.querySelector('#lpm');
        let logo = document.querySelector('#logo');
        let pencil = document.querySelector('#pencil');
        let sun = document.querySelector('#sun');
        let moon = document.querySelector('#moon');
        let skills = document.querySelector('#skills');

        if(darkMode){
            App.classList.add('dark-mode');
            content.classList.add('content-lg');
            section.classList.add('dark-mode');
            pencil.classList.add('fas-dark');
            sun.classList.remove('toggle-moon-sun');
            moon.classList.add('toggle-moon-sun');
            logo.classList.add('nav-logo-dm');
            header2.classList.add('author-dm');
            lpm.classList.add('author-lp');
            skills.classList.add('skills-dm');
            document.documentElement.style.setProperty('--modal-card-bg', 'rgb(246,231,225)');
            document.documentElement.style.setProperty('--sec-content-bg', 'rgb(251, 222, 213)');
            document.documentElement.style.setProperty('--content-bg', 'rgb(250, 250, 250)');
            document.documentElement.style.setProperty('--content-font-color', 'rgb(19, 59, 104)');
            document.documentElement.style.setProperty('--main-font-color', 'rgb(0, 0, 0)');
            document.documentElement.style.setProperty('--main-bg', 'rgb(0, 141, 235)');
            document.documentElement.style.setProperty('--btn-color', 'rgb(0, 141, 235)');
            document.documentElement.style.setProperty('--input-color', 'rgb(255, 255, 255)');


        } else {
            App.classList.remove('dark-mode');
            content.classList.remove('content-lg');
            section.classList.remove('dark-mode');
            pencil.classList.remove('fas-dark');
            moon.classList.remove('toggle-moon-sun');
            sun.classList.add('toggle-moon-sun');
            logo.classList.remove('nav-logo-dm');
            header2.classList.remove('author-dm');
            lpm.classList.remove('author-lp');
            skills.classList.remove('skills-dm');
            document.documentElement.style.setProperty('--modal-card-bg', 'rgb(53, 69, 105)');
            document.documentElement.style.setProperty('--sec-content-bg', 'rgb(53, 69, 105)');
            document.documentElement.style.setProperty('--content-bg', '#182952');
            document.documentElement.style.setProperty('--content-font-color', 'rgb(228, 228, 228)');
            document.documentElement.style.setProperty('--main-font-color', 'rgb(228, 228, 228)');
            document.documentElement.style.setProperty('--main-bg', 'rgb(0, 0, 49)');
            document.documentElement.style.setProperty('--btn-color', 'rgb(0, 0, 49)');

            document.documentElement.style.setProperty('--input-color', 'rgb(206, 206, 206)');
        }

    },[darkMode])

    return [ darkMode, setDarkMode ]
}

export default useDarkMode;