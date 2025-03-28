import React from 'react';
import { FaDatabase, FaServer, FaLaptopCode, FaReact, FaJava, FaNodeJs } from 'react-icons/fa';
import { SiSpring, SiDotnet, SiJavascript, SiHtml5, SiCss3, SiOracle, SiFirebase } from 'react-icons/si';
import './styles/Skills.css';

export function SkillsPage() {
    return (
        <div className="detailed-skills-page">
            <h1>My Technical Skills</h1>
            
            <div className="skills-container">
                {/* Programming Languages */}
                <div className="skill-category">
                    <div className="skill-header">
                        <FaLaptopCode className="skill-icon" />
                        <h2>Programming Languages</h2>
                    </div>
                    <div className="skill-content">
                        <ul className="skills-grid">
                            <li><FaJava className="tech-icon" /> Java</li>
                            <li><SiJavascript className="tech-icon" /> JavaScript</li>
                            <li><SiHtml5 className="tech-icon" /> HTML5</li>
                            <li><SiCss3 className="tech-icon" /> CSS3</li>
                        </ul>
                    </div>
                </div>

                {/* Backend Development */}
                <div className="skill-category">
                    <div className="skill-header">
                        <FaServer className="skill-icon" />
                        <h2>Backend Development</h2>
                    </div>
                    <div className="skill-content">
                        <p><strong>Frameworks & Platforms:</strong></p>
                        <ul className="skills-grid">
                            <li><SiSpring className="tech-icon" /> Spring Framework</li>
                            <li><SiDotnet className="tech-icon" /> ASP.NET</li>
                            <li><FaNodeJs className="tech-icon" /> Node.js</li>
                            <li><FaNodeJs className="tech-icon" /> Express.js</li>
                        </ul>
                    </div>
                </div>

                {/* Database Technologies */}
                <div className="skill-category">
                    <div className="skill-header">
                        <FaDatabase className="skill-icon" />
                        <h2>Database Systems</h2>
                    </div>
                    <div className="skill-content">
                        <p><strong>SQL & NoSQL Databases:</strong></p>
                        <ul className="skills-grid">
                            <li><FaDatabase className="tech-icon" /> MySQL</li>
                            <li><SiOracle className="tech-icon" /> Oracle</li>
                            <li><FaDatabase className="tech-icon" /> MariaDB</li>
                            <li><FaDatabase className="tech-icon" /> MongoDB</li>
                            <li><SiFirebase className="tech-icon" /> Firebase</li>
                        </ul>
                    </div>
                </div>

                {/* Frontend Development */}
                <div className="skill-category">
                    <div className="skill-header">
                        <FaReact className="skill-icon" />
                        <h2>Frontend Development</h2>
                    </div>
                    <div className="skill-content">
                        <ul className="skills-grid">
                            <li><FaReact className="tech-icon" /> React.js</li>
                            <li><SiJavascript className="tech-icon" /> Flutter</li>
                            <li><SiHtml5 className="tech-icon" /> Responsive HTML5</li>
                            <li><SiCss3 className="tech-icon" /> Modern CSS3</li>
                        </ul>
                        <p className="experience-note" onClick={() => window.open('https://www.freecodecamp.org/certification/NehemiahPietersen/responsive-web-design', '_blank')}>
                            Certified in Web Design and Responsiveness
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}