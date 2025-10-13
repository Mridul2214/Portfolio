import React from "react";
import "./css/Hero.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-image">
          <img
            src="/WhatsApp Image 2025-10-10 at 6.21.00 PM.jpeg"
            alt="Mridul M"
          />
        </div>

<div className="hero-socials">
  <a
    href="mailto:mridul1422@gamil.com"
    className="social-icon"
    title="Email"
  >
    <i className="fas fa-envelope"></i>
  </a>
  <a href="tel:7356159878" className="social-icon" title="Phone">
    <i className="fas fa-phone"></i>
  </a>
  <a
    href="https://github.com/Mridul2214/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    title="GitHub"
  >
    <i className="fab fa-github"></i>
  </a>
</div>

      </div>

      {/* Right Section */}
      <div className="hero-right">
        <div className="hero-content">
          <h1 className="hero-name">Mridul M</h1>
          <h2 className="hero-title">Fullstack Developer</h2>
          <p className="hero-description">
            I build scalable, user-friendly, and modern web applications using
            the MERN stack — bringing ideas to life with clean code and creative
            UI.
          </p>

          <div className="hero-buttons">
            <a href="/Mridul-Resume.pdf" className="btn btn-primary" download>
              Download CV
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
