// ContactForm.js
import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name*</label>
        <input type="text" id="firstName" placeholder="First Name*" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Mail Address</label>
        <input type="email" id="email" placeholder="Mail Address" />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="tel" id="phoneNumber" placeholder="Phone Number" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Enter Message</label>
        <textarea id="message" placeholder="Enter Message"></textarea>
      </div>
      <button className="submit-btn">Submit Request</button>
    </div>
  );
};

export default ContactForm;
