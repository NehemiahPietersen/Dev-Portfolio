import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Banner() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/experience');
    };

    return (
        <section className="banner">
        <div className="banner-content">
            <p className="banner-greeting">Hi, my name is</p>
            <h1 className="banner-name">Nehemiah Pietersen</h1>
            <h2 className="banner-tagline">Turning ideas into digital reality</h2>
            <p className="banner-description">
            As a Software Developer, I specialize in solving complex problems through code. 
            This portfolio showcases my journey, skills, and passion for transforming concepts 
            into functional, elegant solutions.
            </p>
            <div className="banner-cta">
                <button className="cta-button" onClick={handleButtonClick}>Explore My Work</button>
                <div className="decorative-line"></div>
            </div>
        </div>
        <div className="banner-graphic">
            {/* TODO: Placeholder for your illustration */}
            <div className="graphic-placeholder"></div>
        </div>
        </section>
    );
}