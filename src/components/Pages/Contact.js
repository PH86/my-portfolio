import React, { useState } from 'react'
import PageHeroSection from '../PageHeroSection';
import Img from '../../Images/img-02.jpg';
import './Contact.css';
import '../Button.css';


function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [signedUp, setSignedUp] = useState(false)
    // Make handle submit set a state which will hide the form and say welcome
    const handleSubmit = (e) => {
        e.preventDefault();
        setSignedUp(true)
    }


    return (<>

        <PageHeroSection
            src={Img}
            pageName="Contact Me"
            
        />

        <div className="contact-container">
            <div>
               <h2 className="contact-social-title">Feel free to get in touch at</h2>
               <div className="contact-social-container">
               <a href="mailto:peter.hodgson2011@gmail.com" >
              <i className='fas fa-envelope-open-text' /> </a> 
               <p>peter.hodgson2011@gmail.com</p>
               </div>
               <div className='social-icons'>


<div
  className='social-icon-link linkedin'
>
  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/peter-hodgson-beng-hons-541182a8/" >
  <i className='fab fa-linkedin' /> </a>
</div>
<div
  className='social-icon-link twitter'
>
  <a target="_blank" rel="noreferrer" href="https://twitter.com/PeterHo60669811" >
  <i className='fab fa-twitter' /> </a>
</div>
<div
  className='social-icon-link github'
>
  <a target="_blank" rel="noreferrer" href="https://github.com/PH86" >
  <i className='fab fa-github' /> </a>
</div>
<div
  className='social-icon-link fcc'
>
  <a target="_blank" rel="noreferrer" href="https://www.freecodecamp.org/fcc8934681b-f264-4cab-b10b-132d576e1010" >
  <i className='fab fa-free-code-camp' /> </a>
</div>
</div>
                {!signedUp && <article>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2>Please Enter Your Details</h2>
                        <div className="contact-form-control">

                            <label htmlFor="firstName"></label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="contact-form-control">

                            <label htmlFor="lastName"></label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter Surname"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="contact-form-control">

                            <label htmlFor="email"></label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="contact-form-control">
                            <label htmlFor="textarea"></label>
                            <textarea
                                type="textarea"
                                id="message"
                                name="message"
                                placeholder="Enter Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btns" buttonStyle="btn--primary"
                buttonSize="btn--large">Submit</button>

                    </form>
                </article>}
                {signedUp && <h1 className="contact-response">Thank You {firstName}, we will send our reply soon to you at {email}</h1>}
            </div>
            
           

        </div>  
    </>

    );
}

export default Contact;

