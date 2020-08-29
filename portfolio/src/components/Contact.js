import React, { useState } from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [email, setEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sendingError, setSendingError] = useState(null);

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const { register, handleSubmit } = useForm();

  const [reCaptchaVerified, setReCaptchaVerified] = useState(false);

  const onSubmit = (data) => {
    if (reCaptchaVerified === true) {
      setSending(true);

      Axios.post(process.env.REACT_APP_CONTACT, data)
        .then((res) => {
          setSent(true);
          setEmail({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setSending(false);
        })
        .catch((err) => {
          setSending(false);
          setSendingError("ERROR SENDING YOUR MESSAGE, TRY AGAIN LATER");
        });
    } else {
      alert("Please Verify You Are Not a Robot ");
    }
  };

  const handleChange = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };

  const reCaptcha = () => {
    setReCaptchaVerified(true);
  };

  return (
    <div id="contact" className="contact">
      <h3>Contact</h3>
      {!sent ? (
        <div style={{ width: "100%" }}>
          {!sending ? (
            <div style={{ width: "100%" }}>
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
                        ref={register({ required: true, maxLength: 80 })}
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
                        ref={register({
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
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
                        ref={register({ required: true, maxLength: 100 })}
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
                        ref={register({ required: true })}
                        required
                      />
                    </div>
                  </div>
                  <div style={{ marginTop: "2vh" }}>
                    <ReCAPTCHA
                      sitekey={process.env.REACT_APP_RECAPTCHA}
                      onChange={reCaptcha}
                    />
                  </div>
                  <button type="submit">Send ✉</button>
                  {sendingError ? <p>{sendingError}</p> : null}
                </form>
              </div>
            </div>
          ) : (
            <div className="sending-message">
              <h6>Sending Your Message!</h6>
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h6 style={{ color: "rgb(94, 219, 167)" }}>
            Your message has been sent!
          </h6>
        </div>
      )}
    </div>
  );
};

export default Contact;
