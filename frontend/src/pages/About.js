import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">

        {/* ── Header ─────────────────────────────────────── */}
        <div className="about-header">
          <div className="profile-image-wrapper">
            <div className="profile-image-glow" />
            <img
              src="/images/img.jpeg"
              alt="Janith Dinujaya"
              className="profile-image"
            />
          </div>
          <div className="about-intro">
            <h1>Janith Dinujaya</h1>
            <p className="about-tagline">Full Stack Developer · Problem Solver · Tech Enthusiast</p>
          </div>
        </div>

        {/* ── Content ────────────────────────────────────── */}
        <div className="about-content">

          {/* About Me */}
          <section className="about-section">
            <div className="about-section-header">
              <div className="about-section-icon">👋</div>
              <h2>Hello!</h2>
            </div>
            <p>
              I'm a passionate Full Stack Developer with expertise in building modern web
              applications. I love turning ideas into reality through clean, efficient code
              and beautiful user interfaces.
            </p>
            <p>
              With a strong foundation in both frontend and backend technologies, I create
              end-to-end solutions that are not only functional but also provide exceptional
              user experiences.
            </p>
          </section>

          {/* Skills */}
          <section className="about-section">
            <div className="about-section-header">
              <div className="about-section-icon">💼</div>
              <h2>Skills</h2>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML / CSS</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-tags">
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MongoDB</span>
                  <span>REST APIs</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <div className="skill-tags">
                  <span>Git</span>
                  <span>VS Code</span>
                  <span>Postman</span>
                  <span>Figma</span>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="about-section">
            <div className="about-section-header">
              <div className="about-section-icon">🎓</div>
              <h2>Education</h2>
            </div>
            <div className="education-item">
              <div className="education-dot" />
              <div>
                <h3>Data Science</h3>
                <p className="education-school">Carddiff Metropolitan University</p>
                <p className="education-year">2026 – now</p>
              </div>
            </div>
 <div className="education-dot" />
              <div>
                <h3>HND in Software engineering</h3>
                <p className="education-school">Carddiff Metropolitan University</p>
                <p className="education-year">2024 – 2025</p>
              </div>
              
          </section>

          {/* Interests */}
          <section className="about-section">
            <div className="about-section-header">
              <div className="about-section-icon">🎯</div>
              <h2>Interests</h2>
            </div>
            <div className="interests-grid">
              <div className="interest-item">💻 Coding</div>
              <div className="interest-item">🎮 Gaming</div>
              <div className="interest-item">📚 Reading</div>
              <div className="interest-item">🎵 Music</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default About;