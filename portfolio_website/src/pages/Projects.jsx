import React from "react";
import '../styles/projects.css'; // Connect the CSS
import projects from '../constants/projects';
import ProjectCard from '../components/ProjectCard'; // Correct import
import PortfolioImage from '../assets/images/portfolio-image.png'; // Correct image import

const Projects = () => {
    return (
        <div>
            <h2>My Projects</h2>
            <div className="project-list">
                <ProjectCard
                    title='Portfolio Website'
                    description='A personal portfolio built with React'
                    image={PortfolioImage}
                    link='https://github.com/your-repo'
                />
                <ProjectCard
                    title='Portfolio Website'
                    description='A personal portfolio built with React'
                    image={PortfolioImage}
                    link='https://github.com/your-repo'
                />
            </div>
        </div>
    );
};

export default Projects;
