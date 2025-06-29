import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);

 useEffect(() => {
  fetch('http://localhost:1337/api/projects?populate=pdf')
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched data:", data); 

      if (!data || !data.data) {
        console.error("API response missing 'data'");
        return;
      }

      const enrichedProjects = data.data.map((item) => {
  return {
    id: item.id,
    title: item.title,
    website: item.website,
    github: item.github,
    contribution: item.contribution,
    pdf: item.pdf && item.pdf.length > 0
      ? `http://localhost:1337${item.pdf[0].url}`
      : null
  };
});

      setProjects(enrichedProjects);
    })
    .catch((err) => console.error('Error fetching projects:', err));
}, []);

  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        {projects.map((project) => (
          
          <div className="project-card" key={project.id}>
            <div className="project-frame">
              {project.pdf ? (
                <iframe
                  src={project.pdf}
                  title={project.title}
                  width="100%"
                  height="400"
                  style={{ border: "none", borderRadius: "10px" }}
                  
                />
              ) : (
                <div>No preview available</div>
              )}
            </div>
            <div className="project-description">
              <h4>{project.title}</h4>
              <p>{project.contribution}</p>
              <div className="project-buttons">
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-btn">
                  Open Website
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
