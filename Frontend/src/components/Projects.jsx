import React from 'react';
import './css/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'InsightFlow',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YsxR0DzJuB1gsUo2AIeKtVjqEPG7mqIU1aaiY6UL_LzKv0K1mKKHC-MijOumCIG5dAo&usqp=CAU',
      description: 'A social platform built with the MERN stack for modern interactions.',
      github: 'https://github.com/Mridul2214/InsightFlow'
    },
    {
      title: 'CollabAi System',
      image: 'https://kantata.marketing/wp-content/uploads/2022/07/man-on-tablet-with-graphs-and-numbers-floating-above-the-tablet.jpg',
      description: 'AI-powered project management and collaboration for teams.',
      github: 'https://github.com/Mridul2214/CollabAi'
    },
    {
      title: 'DailyTruth News',
      image: 'https://imgproxy.divecdn.com/EvnX6stkYb1D6zTW97wPQWK2Y2zLvUh23rEqDGikXVk/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9HZXR0eUltYWdlcy0xMzg5MjM5ODA0LmpwZw==.webp',
      description: 'Modern news aggregator with category filters and smart summaries.',
      github: 'https://github.com/Mridul2214/DailyTruth'
    },
    {
      title: 'Blood Donor Hub',
      image: 'https://www.shutterstock.com/image-photo/doctor-hand-holding-blood-bank-600nw-2155694243.jpg',
      description: 'Connecting donors and recipients in a secure health ecosystem.',
    },
    {
      title: 'eLearn Platform',
      image: 'https://thumbs.dreamstime.com/b/stack-books-laptop-computer-representing-education-knowledge-internet-rests-modern-symbolizing-accessible-384634510.jpg',
      description: 'Streamlining education through interactive digital courses.',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-hover-info">
                  <p className="project-description">{project.description}</p>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      GitHub
                    </a>
                  )}
                </div>
                <div className="project-title-overlay">
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
