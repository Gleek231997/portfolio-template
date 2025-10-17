import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {

  const phoneNumber = '+(229) 302-9469'; // Replace with your number
  const emailAddress = 'glory.ekbote@rutgers.edu'; // Replace with your email

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Feel free to reach out via phone or email:</p>
          <div className="contact-buttons">
            <a href={`tel:${phoneNumber}`} className="contact-btn phone-btn">
              📞 {phoneNumber}
            </a>
            <a href={`mailto:${emailAddress}`} className="contact-btn email-btn">
              ✉️ {emailAddress}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
