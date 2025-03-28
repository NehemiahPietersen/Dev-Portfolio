import React from 'react';
import '../styles/ProjectsPage.css';

export function Projects() {
    const projects = [
        {
        title: "Ariksha's Garden and Nursery",
        description: "E-commerce platform for a local plant nursery featuring real-time inventory and secure checkout",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "#"
        },
        {
        title: "DFM Technologies",
        description: "Corporate website redesign with 40% faster load times and improved mobile experience",
        tags: ["JavaScript", "GSAP", "Responsive Design"],
        link: "#"
        },
        {
        title: "Budget Application",
        description: "Financial tracking tool with data visualization and automated reporting features",
        tags: ["Java", "Spring Boot", "React", "Chart.js"],
        link: "#"
        }
    ];

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
                <p className="projects-page-card-description">{project.description}</p>
                <a href={project.link} className="projects-page-link">View Details →</a>
            </div>
            ))}
        </div>
        </section>
    );
}