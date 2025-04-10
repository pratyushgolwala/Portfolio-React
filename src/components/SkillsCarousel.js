import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Database", icon: <FaDatabase /> },
];

const SkillsCarousel = () => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Technical Skills</h2>
      <div className="carousel">
        <div className="carousel-track">
          {skills.concat(skills).map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
