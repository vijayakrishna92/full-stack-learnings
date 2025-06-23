import react from "react";
import Button from './Button';

const ProjectCard  = ({title, description, image, link})=> {
    return(
        <div className="project-card">
            <img src="" alt="" className="project-image"/>
            <h3>exp test 001</h3>
            <p>my first project</p>
            {link && (
                <a href="" target="_blank" rel="noopener noreferrer">
                    <Button text="View Project" />
                </a>
            )}
        </div>
    )
}

export default ProjectCard;