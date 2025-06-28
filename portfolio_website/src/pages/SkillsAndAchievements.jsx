import React, { useState } from 'react';
import '../styles/SkillsAndAchievements.css';
import pythonIcon from '../assets/images/python.svg';
import dartIcon from '../assets/images/dart.svg';
import colabs from '../assets/images/colab.svg';
import dagshub from '../assets/images/dagshub.svg';
import django from '../assets/images/django.svg';
import docker from '../assets/images/Docker.svg';
import fastapi from '../assets/images/fastapi.svg';
import figma from '../assets/images/figma.svg';
import flutter from '../assets/images/flutter.svg';
import Git from '../assets/images/Git.svg';
import chatgpt from '../assets/images/chatgpt.svg';
import github from '../assets/images/github.svg';
import html from '../assets/images/html.svg';
import hp from '../assets/images/hp.svg';
import huggingface from '../assets/images/huggingface.svg';
import matplotlib from '../assets/images/matplotlib.svg';
import json from '../assets/images/json.svg';
import langchain from '../assets/images/langchain.svg';
import mangodb from '../assets/images/mangodb.svg';
import numpy from '../assets/images/numpy.svg';
import pandas from '../assets/images/pandas.svg';
import postgresql from '../assets/images/postgresql.svg';
import pytorch from '../assets/images/pytorch.svg';
import selenium from '../assets/images/Selenium.svg';
import sklearn from '../assets/images/sklearn.svg';
import react from '../assets/images/react.svg';
import tensorflow from '../assets/images/tensorflow.svg';
import vscode from '../assets/images/vscode.svg';
import windows from '../assets/images/windows.svg';
import css from '../assets/images/css.svg';
import crewai from '../assets/images/crewai-auto.svg';
import autogen from '../assets/images/autogen.svg';

import agent from '../assets/images/agent.png';
import frankfurt from '../assets/images/frank.png';
import financial from '../assets/images/financialplanner.png';
import hotmos from '../assets/images/hotmos.png';
import hugging from '../assets/images/hugging.webp';
import interview from '../assets/images/interviewchatbot.png';
import mental from '../assets/images/mental_health.jpg';
import mapping from '../assets/images/mapping.png';
import news from '../assets/images/Newsletter Blog Article Certificate Of Appreciation - Vijaya Krishna.png';

function SkillsAndAchievements() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div className="skills-and-achievements-wrapper">
      <div className="text-tabs">
  <span 
    className={activeTab === 'skills' ? 'active' : ''}
    onClick={() => setActiveTab('skills')}
  >
    SKILLS
  </span>
  <span className="slash"> / </span>
  <span 
    className={activeTab === 'achievements' ? 'active' : ''}
    onClick={() => setActiveTab('achievements')}
  >
    ACHIEVEMENTS
  </span>
  <span className="slash"> / </span>
  <span 
    className={activeTab === 'certificates' ? 'active' : ''}
    onClick={() => setActiveTab('certificates')}
  >
    CERTIFICATES
  </span>
</div>


      {activeTab === 'skills' && (
  <div className="skills-section">

    {/* Programming Languages */}
    <div className="skills-group">
      <h3 className="skills-title">Programming Languages</h3>
      <div className="skill-items">
        <div className="skill-item"><img src={pythonIcon} alt="Python" /></div>
        <div className="skill-item"><img src={dartIcon} alt="Dart" /></div>
        <div className="skill-item"><img src={html} alt="HTML" /></div>
        <div className="skill-item"><img src={css} alt="CSS" /></div>
      </div>
    </div>

    {/* Frameworks & Libraries */}
    <div className="skills-group">
      <h3 className="skills-title">Frameworks & Libraries</h3>
      <div className="skill-items">
        <div className="skill-item"><img src={react} alt="React" /></div>
        <div className="skill-item"><img src={flutter} alt="Flutter" /></div>
        <div className="skill-item"><img src={django} alt="Django" /></div>
        <div className="skill-item"><img src={fastapi} alt="FastAPI" /></div>
        <div className="skill-item"><img src={selenium} alt="Selenium" /></div>
        <div className="skill-item"><img src={sklearn} alt="Scikit-learn" /></div>
        <div className="skill-item"><img src={tensorflow} alt="Tensorflow" /></div>
        <div className="skill-item"><img src={pytorch} alt="Pytorch" /></div>
        <div className="skill-item"><img src={langchain} alt="Langchain" /></div>
        <div className="skill-item"><img src={crewai} alt="CrewAI" /></div>
        <div className="skill-item"><img src={autogen} alt="Autogen" /></div>
        <div className="skill-item"><span>LANGGRAPH</span></div>
        <div className="skill-item"><span>NLTK</span></div>
      </div>
    </div>

    {/* Databases */}
    <div className="skills-group">
      <h3 className="skills-title">Databases</h3>
      <div className="skill-items">
        <div className="skill-item"><img src={postgresql} alt="PostgreSQL" /></div>
        <div className="skill-item"><img src={mangodb} alt="MongoDB" /></div>
      </div>
    </div>

    {/* Data Science & ML */}
    <div className="skills-group">
      <h3 className="skills-title">Data Science & ML</h3>
      <div className="skill-items">
        <div className="skill-item"><img src={matplotlib} alt="Matplotlib" /></div>
        <div className="skill-item"><img src={numpy} alt="Numpy" /></div>
        <div className="skill-item"><img src={pandas} alt="Pandas" /></div>
        <div className="skill-item"><span>XGBoost</span></div>
        <div className="skill-item"><span>Random Forest</span></div>
        <div className="skill-item"><span>Linear Regression</span></div>
        <div className="skill-item"><span>Polynomial Regression</span></div>
        <div className="skill-item"><span>Finetuning Model</span></div>
        <div className="skill-item"><span>RAG</span></div>
        <div className="skill-item"><span>Prompt Engineering</span></div>
      </div>
    </div>

    {/* Version Control & Dev Tools */}
    <div className="skills-group">
      <h3 className="skills-title">Version Control & Dev Tools</h3>
      <div className="skill-items">
        <div className="skill-item"><img src={Git} alt="Git" /></div>
        <div className="skill-item"><img src={github} alt="GitHub" /></div>
        <div className="skill-item"><img src={docker} alt="Docker" /></div>
        <div className="skill-item"><img src={vscode} alt="VSCode" /></div>
        <div className="skill-item"><img src={dagshub} alt="Dagshub" /></div>
        <div className="skill-item"><img src={colabs} alt="Google Colab" /></div>
        <div className="skill-item"><img src={figma} alt="Figma" /></div>
        <div className="skill-item"><img src={huggingface} alt="HuggingFace" /></div>
      </div>
    </div>

    {/* Other Tools & Platforms */}
    <div className="skills-group">
      <h3 className="skills-title">Other Tools & Platforms</h3>
      <div className="skill-items">
        <div className="skill-item"><img src={chatgpt} alt="ChatGPT" /></div>
        <div className="skill-item"><span>QGIS</span></div>
        <div className="skill-item"><span>LABELBOX</span></div>
        <div className="skill-item"><img src={windows} alt="Windows" /></div>
        <div className="skill-item"><img src={hp} alt="HP" /></div>
        <div className="skill-item"><img src={json} alt="JSON" /></div>
      </div>
    </div>

  </div>
)}


      {activeTab === 'achievements' && (
        <div className="skills-section">
          <div className="achievement-section">
            <div className="achievement-item">
              <h4>2nd Place Winner – Omdena Global Hackathon</h4>
              <p>
                Ranked 2nd among 11 teams in a competitive AI Agent Challenge.
                <a href="https://www.linkedin.com/posts/tusharaggarwalinseec_omdena-2024-hackathon-luma-activity-7268171753351180288-vBQj/" target="_blank" rel="noopener noreferrer">View Post</a>
              </p>
            </div>
            <div className="achievement-item">
              <h4>Volunteered as an ML/GenAI instructor</h4>
              <p>
                Taught students about machine learning and generative AI.
                <a href="https://www.linkedin.com/posts/activity-7212075021257621504-NFTb" target="_blank" rel="noopener noreferrer">View Post 1</a>
                <a href="https://www.linkedin.com/posts/optimumai_optimumai-activity-7232767235155501056-aWUB" target="_blank" rel="noopener noreferrer">View Post 2</a>
                <a href="https://www.youtube.com/@OptimumAI" target="_blank" rel="noopener noreferrer">video reference</a>
              </p>
              <p>
                Developed learning materials and designed brochures.
                <a href="https://www.linkedin.com/posts/optimumai_optimumai-marketing-brochure-universities-activity-7299422694096130050-zDj2/" target="_blank" rel="noopener noreferrer">brochure</a>
                <a href="https://www.linkedin.com/posts/optimumai_optimumai-genai-ai-activity-7214685613403357186-gu2_" target="_blank" rel="noopener noreferrer">post design</a>
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'certificates' && (
        <div className="skills-section">
          <div className="certificate-grid">
            <img src={agent} alt="Certificate 1" />
            <img src={frankfurt} alt="Certificate 2" />
            <img src={hotmos} alt="Certificate 4" />
            <img src={hugging} alt="Certificate 5" />
            <img src={news} alt="Certificate 6" />
            <img src={mapping} alt="Certificate 7" />
            <img src={mental} alt="Certificate 8" />
            <img src={interview} alt="Certificate 9" />
            <img src={financial} alt="Certificate 3" />
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillsAndAchievements;
