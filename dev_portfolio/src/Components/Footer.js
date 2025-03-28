import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="footer">
        <div className="footer-left">
            <span>© 2025 Nehemiah Pietersen. All rights reserved</span>
        </div>
        <div className="footer-right">
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/experience" className="footer-link">Experience</Link>
            <Link to="/skills" className="footer-link">Skills</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        </footer>
    );
}