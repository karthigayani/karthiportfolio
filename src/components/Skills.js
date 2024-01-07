import React from 'react';
import { skills } from '../data/Constants.js';
import '../styles/Skills.css'; 

const Skills = () => {
  return (
    <div className="container" id="skills">
      <div className="wrapper">
        <div className="title">Skills</div>
        <div className="description">
        I have a strong skill set encompassing various technologies, and I prioritize ongoing learning and development to stay abreast of the latest industry trends.
        </div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-title">{skill.title}</div>
              <div className="skill-list">
                {skill.skills.map((item, itemIndex) => (
                  <div className="skill-item" key={itemIndex}>
                    <img className="skill-image" src={item.image} alt={item.name} />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;


