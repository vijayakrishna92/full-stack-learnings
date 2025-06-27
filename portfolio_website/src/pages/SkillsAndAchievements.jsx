import React from 'react';
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


function SkillsAndAchievements() {

  return (
    <div className="skills-and-achievements-wrapper">
      <div className="skills-section">
        <h2>SKILLS</h2>
        <div className="skill-section"> {/* this is the flex container */}
          <div className="skill-item">
            <img src={pythonIcon} alt="Python" />
          </div>
          <div className="skill-item">
            <img src={dartIcon} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={pytorch} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={react} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={selenium} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={sklearn} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={tensorflow} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={json} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={langchain} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={mangodb} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={matplotlib} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={numpy} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={pandas} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={postgresql} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={django} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={docker} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={fastapi} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={html} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={css} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={flutter} alt="Dart" />
          </div>

          <div className="skill-item">
            <img src={crewai} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={autogen} alt="Dart" />
          </div>
          <div className="skill-item">
            <span>LANGGRAPH</span>
          </div>
          <div className='skill-item'>
            <span>NLTK</span>
          </div>
          <div className='skill-item'>
            <span>XGboost</span>
          </div>
          <div className='skill-item'>
            <span>RANDOMFOREST</span>
          </div>
          <div className='skill-item'>
            <span>LINEAR REGRESSION</span>
          </div>
          <div className='skill-item'>
            <span>POLYNOMIAL REGRESSION</span>
          </div>
          <div className='skill-item'>
            <span>FINETUNING MODEL</span>
          </div>
          <div className='skill-item'>
            <span>RAG</span>
          </div>
          <div className='skill-item'>
            <span>PROMPT ENGINEERING</span>
          </div>

          <div className='skill-item'>
            <span>QGIS</span>
          </div>
          <div className='skill-item'>
            <span>LABELBOX</span>
          </div>

          <div className="skill-item">
            <img src={chatgpt} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={colabs} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={vscode} alt="Dart" />
          </div>

          <div className="skill-item">
            <img src={dagshub} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={Git} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={github} alt="Dart" />
          </div>
          
          <div className="skill-item">
            <img src={figma} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={huggingface} alt="Dart" />
          </div>
          
          <div className="skill-item">
            <img src={windows} alt="Dart" />
          </div>
          <div className="skill-item">
            <img src={hp} alt="Dart" />
          </div>
        </div>
      </div>

      <div className="skills-section">
  <h2>ACHIEVEMENT</h2>
  <div className="achievement-section">
    <div className="achievement-item">
      <h4>2nd Place Winner – Omdena Global Hackathon</h4>
      <p>
        Ranked 2nd among 11 teams in a competitive AI Agent Challenge.  
        <a
          href="https://www.linkedin.com/posts/tusharaggarwalinseec_omdena-2024-hackathon-luma-activity-7268171753351180288-vBQj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Post
        </a>
      </p>
    </div>

    <div className="achievement-item">
      <h4>Volunteered as an ML/GenAI instructor</h4>
      <p>
        Taught Volunteered students about machine learning and generative AI.  
        <a
          href="https://www.linkedin.com/posts/activity-7212075021257621504-NFTb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfLl_0BiXwkGG0YZ0_IE6QgUax3koQaejE"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Post
        </a>
      </p>
    </div>

https://www.linkedin.com/posts/optimumai_optimumai-marketing-brochure-universities-activity-7299422694096130050-zDj2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfLl_0BiXwkGG0YZ0_IE6QgUax3koQaejE

https://www.linkedin.com/posts/optimumai_optimumai-activity-7232767235155501056-aWUB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfLl_0BiXwkGG0YZ0_IE6QgUax3koQaejE

https://www.linkedin.com/posts/optimumai_optimumai-genai-ai-activity-7214685613403357186-gu2_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfLl_0BiXwkGG0YZ0_IE6QgUax3koQaejE

https://www.linkedin.com/posts/optimumai_ai-optimumai-mentalhealthtech-activity-7304425919304146944-XU5l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfLl_0BiXwkGG0YZ0_IE6QgUax3koQaejE

https://www.youtube.com/@OptimumAI

https://www.optimumai.in/challanges/multi-agent-ai-content-creation-chatbot-project

  </div>
</div>



Taught underrepresented or rural students about machine learning and generative AI.

Developed learning materials, designed brochures, and issued certificates.


    </div>
  );
}

export default SkillsAndAchievements;
