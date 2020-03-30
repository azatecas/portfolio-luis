import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [ storedValue, setStoredValue ] = useState(()=> {
        const checkStorage = window.localStorage.getItem(key);
        if (checkStorage) {
            return JSON.parse(checkStorage)
        } else {
            return initialValue;
        }        
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [ storedValue, setValue ];

}

export default useLocalStorage;