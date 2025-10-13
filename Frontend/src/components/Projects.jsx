import React from 'react';
import './css/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'InsightFlow',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YsxR0DzJuB1gsUo2AIeKtVjqEPG7mqIU1aaiY6UL_LzKv0K1mKKHC-MijOumCIG5dAo&usqp=CAU',
      description: 'InsightFlow is a full-stack social platform built with the MERN stack, enabling users to share and interact with posts, blogs, and videos. Integrated AI tools help generate smart summaries, titles, and tags.',
      github: 'https://github.com/Mridul2214/InsightFlow'
    },
    {
      title: 'Project Management System',
      image: 'https://kantata.marketing/wp-content/uploads/2022/07/man-on-tablet-with-graphs-and-numbers-floating-above-the-tablet.jpg',
      description: 'An AI-powered collaboration platform with MERN stack, featuring AI chatbot, To-Do manager, interactive whiteboard, document editor, group chat system, and analytics for team productivity.',
      github: 'https://github.com/Mridul2214/CollabAi'
    },
    {
      title: 'DailyTruth News Website',
      image: 'https://imgproxy.divecdn.com/EvnX6stkYb1D6zTW97wPQWK2Y2zLvUh23rEqDGikXVk/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9HZXR0eUltYWdlcy0xMzg5MjM5ODA0LmpwZw==.webp',
      description: 'A news aggregator website built with modern web technologies. Features article categories, AI-powered summaries, search functionality, and smooth UI for a great reading experience.',
      github: 'https://github.com/Mridul2214/DailyTruth'
    },
    {
      title: 'Blood Donor Site',
      image: 'https://northcentralsurgical.com/wp-content/uploads/2025/06/Transforming-Lives-The-Powerful-Impact-of-Donating-Blood--2000x1000.jpeg',
      description: 'A platform to connect blood donors and recipients. Users can register, search donors by blood group and location, and request donations. The site promotes community engagement and saves lives.',
      // github: '#'
    },
    {
      title: 'eLearn Platform',
      image: 'https://thumbs.dreamstime.com/b/stack-books-laptop-computer-representing-education-knowledge-internet-rests-modern-symbolizing-accessible-384634510.jpg',
      description: 'An online learning management system for colleges. Features courses, video lectures, assignments, quizzes, and progress tracking to facilitate smooth e-learning experience.',
      // github: '#'
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ marginTop: '10px', display: 'inline-block', width:"100px", height:"50px"}}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
