import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from './data/Projects';
import './styles/Experience.css';

export function ExperiencePage() {
    return (
        <div className="experience-container">
            <h1>Experience</h1>
            
            <div className="experience-section">
                <h2>Professional Experience</h2>
                
                <div className="experience-grid">
                    <ExperienceItem 
                        title="Application Maintenance"
                        description={[
                            "Performed regular maintenance and updates for enterprise applications",
                            "Troubleshooted and resolved application issues reported by users",
                            "Implemented patches and version upgrades",
                            "Monitored application performance and optimized where necessary"
                        ]}
                    />
                    
                    <ExperienceItem 
                        title="Database Management"
                        description={[
                            "Designed and maintained relational databases (MySQL, SQL Server)",
                            "Optimized database performance through indexing and query optimization",
                            "Implemented backup and recovery procedures",
                            "Ensured data integrity and security compliance"
                        ]}
                    />
                    
                    <ExperienceItem 
                        title="Hardware Support"
                        description={[
                            "Provided technical support for desktop, laptop, and peripheral hardware",
                            "Diagnosed and repaired hardware issues",
                            "Managed hardware inventory and procurement",
                            "Set up workstations and conference room equipment"
                        ]}
                    />
                    
                    <ExperienceItem 
                        title="Software Support"
                        description={[
                            "Installed and configured software applications",
                            "Provided training and documentation for end-users",
                            "Resolved software compatibility issues",
                            "Managed software licenses and updates"
                        ]}
                    />
                    
                    <ExperienceItem 
                        title="IT Staff Support"
                        description={[
                            "Mentored junior IT staff members",
                            "Documented IT processes and procedures",
                            "Collaborated with cross-functional teams on IT projects",
                            "Participated in on-call rotation for after-hours support"
                        ]}
                    />
                </div>
            </div>
            
            <div className="projects-section">
                <h2>Projects</h2>
                
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            title={project.title}
                            description={project.longDescription}
                            technologies={project.technologies}
                            id={project.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

const ExperienceItem = ({ title, description }) => {
    return (
        <div className="experience-item">
            <h3>{title}</h3>
            <ul>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

const ProjectCard = ({ title, description, technologies, id }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tech-tags">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                ))}
            </div>
            <Link to={`/projects/${id}`} className="project-link">
                View Details →
            </Link>
        </div>
    );
};