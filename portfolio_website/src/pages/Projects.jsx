import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const emptyProjects = Array(6).fill(0); // Adjust number as needed

  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        {emptyProjects.map((_, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">Image {index + 1}</div>
            <div className="project-description">
              Description of project {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
