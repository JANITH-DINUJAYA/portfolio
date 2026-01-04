import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <img
  src="/images/img.jpeg"
  alt="Profile"
  className="profile-image"
/>
          <div className="about-intro">
            <h1>About Me</h1>
            <p className="about-tagline">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          </div>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>👋 Hello!</h2>
            <p>
              I'm a passionate Full Stack Developer with expertise in building modern web applications. 
              I love turning ideas into reality through clean, efficient code and beautiful user interfaces.
            </p>
            <p>
              With a strong foundation in both frontend and backend technologies, I create end-to-end 
              solutions that are not only functional but also provide exceptional user experiences.
            </p>
          </section>

          <section className="about-section">
            <h2>💼 Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML/CSS</span>
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
                <h3>Tools & Others</h3>
                <div className="skill-tags">
                  <span>Git</span>
                  <span>VS Code</span>
                  <span>Postman</span>
                  <span>Figma</span>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>🎓 Education</h2>
            <div className="education-item">
              <h3>Your Degree</h3>
              <p className="education-school">Your University</p>
              <p className="education-year">2020 - 2024</p>
            </div>
          </section>

          <section className="about-section">
            <h2>🎯 Interests</h2>
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