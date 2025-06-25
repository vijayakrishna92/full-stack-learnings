import React, { useState } from 'react';
import '../styles/SidebarMenu.css';
import { Link } from 'react-router-dom';

function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger / X Icon */}
      <div className="menu-icon" onClick={toggleSidebar}>
        {isOpen ? <span className="close-icon">✕</span> : <span className="hamburger-icon">☰</span>}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={closeSidebar}><Link to="/">HOME</Link></li>
        <li onClick={closeSidebar}><Link to="/projects">PROJECTS</Link></li>
        </ul>
      </div>

      {/* Dark Overlay when sidebar is open */}
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
}

export default SidebarMenu;
