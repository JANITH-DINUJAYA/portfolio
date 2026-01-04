import React from 'react';
import './ProjectCard.css';

const BACKEND_URL = "https://portfolio-8mr7.onrender.com";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img
          src={`${BACKEND_URL}${project.image}`}
          alt={project.title}
        />
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-buttons">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-github">
            GitHub
          </a>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-demo">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
