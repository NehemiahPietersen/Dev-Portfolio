import React, { useRef, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ number, text, path }) => {
    const location = useLocation();
    const numberRef = useRef(null);
    const textRef = useRef(null);
    const originalNumber = number;
    const originalText = text;
    const isActive = useMemo(() => location.pathname === path, [location.pathname, path]);

    const scrambleElement = (element, originalValue, speed = 60) => {
        if (!element) return;
        
        const randomInt = max => Math.floor(Math.random() * max);
        const randomFromArray = array => array[randomInt(array.length)];
        const scrambleChars = '*?><[]&@#)(.%$-_:/;?!'.split('');

        const scrambleChar = char => {
        return char === ' ' ? ' ' : randomFromArray(scrambleChars);
        };

        const originalWidth = element.offsetWidth;
        element.style.width = `${originalWidth}px`;
        
        let currentIndex = 0;
        const interval = setInterval(() => {
        const valueArray = originalValue.split('');
        valueArray[currentIndex] = originalValue[currentIndex];
        
        for (let i = currentIndex + 1; i < valueArray.length; i++) {
            valueArray[i] = scrambleChar(originalValue[i]);
        }
        
        element.textContent = valueArray.join('');
        currentIndex++;
        
        if (currentIndex >= originalValue.length) {
            clearInterval(interval);
            element.textContent = originalValue;
            element.style.width = '';
        }
        }, speed);
    };

    const handleMouseOver = () => {
        scrambleElement(numberRef.current, originalNumber);
        scrambleElement(textRef.current, originalText);
    };

    return (
        <Link 
            to={path} 
            className={`nav-link ${isActive ? 'active' : ''}`}
            onMouseOver={handleMouseOver}
            >
            <span className="nav-number" ref={numberRef}>{number}</span>.
            <span className="nav-text" ref={textRef}>{text}</span>
            </Link>
        );
    };

    export function Navbar() {
    return (
        <nav className="navbar">
        <div className="nav-left">
            <Link to="/" className="logo-link">
            {/* TODO: Replace with your actual logo */}
            <span className="logo">LOGO</span>
            </Link>
        </div>
        
        <div className="nav-right">
            <div className="nav-links">
            <NavLink number="01" text="About" path="/about" />
            <NavLink number="02" text="Experience" path="/experience" />
            <NavLink number="03" text="Skills" path="/skills" />
            <NavLink number="04" text="Contact" path="/contact" />
            </div>
            <button className="resume-button">Resume</button>
        </div>
        </nav>
    );
}