// src/components/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/Projects';
import '../styles/ProjectsPage.css';

export function Projects() {
    return (
        <section className="projects-page-container" id="projects">
            <div className="projects-page-header">
                <h2 className="projects-page-title">Some of My Latest Work</h2>
                <p className="projects-page-subtitle">Projects that demonstrate my technical capabilities</p>
            </div>

            <div className="projects-page-grid">
                {projects.map((project, index) => (
                    <div key={index} className="projects-page-card">
                        <div className="projects-page-card-header">
                            <h3 className="projects-page-card-title">{project.title}</h3>
                            <div className="projects-page-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="projects-page-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <p className="projects-page-card-description">{project.shortDescription}</p>
                        <Link to={`/projects/${project.id}`} className="projects-page-link">
                            View Details →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}