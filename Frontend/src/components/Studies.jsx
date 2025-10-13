import React from 'react';
import './css/Studies.css';

const Studies = () => {
  const studies = [
    {
      title: 'Bachelor in Science',
      institution: 'Calicut University ',
      stream:"BSC Computer Science",
      period: '2022 - 2025',
      // description: 'Focused on software development, algorithms, and data structures. Graduated with honors.'
    },
    {
      title: 'Higher Secondary',
      institution: 'BEM HSS Palakkad',
      stream:"Computer Science",
      period: '2020 - 2022',
      // description: 'Intensive program covering frontend and backend technologies, including React, Node.js, and databases.'
    },
    {
      title: 'SSLC',
      institution: 'CAHSS Kuzhalmannam',
      stream:"",
      period: '2020',
      // description: 'Deep dive into modern JavaScript features, frameworks, and best practices for scalable applications.'
    }
  ];

  return (
    <section className="studies">
      <div className="studies-container">
        <h2 className="section-title">Studies</h2>
        <div className="studies-grid">
          {studies.map((study, index) => (
            <div key={index} className="study-card">
              <div className="study-content">
                <h3 className="study-title">{study.title}</h3>
                <p className="study-institution">{study.institution}</p>
                <p className="study-stream">{study.stream}</p>
                <p className="study-period">{study.period}</p>
                <p className="study-description">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studies;
