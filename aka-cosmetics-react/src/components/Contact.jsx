import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Do you have any query or request to ask? Go ahead! We will respond to you shortly!
      </p>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>
        <textarea placeholder="Message" required />
        <button className="send-button" type="submit">Send</button>
      </form>

      <div className="contact-footer">
        <p><FaEnvelope /> support@akacosmetics.com</p>
        <p><FaPhoneAlt /> +123 456 7890</p>
        <p><FaFacebookF /> Facebook</p>
        <p><FaInstagram /> Instagram</p>
      </div>
    </section>
  );
};

export default Contact;
