import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaJava, FaDatabase, FaGlobe, FaLeaf } from 'react-icons/fa';

export function Skills() {
    const skills = [
        {
            title: "Spring Framework",
            description: "Currently expanding backend expertise with Spring ecosystem",
            icon: <FaLeaf className="skill-icon" />,
            status: "Advanced Learning",
            learning: ["Spring Boot", "Spring Security", "REST APIs", "Dependency Injection"],
        },
        {
            title: "Web Development",
            description: "Certified in responsive design and modern web development practices",
            icon: <FaGlobe className="skill-icon" />,
            certifications: ["Responsive Web Design", "Frontend Development"]
        },
        {
            title: "Java Development",
            description: "Strong OOP fundamentals with production-grade application experience",
            icon: <FaJava className="skill-icon" />,
            technologies: ["Enterprise applications", "Desktop utilities", "Mobile applications"]
        },
        {
            title: "Database Systems",
            description: "Expertise in SQL and NoSQL database design and optimization",
            icon: <FaDatabase className="skill-icon" />,
            technologies: ["MySQL", "MongoDB", "PostgreSQL"]
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: false, // Disable center mode for better infinite looping
        variableWidth: false, // Keep consistent widths
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            centerMode: false // Disable on smaller screens too
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            centerMode: false
            }
        }
        ]
    };

    return (
        <section className="skills-section" id="skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
            <Slider {...settings}>
            {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
                
                {skill.status && (
                    <div className="learning-badge">{skill.status}</div>
                )}
                
                <div className="skill-details">
                    {skill.certifications && (
                    <div className="detail-section">
                        <h4>Certifications</h4>
                        <ul>
                        {skill.certifications.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                        </ul>
                    </div>
                    )}
                    
                    {skill.technologies && (
                    <div className="detail-section">
                        <h4>Technologies</h4>
                        <ul>
                        {skill.technologies.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                        </ul>
                    </div>
                    )}
                    
                    {skill.learning && (
                    <div className="detail-section">
                        <h4>Currently Learning</h4>
                        <ul>
                        {skill.learning.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                        </ul>
                    </div>
                    )}
                </div>
                </div>
            ))}
            </Slider>
        </div>
        </section>
    );
}