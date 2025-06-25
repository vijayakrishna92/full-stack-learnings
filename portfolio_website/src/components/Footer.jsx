import React from "react";
import '../styles/Footer.css';
import socials from '../constants/socials';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        {socials.map((social, index) => (
          <a 
            key={index} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {social.name}
          </a>
        ))}
      </div>

      <p className="footer-text">© {new Date().getFullYear()} Vijaya Krishna. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
