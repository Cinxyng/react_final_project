import React, { useState } from 'react';
import './Contact.css'

const Contact = function() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-page">
      <div className="contact-card">
        <h2>Get in Touch</h2>

        {/* Contact Details & Socials */}
        <div className="contact-info">
          <p>Email: <a href="mailto:hello@example.com">cindy.ng@redalphacyber.com</a></p>
          <p>Phone: +65 0000 0000</p>
          <p>Location: Singapore</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* Message Form */}
        {submitted ? (
          <p className="success-text">Message sent! Thank you.</p>
        ) : (
          <form onSubmit={handleSubmit} className="simple-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject (Optional)" />
            <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-btn">Send</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;