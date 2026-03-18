import React from 'react';
import './css/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content-layout">
          <p className="about-text">
            I am a passionate <span className="highlight">Fullstack Developer</span> with a strong foundation in modern web technologies.
            I specialize in the MERN stack (MongoDB, Express, React, Node.js) and enjoy bridging the gap between elegant frontend interfaces and robust backend architectures.
          </p>
          {/* <p className="about-text">
            My journey in software development is driven by a constant desire to learn and solve complex problems. Whether it's integrating AI features, building real-time collaborative tools, or optimizing database queries, I take pride in writing clean, scalable, and maintainable code.
          </p> */}
          <p className="about-text">
            When I am not in front of my code editor, I'm constantly exploring the latest trends in the tech world. My goal is to always stay ahead of the curve and craft <span className="highlight">innovative digital solutions</span> that leave a lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
