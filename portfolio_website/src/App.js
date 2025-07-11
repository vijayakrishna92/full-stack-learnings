import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SkillsAndAchievements from './pages/SkillsAndAchievements';
import Footer from './components/Footer';
import './styles/Global.css';
function App() {
  return (
     <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skillsandachievements" element={<SkillsAndAchievements/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
//You are creating a React component
//Makes this component usable in index.js