import React from "react";
import "./css/SkillSection.css";
import { FaReact, FaNodeJs, FaGitAlt, FaBrain } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";

const SkillSection = () => {
  const [parallax, setParallax] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 25; // Sensitivity
    const y = (clientY - top - height / 2) / 25;
    setParallax({ x, y });
  };

  const skills = [
    { name: "React.js", icon: <FaReact />, color: "yellow", rotation: "-5deg", top: "15%", left: "10%" },
    { name: "Node.js", icon: <FaNodeJs />, color: "blue", rotation: "3deg", top: "12%", left: "75%" },
    { name: "Express.js", icon: <SiExpress />, color: "pink", rotation: "-2deg", top: "35%", left: "82%" },
    { name: "MongoDB", icon: <SiMongodb />, color: "green", rotation: "4deg", top: "32%", left: "5%" },
    { name: "JavaScript", icon: <SiJavascript />, color: "yellow", rotation: "-3deg", top: "55%", left: "12%" },
    { name: "TypeScript", icon: <SiTypescript />, color: "blue", rotation: "2deg", top: "58%", left: "78%" },
    { name: "SQL", icon: <DiSqllite />, color: "pink", rotation: "-4deg", top: "78%", left: "8%" },
    { name: "Git", icon: <FaGitAlt />, color: "green", rotation: "5deg", top: "82%", left: "72%" },
    { name: "HTML5", icon: <SiHtml5 />, color: "yellow", rotation: "2deg", top: "18%", left: "25%" },
    { name: "CSS3", icon: <SiCss3 />, color: "blue", rotation: "-3deg", top: "22%", left: "62%" },
    { name: "AI Apps", icon: <FaBrain />, color: "pink", rotation: "4deg", top: "85%", left: "85%" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "green", rotation: "-2deg", top: "68%", left: "88%" },
  ];

  return (
    <section className="skills-section" id="skill" onMouseMove={handleMouseMove}>
      <div className="skills-container-wall">

        <div className="wall-background">
          <h2 className="section-title wall-title">My Toolkit</h2>
          {/* Wall texture or pattern */}
          <div className="wall-pattern"></div>

          {/* Sticky Notes scattered in the back */}
          <div className="sticky-notes-container">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`sticky-note note-${skill.color}`}
                style={{
                  transform: `rotate(${skill.rotation})`,
                  top: skill.top,
                  left: skill.left
                }}
              >
                <div className="note-content">
                  <div className="note-icon">{skill.icon}</div>
                  <p className="note-name">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dev Avatar in the front with parallax */}
          <div
            className="dev-avatar-container"
            style={{
              transform: `translate(${parallax.x}px, ${parallax.y}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img src="/dev_avatar (2).png" alt="Developer Avatar" className="dev-avatar-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;

