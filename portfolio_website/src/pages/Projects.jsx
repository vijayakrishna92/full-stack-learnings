import React from 'react';
import '../styles/Projects.css';
import interview from '../assets/data/interview.pdf';
import seagrass from '../assets/data/seagrass.pdf';
import mental from '../assets/data/mental.pdf';
import hotosm from '../assets/data/hotosm.pdf';
import op2 from '../assets/data/op2.pdf';
import germany from '../assets/data/germany.pdf';
import benchmark from '../assets/data/benchmark.pdf';
import vision from '../assets/data/vision.pdf';
import op1 from '../assets/data/op1.pdf';
function Projects() {
  
  const projects = [
  {
    title: "Building a chatbot for interview preparation using nlp",
    pdf: interview,
    website: 'https://www.omdena.com/chapter-challenges/building-a-chatbot-for-interview-preparation-using-nlp',
    github: "https://github.com/yourusername/project1",
    contribution: "Built a multi-agent chatbot using NLP and Langchain."
  },
  {
    title: "Seagrass Mapping",
    pdf: seagrass,
    website: 'https://www.omdena.com/projects/mapping-seagrass-meadows-with-satellite-imagery-and-computer-vision',
    github: "https://github.com/yourusername/project2",
    contribution: "Contributed to CV pipeline for seagrass detection from satellite imagery."
  },
  {
    title: "AI Chatbot",
    pdf: mental,
    website: 'https://www.omdena.com/chapter-challenges/leveraging-llms-to-understand-global-mental-health-well-being-fomo-in-social-media',
    github: "https://github.com/yourusername/project1",
    contribution: "Built a multi-agent chatbot using NLP and Langchain."
  },
  {
    title: "Seagrass Mapping",
    pdf: hotosm,
    website: 'https://www.omdena.com/projects/street-level-imagery-analysis',
    github: "https://github.com/yourusername/project2",
    contribution: "Contributed to CV pipeline for seagrass detection from satellite imagery."
  },
  {
    title: "AI Chatbot",
    pdf: germany,
    website: 'https://www.omdena.com/chapter-challenges/standardized-comparision-of-urban-green-space-mapping-through-remote-sensing',
    github: "https://github.com/yourusername/project1",
    contribution: "Built a multi-agent chatbot using NLP and Langchain."
  },
  {
    title: "Seagrass Mapping",
    pdf: benchmark,
    website: 'https://www.omdena.com/chapter-challenges/ai-agents-inference-benchmarking-challenge',
    github: "https://github.com/yourusername/project2",
    contribution: "Contributed to CV pipeline for seagrass detection from satellite imagery."
  },
  {
    title: "AI Chatbot",
    pdf: vision,
    website: 'https://www.omdena.com/projects/building-visionvitals-ai-powered-biometric-and-vital-signs-monitoring-through-camera',
    github: "https://github.com/yourusername/project1",
    contribution: "Built a multi-agent chatbot using NLP and Langchain."
  },
  {
    title: "Seagrass Mapping",
    pdf: op1,
    website: 'https://www.optimumai.in/challanges/ai-financial-planner-using-multi-agent-architecture',
    github: "https://github.com/yourusername/project2",
    contribution: "Contributed to CV pipeline for seagrass detection from satellite imagery."
  },
  {
    title: "AI Chatbot",
    pdf: op2,
    website: 'https://www.optimumai.in/challanges/multi-agent-ai-content-creation-chatbot-project',
    github: "https://github.com/yourusername/project1",
    contribution: "Built a multi-agent chatbot using NLP and Langchain."
  },
  
];

  return (
    <div className="projects-wrapper">
  <div className="projects-container">
    {projects.map((project, index) => (
      <div className="project-card" key={index}>
        <div className="project-frame">
          <iframe
            src={project.pdf}
            title={project.title}
            width="100%"
            height="400"
            style={{ border: "none", borderRadius: "10px" }}
          />
        </div>
        <div className="project-description">
          <h4>{project.title}</h4>
          <p>{project.contribution}</p>
          <div className="project-buttons">
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Open Website
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
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
