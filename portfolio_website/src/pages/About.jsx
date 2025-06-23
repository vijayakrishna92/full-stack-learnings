import React from 'react';
import '../styles/about.css'; // Make sure CSS is connected
import skills from '../constants/skills';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>This is the about page.</p>

      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;