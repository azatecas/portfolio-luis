import React, { useState, useEffect } from 'react';

const myEmail = '"luispepen15';
const gmail = '@gmail';
const com = '.com"';



const Contact = () => {

    const [email, setEmail] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })

    useEffect(() => {
        console.log(email)
    }, [email]);

    const handleChange = (e) => {
        setEmail({
            ...email,
            [e.target.name]:e.target.value,
        })
    }

    return(
        <div id="contact" className="contact">
            <h3>Contact</h3>
            <div className="form-cont">
                <form>
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
                    <button>Send</button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact;