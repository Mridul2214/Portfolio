import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Studies from './components/Studies';
import Skillsection from './components/Skillsection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const projectCards = document.querySelectorAll('.project-card');
    const studyCards = document.querySelectorAll('.study-card');
    const experienceItems = document.querySelectorAll('.experience-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    projectCards.forEach((card) => observer.observe(card));
    studyCards.forEach((card) => observer.observe(card));
    experienceItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navigation />
      <section id="hero" className="hero-section">
        <Hero />
      </section>
      <section id="about" className="section slide-left">
        <About />
      </section>
      <section id="experience" className="section slide-">
        <Experience />
      </section>
      <section id='skill' className='section slide-left'>
        <Skillsection/>
      </section>
      <section id="projects" className="section slide-left">
        <Projects />
      </section>
      <section id="studies" className="section slide-left">
        <Studies />
      </section>
      <section id="contact" className="section slide-left">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
