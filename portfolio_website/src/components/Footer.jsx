import React from "react";
import '../styles/Footer.css'; // Connect CSS
import socials from '../constants/socials';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Vijaya Krishna. All rights reserved.</p>

      <div className="social-links">
        {socials.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
            {social.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;