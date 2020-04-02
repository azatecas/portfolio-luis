import React from 'react';

const myEmail = '"luisp237';
const gmail = '@gmail';
const com = '.com"';

const showEmail = () => {
    const target = document.querySelector('#email');
    target.innerText = myEmail + gmail + com;
}

const Contact = () => {
    return(
        <div className="skills">
            <h3>Contact</h3>
            <div style={{paddingBottom:"10vh"}}>
                <p>Contact Form Coming soon...</p>
                <p> In the Meantime reachme at:</p>
                <div id="email"></div>
                <button style={{margin:"auto", height:"3vh"}}onClick={showEmail}>Display Email</button>
            </div>
            
        </div>
    )
}

export default Contact;