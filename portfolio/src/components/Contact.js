import React, { useState } from 'react';
import Axios from 'axios';

const Contact = () => {

    const [email, setEmail] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })

    const handleChange = (e) => {
        setEmail({
            ...email,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios
            .post(process.env.REACT_APP_CONTACT_URL, email)
            .then(res => {
                console.log("SUCCESS",res);
                setEmail({
                    name:'',
                    email:'',
                    subject:'',
                    message:''
                })
            })
            .catch(err => {
                console.log("ERROR",err);
            })

    }

    return(
        <div id="contact" className="contact">
            <h3>Contact</h3>
            <div className="form-cont">
                <form onSubmit={handleSubmit}>
                    <div className="form-name-email">
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={email.name}
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@email.com"
                                value={email.email} 
                                onChange={handleChange}
                                required   
                                />
                        </div>
                    </div>
                    <div className="form-subject-message">
                        <div>
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={email.subject}
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div>                        
                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder="You message..."
                                value={email.message}
                                onChange={handleChange}
                                required
                                />
                        </div>
                    </div>
                    <button>Send ✉</button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact;