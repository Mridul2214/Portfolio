import React, { useEffect, useRef } from "react";
import "./css/skillsection.css";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaBrain } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiOpenai,
  SiVercel,
  SiPostman,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";

const SkillSection = () => {
  const skillItemsRef = useRef(null);

  const skills = [
    { name: "React.js", icon: <FaReact /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "SQL", icon: <DiSqllite /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "OpenAI API", icon: <SiOpenai /> },
    // { name: "Python AI Scripts", icon: <FaPython /> },
    { name: "AI Integration", icon: <FaBrain /> },
    { name: "Git & GitHub", icon: <FaGitAlt /> },
    // { name: "Postman", icon: <SiPostman /> },
    // { name: "Vercel / Netlify", icon: <SiVercel /> },
  ];

  // Clone skills to allow seamless scroll
  const allSkills = [...skills, ...skills];

  return (
    <section className="skills-section" id="skill">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skill-items-wrapper">
          <div className="skill-items" ref={skillItemsRef}>
            {allSkills.map((skill, idx) => (
              <div className="skill-item" key={idx}>
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
