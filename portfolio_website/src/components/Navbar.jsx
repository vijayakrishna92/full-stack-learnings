import React from 'react';
import '../styles/Navbar.css';
import SidebarMenu from './SidebarMenu';
import logo from '../assets/icons/logo.png';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    // Define route-based title
    const getTitle = () => {
        if (location.pathname === '/') return '| VIJAYA KRISHNA';
        if (location.pathname === '/projects') return '| PROJECTS';
        return ''; // Default: no text for other pages
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                <img src={logo} alt="Logo" className="logo-img" />
                </Link>
                <span className="navbar-title">{getTitle()}</span>
            </div>
            <SidebarMenu />
        </nav>
    );
}

export default Navbar;