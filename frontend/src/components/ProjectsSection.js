import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    fetch('https://portfolio-8mr7.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="section-heading">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">Here are some of my recent works</p>
          </div>
          <div className="projects-loading">
            {[1, 2, 3].map(i => (
              <div className="skeleton-card" key={i}>
                <div className="skeleton-img" />
                <div className="skeleton-body">
                  <div className="skeleton-line short" />
                  <div className="skeleton-line med" />
                  <div className="skeleton-line" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || projects.length === 0) {
    return (
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="section-heading">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">{error ? 'Error loading projects' : 'No Projects Found'}</h2>
            <p className="section-subtitle">
              {error ? error : 'Add some projects to your database!'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-heading">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Here are some of my recent works</p>
        </div>
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