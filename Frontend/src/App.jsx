import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Studies from './components/Studies';
import Skillsection from './components/Skillsection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'; // Standard Lenis styles
import './App.css';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

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

    return () => {
      lenis.destroy();
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="app">
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      ></div>
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
