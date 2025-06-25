// Home.jsx
import React from 'react';
import '../styles/home.css';
import BackgroundImage from '../assets/images/hero-image.jpg'; // Your full-screen image
import LightEffect from '../components/LightEffect';

const Home = () => {
  return (
    <div
      className="full-screen-background"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    ><div className="dark-overlay"></div>
      <LightEffect />
    </div>
  );
};

export default Home;
