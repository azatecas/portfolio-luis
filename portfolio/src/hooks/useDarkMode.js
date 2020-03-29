  
import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = (key, initialValue) => {

    const [ darkMode, setDarkMode ] = useLocalStorage(key, initialValue)
    useEffect(()=>{
        // darkMode ? document.body.header.classList.add("dark-mode") :
        // document.body.classList.remove("dark-mode");
        if(darkMode){
            const mysect = document.querySelector('#jumbotron')
            mysect.classList.add('dark-mode');
        } else {
            const mysect = document.querySelector('#jumbotron');
            mysect.classList.remove('dark-mode');
        }


    },[darkMode])

    return [ darkMode, setDarkMode ]
}

export default useDarkMode;