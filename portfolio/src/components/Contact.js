import React, { useState } from 'react';
import Axios from 'axios';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const [email, setEmail] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })
    const [sendingError, setSendingError] = useState(null)

    const [sent, setSent] = useState(false);

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        Axios
            .post('https://my-portfolio-luis.herokuapp.com/api/contact', data)
            .then(res => {
                setSent(true);
                setEmail({
                    name:'',
                    email:'',
                    subject:'',
                    message:''
                })
            })
            .catch(err => {
                setSendingError("ERROR SENDING YOUR MESSAGE, TRY AGAIN LATER");
            })
    }

    const handleChange = (e) => {
        setEmail({
            ...email,
            [e.target.name]:e.target.value,
        })
    }

    return(
        <div id="contact" className="contact">
            <h3>Contact</h3>
            {!sent ? 
            <div className="form-cont">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-name-email">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={email.name}
                                onChange={handleChange}
                                ref={register({required: true, maxLength: 80})} 
                                required
                                />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="example@email.com"
                                value={email.email} 
                                onChange={handleChange}
                                ref={register({required: true, pattern: /^\S+@\S+$/i})} 
                                required   
                                />
                        </div>
                    </div>
                    <div className="form-subject-message">
                        <div>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                value={email.subject}
                                onChange={handleChange}
                                ref={register({required: true, maxLength: 100})}
                                required
                                />
                        </div>
                        <div>                        
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="You message..."
                                value={email.message}
                                onChange={handleChange}
                                ref={register({required: true})}
                                required
                                />
                        </div>
                    </div>
                    <button type="submit">Send ✉</button>
                    {sendingError ? <p>{sendingError}</p> : null }
                </form>
            </div> 

            :

            <div>
                <h3>
                    Your message has been sent!
                </h3>
            </div>

            }
            
        </div>
    )
}

export default Contact;