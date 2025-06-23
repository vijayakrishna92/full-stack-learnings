import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/images/hero-image.png'; // Adjust your image path
import LightEffect from '../components/LightEffect';

const Home = () => {
  return (
    <div className="home">
      <LightEffect /> 
      <div className="home-content">
        <h1>Hi, I'm Vijaya Krishna</h1>
        <p>I build modern websites and solve real-world problems using technology.</p>
        <Link to="/projects">
          <button className="home-button">View My Projects</button>
        </Link>
      </div>

      <div className="home-image">
        <img src={HeroImage} alt="Vijaya Krishna" />
      </div>
    </div>
  );
};

export default Home;
