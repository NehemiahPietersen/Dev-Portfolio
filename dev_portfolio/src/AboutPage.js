import React from 'react';
import { FaLinkedin, FaGithub, FaDiscord, FaCoffee, FaBiking, FaLock, FaCode, FaServer } from 'react-icons/fa';
import './styles/About.css';

export function AboutPage() {
    return (
        <section className="about-page">
            <div className="about-container">
                <div className="about-header">
                    <h1 className="about-title">
                        <span className="title-gradient">About Me</span>
                    </h1>
                </div>
                
                <div className="about-content-wrapper">
                    <div className="about-text-content">
                        <div className="about-intro">
                            <h2 className="intro-heading">
                                Hello There <span className="wave">👋</span> I'm <span className="name-highlight">Nehemiah Pietersen</span>
                            </h2>
                            <p className="intro-text">
                                As a passionate and driven Software Developer, I blend creativity with technical expertise
                                to build seamless, high-impact solutions. From crafting intuitive mobile applications to 
                                optimizing databases and streamlining IT operations, I don't just write code—I engineer experiences
                                that drive efficiency and engagement. With a solid foundation in Java, Agile methodologies, and 
                                full-stack development, coupled with hands-on experience in leading projects like the DFM Technologies 
                                Mobile App, I'm on a mission to tackle the next audacious challenge—where I can leverage my technical 
                                prowess, creativity, and relentless problem-solving spirit to push boundaries and leave a lasting 
                                imprint on the digital landscape.
                            </p>
                        </div>

                        <div className="about-details">
                            <div className="journey-section">
                                <h3 className="section-heading">
                                    <FaLock className="section-icon" /> My Journey
                                </h3>
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h4>Career Beginning</h4>
                                            <p>
                                                Initially, I was on my way to becoming a civil lawyer, however, that changed on a simple job 
                                                shadowing experience at Momentum, Centurion; and from that time on, began my IT career.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h4>Education</h4>
                                            <p>
                                                After completing my High School, I pursued a career in Software Development and received my Bachelors 
                                                Degree in Computer and Information Sciences through the University of Monash South Africa. I completed 
                                                a double major in <b>Software Development</b> and <b>Network Security</b> and intend to complete my honors and 
                                                eventually my Masters.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h4>Professional Growth</h4>
                                            <p>
                                                My academic journey immersed me in the full spectrum of modern software development—from system architecture and 
                                                cybersecurity best practices to agile methodologies, database design, and the nuanced art of coding across multiple 
                                                frameworks and languages. It was here that I discovered my passion for Java, captivated by its versatility, robustness, 
                                                and elegance in solving real-world problems. Beyond theory, I’ve honed these skills through hands-on experience, 
                                                blending academic rigor with practical execution. Today, I bring a dynamic toolkit to every project: a deep understanding 
                                                of development lifecycles, a security-first mindset, and the ability to adapt cutting-edge technologies to deliver 
                                                scalable, efficient solutions. Whether crafting intuitive applications or optimizing backend systems, I thrive on 
                                                transforming challenges into opportunities.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h4>Continuous Learning</h4>
                                            <p>
                                            I thrive on growth not just in theory, but in practice. My passion for software development and project management 
                                            is fuelled by relentless learning, proven by the certifications I’ve earned and the skills I’ve deployed in real-world 
                                            projects. Recently, I completed an intensive Spring Boot course, immediately applying its principles to streamline 
                                            backend systems in my work. Now, I’m turning my focus to AWS certification, with a clear roadmap to mastery: hands-on 
                                            labs, cloud architecture projects, and iterative testing. For me, education isn’t just about credentials; it’s about 
                                            unlocking new ways to build faster, smarter solutions—and I’m already putting the next one in motion.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="fun-facts">
                                <h3 className="section-heading">
                                    <FaCoffee className="section-icon" /> Beyond Code
                                </h3>
                                <div className="facts-grid">
                                    <div className="fact-card">
                                        <FaBiking className="fact-icon" />
                                        <h4>Mountain Biking</h4>
                                        <p>Avid trail rider and outdoor enthusiast</p>
                                    </div>
                                    <div className="fact-card">
                                        <FaCoffee className="fact-icon" />
                                        <h4>Coffee Connoisseur</h4>
                                        <p>Specialty brews and espresso aficionado</p>
                                    </div>
                                    <div className="fact-card">
                                        <FaServer className="fact-icon" />
                                        <h4>Family & Pets</h4>
                                        <p>Family-oriented with a beloved pet dog</p>
                                    </div>
                                    <div className="fact-card">
                                        <FaLock className="fact-icon" />
                                        <h4>Security Enthusiast</h4>
                                        <p>Passionate about cybersecurity trends</p>
                                    </div>
                                    <div className="fact-card">
                                        <FaCode className="fact-icon" />
                                        <h4>Competitive Swimming</h4>
                                        <p>Enjoy swimming competitions with cousins</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-image-content">
                        <div className="profile-card">
                            <div className="profile-image-container">
                                <div className="profile-image-placeholder">
                                    {/* TODO: Profile image will go here */}
                                </div>
                            </div>
                            <div className="social-links">
                                <h3 className="social-heading">Let's Connect</h3>
                                <div className="social-icons">
                                    <a href="https://linkedin.com/in/nehemiah-pietersen-17a724170" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-link linkedin">
                                        <FaLinkedin className="social-icon" /> LinkedIn
                                    </a>
                                    <a href="https://github.com/NehemiahPietersen" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-link github">
                                        <FaGithub className="social-icon github-icon" /> GitHub
                                    </a>
                                    <a href="https://discord.com/users/2526" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-link discord">
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