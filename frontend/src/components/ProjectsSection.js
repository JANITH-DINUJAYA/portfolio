import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch projects from backend
    fetch('https://portfolio-8mr7.onrender.com/api/projects')
      .then(response => response.json())
      .then(data => {
        console.log('Data received:', data); // Debug log
        // Make sure data is an array
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error('Data is not an array:', data);
          setProjects([]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">Loading Projects...</h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">Error loading projects</h2>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">No Projects Found</h2>
          <p className="section-subtitle">Add some projects to your database!</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project._id || index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;