import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import HeroImage from '../assets/images/logo-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="cloudy-bg"></div>
      <nav className="navbar">
        <img src={HeroImage} alt="Vijaya Krishna" className="logo" />
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
