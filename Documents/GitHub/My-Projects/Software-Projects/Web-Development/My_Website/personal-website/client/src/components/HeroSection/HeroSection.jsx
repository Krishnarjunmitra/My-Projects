import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <h2>Software Engineer</h2>
        <p>
          I am a passionate software engineer with a focus on web development.
          I love building clean, efficient, and user-friendly applications.
        </p>
        <a href="#projects" className="btn">View My Projects</a>
      </div>
    </section>
  );
};

export default HeroSection;