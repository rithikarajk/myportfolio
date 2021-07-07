import React from 'react';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import contactVector from './../../assets/contact_anime.png';
import './Contact.css';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';


const Contact = () => {
  return(
  <div className='section-container'>
      <Header heading="Get in touch."
      />
      {/*Form section */}
      <div className="contact-form-container">
        <form className="contact-form"
              action="https://formspree.io/f/mdoydvqw"
              method="POST" 
        >
          {/*Email ID Input */}
           <input
              type="email"
              placeholder="Your Email ID"
              name="_replyto"
              className="input-box email-input"/>
              {/* Email body*/}
              <textarea 
                 type="text"
                 placeholder="Your Message"
                 name="message"
                 className="input-box body-input">

              </textarea>
              {/*Submit button */}
              <button type="submit" className="contact-btn">
                Send Email
              </button>
        </form>
      </div>
      {/*Social icons */}
      <div className="social-icons-container">
        <a href="https://github.com/rithikarajk" className="social-icon">
          <img src={github} alt="social" />
        </a>
        <a href="https://linkedin.com/in/rithika-raj-k-4377b21a5" className="social-icon">
          <img src={linkedin} alt="social" />
        </a>
      </div>
      <FooterLink phrase="Read more " toAdress="/about" link="about me." 
      />
      <div className="vector-frame">
            <img 
            src={contactVector}
            alt='vector'
            className='about-vector'
            />
      </div>
  </div>

  );
};
export default Contact;