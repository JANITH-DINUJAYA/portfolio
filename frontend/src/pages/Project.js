import React from 'react';
import ProjectsSection from '../components/ProjectsSection';
import './Project.css';

function Project() {
  return (
    <div className="project-page">
      <div className="project-page-header">
        <h1>My Projects</h1>
        <p>Explore my portfolio of web development projects</p>
      </div>
      <ProjectsSection />
    </div>
  );
}

export default Project;