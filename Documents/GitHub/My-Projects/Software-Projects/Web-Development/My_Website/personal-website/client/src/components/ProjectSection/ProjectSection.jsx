import React, { useState, useEffect } from 'react';
import './ProjectSection.css';
import { fetchProjects } from '../utils/fetchAPI';

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjectData = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    fetchProjectData();
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.imageUrl} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;