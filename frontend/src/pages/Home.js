import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsSection from '../components/ProjectsSection';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="home-page">
        {/* Background image layer */}
        <div
          className="home-page-bg"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bgg.jpg)` }}
        />

        {/* Ambient blobs */}
        <div className="home-page-blob home-page-blob-1" />
        <div className="home-page-blob home-page-blob-2" />

        {/* Hero content */}
        <div className="hero-section">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Available for work
          </div>

          <h1>
            Hi, I'm{' '}
            <span className="hero-name-gradient">Janith Dinujaya</span>
          </h1>

          <p>
            Full Stack Developer crafting fast, beautiful, and scalable web
            applications — from pixel-perfect UIs to robust backend systems.
          </p>

          <div className="hero-buttons">
            <Link to="/project" className="hero-btn primary">
              View My Work
            </Link>
            <Link to="/contact" className="hero-btn secondary">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span className="scroll-text">Scroll</span>
        </div>
      </div>

      <ProjectsSection />
    </div>
  );
}

export default Home;