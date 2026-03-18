import React, { useEffect } from "react";
import "./css/Hero.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = () => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      const textMy = document.querySelector('.bg-text-my');
      const textPortfolio = document.querySelector('.bg-text-portfolio');
      const textName = document.querySelector('.bg-text-name');

      if (textMy) textMy.style.transform = `rotate(-10deg) translate(-150px, ${scrollY * 0.15}px)`;
      if (textPortfolio) textPortfolio.style.transform = `translateY(${scrollY * 0.3}px)`;
      if (textName) textName.style.transform = `translateY(${scrollY * 0.4}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      {/* Background overlapping texts */}
      <div className="hero-bg-text-container">
         <span className="bg-text-my">My</span>
         <span className="bg-text-portfolio">PORTFOLIO</span>
         <span className="bg-text-name">Mridul M</span>
      </div>

      <div className="hero-content-wrapper">
        
        {/* Left side text intro */}
        <div className="hero-text-content">
          {/* <p className="hero-welcome">
            My Name is <span className="text-blue">Mridul</span> and I am a Freelance
          </p> */}
          <div className="hero-titles">
            <h1 className="title-bold">Fullstack</h1>
            <h1 className="title-script">developer.</h1>
          </div>

          <div className="hero-about">
            {/* <h3 className="about-subtitle">About <span className="text-blue">Me</span></h3> */}
            <p className="about-text">
              I am a fullstack developer with confidence in my abilities and the
              capacity to work effectively under tight deadlines. My passion lies in
              creating modern web applications and scalable solutions. Each day, I
              strive to push the boundaries of my creativity and deliver
              outstanding results.
            </p>
          </div>

          <div className="hero-actions">
            <a href="/Mridul-Resume.pdf" className="btn-hire" download>
              Hire Mridul <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Right side Image with bottom white fade */}
        <div className="hero-image-wrapper">
          {/* Main portrait */}
          <img
            src="/Portrait.png"
            alt="Mridul M"
            className="portrait"
          />
          {/* Subtle name placement, if desired, or skip it since it's in the background */}
          <div className="portrait-fade"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
