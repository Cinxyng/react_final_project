import React, { useState } from 'react';
import './Portfolio.css';
import Carousel from './Items/Carousel';

const Portfolio = function() {
  const projects = [
    {
      id: 'plush-world-cafe',
      title: 'Plush World Cafe',
      category: 'Management Simulation & Cozy Game',
      description:
        'A cozy management simulation where players run an interactive cafe with tactile order-make-serve mechanics, customizable shop layouts, and responsive UI elements.',
      techStack: ['Unity', 'C#', 'UI/UX Design', 'Object Pooling' , 'level design'],
      images: [
        'Photos/Picture1.png',
        'Photos/Picture2.png',
        'Photos/Picture3.png',
        'Photos/Picture4.png',
      ],
      demoLink: 'https://itzcinx.itch.io/plush-world-cafe',
    },
    {
      id: 'ah-gongs-kopi-stall',
      title: "Ah Gong's Kopi Stall",
      category: 'Time Management / Game Jam',
      description:
        'A fast-paced cultural time-management game built during a 1-week game jam. Brew authentic local coffee orders, manage inventory, and serve hungry patrons.',
      techStack: ['Unity', 'C#','Audio & Accessibility'],
      images: [
        'Photos/GJ_01.jpg',
        'Photos/GJ_02.jpg',
        'Photos/GJ_03.jpg',
        'Photos/GJ_04.jpg',
        'Photos/GJ_05.jpg',
        'Photos/GJ_06.jpg',
      ],
      demoLink: '#',
    },
    {
      id: 'Radial Decay',
      title: 'Radial Decay',
      category: 'Atmospheric Adventure',
      description:
        'An atmospheric physics-driven exploration adventure featuring custom shaders, environmental puzzle mechanics, and dynamic particle effects.',
      techStack: ['Unity', 'C++', 'Shader Graph', 'Level Design'],
      images: [
        'Photos/FYP.png',
        'Photos/FYP_01.png', 
        'Photos/FYP_02.png',
        'Photos/FYP_03.png',
      ],
      demoLink: 'https://itzcinx.itch.io/radial-decay',
    },
  ];

  return (
    <section className="portfolio-page">
      <header className="portfolio-header">
        <h2>Featured Game Projects</h2>
        <p>A selection of games, I have made so far while leveling up!</p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <Carousel images={project.images} title={project.title} />

            <div className="project-details">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-tags">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project demo"
                  >
                    Download Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio