import React from 'react';
import { cardData } from '../data/Constants.js';
import '../styles/Projects.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import { grey } from '@mui/material/colors';

export default function Projects() {
  return (
    <div className="centered" id="projects">
      <h1>Crafted with Code</h1>

      <div className="card-container">
        {cardData.map((data, index) => (
          <div className="card" key={index}>
            <div className="card-media">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="card-content">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <div className="tech-stack">
                {data.tags.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-box">
                    {tech}
                  </div>
               ) )}
              </div>
            </div>
            <div className="card-actions">
              <div className="card-icons">
                <a href={data.githubLink} target="_blank" rel="noopener noreferrer" className="github-icon">
                  <GitHubIcon sx={{ color: grey[200] }} />
                </a>
                <a href={data.deployedLink} target="_blank" rel="noopener noreferrer" className="public-icon">
                  <PublicIcon sx={{ color: grey[200] }} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
