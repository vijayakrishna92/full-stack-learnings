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
    title: "Building a Chatbot for Interview Preparation using NLP",
    pdf: interview,
    website: 'https://www.omdena.com/chapter-challenges/building-a-chatbot-for-interview-preparation-using-nlp',
    github: "https://github.com/OmdenaAI/omdena-hyderabad-Chatbot-for-interview",
    contribution: "Built a multi-agent chatbot using NLP and Langchain."
  },
  {
    title: "Mapping Seagrass Meadows with Satellite Imagery and Computer Vision",
    pdf: seagrass,
    website: 'https://www.omdena.com/projects/mapping-seagrass-meadows-with-satellite-imagery-and-computer-vision',
    github: "https://dagshub.com/Omdena/TriesteItalyChapter_MappingSeagrassMeadows",
    contribution: "Contributed to CV pipeline for seagrass detection from satellite imagery."
  },
  {
    title: "Leveraging LLMs to Understand Global Mental Health Well-being & Fomo",
    pdf: mental,
    website: 'https://www.omdena.com/chapter-challenges/leveraging-llms-to-understand-global-mental-health-well-being-fomo-in-social-media',
    github: "https://dagshub.com/Omdena/HyderabadIndiaChapter_MentalHealthWellbeingFomoSocialMedia",
    contribution: "Built a multi-agent chatbot using NLP and Langchain."
  },
  {
    title: "Street-Level Imagery Analysis",
    pdf: hotosm,
    website: 'https://www.omdena.com/projects/street-level-imagery-analysis',
    github: "https://github.com/OmdenaAI/HOTOSM-Street-Level",
    contribution: "Contributed to CV pipeline for seagrass detection from satellite imagery."
  },
  {
    title: "Standardized Comparison of Urban Green Space Mapping Through Remote Sensing for Frankfurt, Germany",
    pdf: germany,
    website: 'https://www.omdena.com/chapter-challenges/standardized-comparision-of-urban-green-space-mapping-through-remote-sensing',
    github: "https://dagshub.com/Omdena/FrankfurtGermanyChapter_UrbanGreenSpaceMappping",
    contribution: "Built a multi-agent chatbot using NLP and Langchain."
  },
  {
    title: "AI Agents Inference Benchmarking Challenge",
    pdf: benchmark,
    website: 'https://www.omdena.com/chapter-challenges/ai-agents-inference-benchmarking-challenge',
    github: "https://github.com/OmdenaAI/OmdenaKnowledge_AIAgentsInferenceBenchmarking",
    contribution: "Contributed to CV pipeline for seagrass detection from satellite imagery."
  },
  {
    title: "Building VisionVitals: AI-Powered Biometric and Vital Signs Monitoring Through Camera",
    pdf: vision,
    website: 'https://www.omdena.com/projects/building-visionvitals-ai-powered-biometric-and-vital-signs-monitoring-through-camera',
    github: "https://github.com/OmdenaAI/VisionVitals-AI-Powered-Biometric-and-Vital-Signs-Monitoring-Through-Camera",
    contribution: "Built a multi-agent chatbot using NLP and Langchain."
  },
  {
    title: "AI Financial Planner using Multi-Agent Architecture",
    pdf: op1,
    website: 'https://www.optimumai.in/challanges/ai-financial-planner-using-multi-agent-architecture',
    github: "https://github.com/OptimumAI-Community/AI-Financial-Planner",
    contribution: "Contributed to CV pipeline for seagrass detection from satellite imagery."
  },
  {
    title: "Multi-Agent Content Creation Project",
    pdf: op2,
    website: 'https://www.optimumai.in/challanges/multi-agent-ai-content-creation-chatbot-project',
    github: "https://github.com/OptimumAI-Community/Chatbot-for-Content-Creation",
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
