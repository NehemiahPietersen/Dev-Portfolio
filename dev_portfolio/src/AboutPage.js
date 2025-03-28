import React from 'react';
import { FaLinkedin, FaGithub, FaDiscord, FaCoffee, FaBiking, FaLock } from 'react-icons/fa';
import './styles/About.css';

export function AboutPage() {
    return (
        <section className="about-page">
            <div className="about-container">
                <div className="about-header">
                    <h1 className="about-title">About Me</h1>
                </div>
                
                <div className="about-content-wrapper">
                    <div className="about-text-content">
                        <div className="about-intro">
                            <h2 className="intro-heading">
                                Hello There <span className="wave">👋</span> I'm Nehemiah Pietersen
                            </h2>
                            <p className="intro-text">
                                Driven by a fervent desire for continuous improvement, I'm passionate about software development 
                                and project management. With a Bachelors Degree in Computer and Information Sciences and 
                                professional experience in IT services, networking, and database administration, I bring a 
                                diverse skill set to every project.
                            </p>
                        </div>

                        {/* TODO: Make the about me information a little longer */}
                        <div className="about-details">
                            <div className="journey-section">
                                <h3 className="section-heading">
                                    <FaLock className="section-icon" /> My Journey
                                </h3>
                                <p>
                                    My path to software development began with an internship at Momentum, Centurion. 
                                    Inspired by mentors, I pursued a Bachelor's degree in Computer and Information 
                                    Sciences at Monash University, majoring in Software Development and Network Security.
                                </p>
                                <p>
                                    During my studies, I worked with Java, Python, and C, ultimately falling in love with Java. 
                                    I've gained experience with Oracle, MySQL, MariaDB, and MongoDB, and have since taught 
                                    myself PostgreSQL. Currently pursuing AWS certification, I'm always expanding my knowledge.
                                </p>
                            </div>

                            <div className="fun-facts">
                                <h3 className="section-heading">
                                    <FaCoffee className="section-icon" /> Fun Facts About Me
                                </h3>
                                <ul className="facts-list">
                                    <li>
                                        <FaBiking /> Avid mountain biker and outdoor enthusiast
                                    </li>
                                    <li>
                                        <FaCoffee /> Coffee connoisseur and enthusiast
                                    </li>
                                    <li>Family-oriented with a beloved pet dog</li>
                                    <li>Passionate about cybersecurity trends</li>
                                    <li>Enjoy competitive swimming with cousins</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="about-image-content">
                        <div className="profile-image-placeholder">
                            <div className="placeholder-image">
                                {/* TODO: Add Profile image of yourself Nehemiah */}
                            </div>
                            <div className="social-links">
                                <p className="social-links-text">Connect with me:</p>
                                <div className="social-icons">
                                    <a href="https://linkedin.com/in/nehemiah-pietersen-17a724170" target="_blank" rel="noopener noreferrer" className="social-link">
                                        <FaLinkedin className="social-icon" /> LinkedIn
                                    </a>
                                    <a href="https://github.com/NehemiahPietersen" target="_blank" rel="noopener noreferrer" className="social-link">
                                        <FaGithub className="social-icon" /> GitHub
                                    </a>
                                    <a href="https://discord.com/users/2526" target="_blank" rel="noopener noreferrer" className="social-link">
                                        <FaDiscord className="social-icon" /> Discord
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}