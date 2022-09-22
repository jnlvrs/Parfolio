import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Connect.css";
import * as BsIcons from "react-icons/bs"
import * as IoIcons from "react-icons/io"
function Connect() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_lvodjop", "template_iuiggxn", form.current, "_heA5qAiONAxU3dfE")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
      });
      toggle()
      e.target.reset()
  };

  const [success, setSuccess] = useState(true);
  const toggle = () => setSuccess(!success);
  
  return (
    <div id="Connect" className="connect-container bg3">
      <div className="formSection canvas bxs">
        <div className="info bg4">
          <h2>Have Comments?</h2>
          <p>
            I would love to know your thoughts.  Feel free to fill out this form as a way to connect with me and offer any feedback and/or questions.
          
          </p>
        </div>
        <form ref={form} method="POST" className="sendForm bg2" name="signupform" onSubmit={sendEmail} >
          <h2>Lets Connect!</h2>
          <div className="form-input">
            <div>
              <label htmlFor="name" />
              <input type="text" className="inputFields hl1 bg3"  id="name" name="name"  placeholder="Name" required />
            </div>
            <div>
              <label htmlFor="email" />
              <input type="email" className="inputFields hl1 bg3" id="email" name="email" placeholder="Email" required />
            </div>
            <div>
              <label htmlFor="message" />
              <textarea type="text" className="inputFields hl1 bg3" id="message" name="message" placeholder="Message" required />
            </div>
            <div className="center-btn-banner">
              {success ? 
              <input type="submit" className="send-btn bg3" id="send-btn" name="send" alt="send" value="Send"/> 
              : 
              <div className="banner success">
                <div className="check-message">
                  <BsIcons.BsCheckCircleFill size={25} className="success-check"/>
                  <div className="banner-message">Message Sent!</div>
                </div>
                <button className="banner-close" onClick={toggle}><IoIcons.IoMdClose size={30} /></button>
              </div> }  
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Connect;
