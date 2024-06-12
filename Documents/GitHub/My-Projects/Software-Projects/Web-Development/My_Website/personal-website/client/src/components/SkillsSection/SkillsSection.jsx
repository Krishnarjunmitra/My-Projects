import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-list">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;