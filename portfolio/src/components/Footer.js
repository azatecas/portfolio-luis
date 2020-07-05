import React from 'react';



const Footer = () => {

    let currDate = new Date();
    let currYear = currDate.getFullYear();

    return(
        <footer>
            <p>&copy; Copyright {currYear} Luis Pepen</p>
        </footer>
    )
}


export default Footer;