import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsSection from '../components/ProjectsSection';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="home-page">
        {/* Background layer */}
        <div 
          className="home-page-bg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bgg.jpg)`
          }}
        />
        
        <div className="hero-section">
          <h1>Hi, I'm Janith Dinujaya</h1>
          <p>Full Stack Developer | Building Amazing Web Applications</p>
          <div className="hero-buttons">
            <Link to="/project" className="hero-btn primary">
              View My Work
            </Link>
            <Link to="/contact" className="hero-btn secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      <ProjectsSection />
    </div>
  );
}

export default Home;