import React from 'react';
import './css/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Infotact',
      period: '2025 - 2025',
      description: 'Developed and maintained web applications using React and Node.js.'
    },
    {
      title: 'Full Stack with AI Bootcamp',
      company: 'NoviTech',
      period: '2025 (2-hour session)',
      description: 'Attended an intensive 2-hour training on Fullstack development integrated with AI concepts.',
      file: "/MRIDUL M.pdf"
    },
    {
      title: 'Full Stack ',
      company: 'NoviTech',
      period: '2025 - 2025',
      description: 'Built responsive user interfaces and collaborated with design teams.'
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Softroniics',
      period: '2024 - 2025',
      description: 'Built responsive user interfaces and collaborated with design teams.'
    },
  ];

  return (
    <section className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
                <p className="experience-description">{exp.description}</p>
                
                {/* Show certificate button if file exists */}
                {exp.file && (
                  <a 
                    href={exp.file} 
                    download 
                    className="btn btn-primary certificate-btn"
                  >
                    Credential 
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

export default Experience;
