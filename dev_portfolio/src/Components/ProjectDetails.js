import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects } from '../data/Projects';
import '../styles/ProjectDetails.css';

export function ProjectDetail() {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === projectId);

    // Add this effect
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]); // Re-run when projectId changes


    if (!project) {
        return (
            <div className="project-detail-container">
                <div className="project-not-found">
                    <h2>Project not found</h2>
                    <Link to="/" className="back-link">← Return</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="project-detail-container">
            <button onClick={() => navigate(-1)} className="simple-link back-button">
                ← Back
            </button>
            
            <div className="project-header">
                <div className="project-title-wrapper">
                    <h1 className="project-title">{project.title}</h1>
                </div>
                <img 
                    src={project.logo || "https://via.placeholder.com/100x100?text=Logo"} 
                    alt={`${project.title} logo`} 
                    className="project-logo" 
                />
            </div>
            
            <div className="tech-stack-section">
                <h2 className="section-heading">Technologies Used</h2>
                <div className="tech-stack">
                    {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-item">{tech}</span>
                    ))}
                </div>
            </div>
            
            <div className="overview-section">
                <h2 className="section-heading">Overview</h2>
                <div className="project-description">
                    {project.detailedDescription.split('\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}