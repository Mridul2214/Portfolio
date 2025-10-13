import React from 'react';
import './css/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section section" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
          <div className="contact-details">
            <a href="mailto:mridul1422@gmail.com" className="contact-item" title="Email">
              <i className="fas fa-envelope"></i>
              <span>mridul1422@gmail.com</span>
            </a>
            <a href="tel:7356159878" className="contact-item" title="Phone">
              <i className="fas fa-phone"></i>
              <span>+91 7356159878</span>
            </a>
            <a href="https://github.com/Mridul2214/" target="_blank" rel="noopener noreferrer" className="contact-item" title="GitHub">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mridul-m-131011262/" className="contact-item" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
