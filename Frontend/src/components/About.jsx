import React from 'react';
import './css/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I am a passionate <span className="highlight">Fullstack Developer</span> with expertise in building
          modern web applications. I love creating <span className="highlight">clean, efficient, and user-friendly solutions</span>.
          With a background in computer science, I enjoy tackling complex problems and learning new technologies.
          When I'm not coding, you can find me exploring new places or reading about the latest in tech.
        </p>
      </div>
    </section>
  );
};

export default About;
