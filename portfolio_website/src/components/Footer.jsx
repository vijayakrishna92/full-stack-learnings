import React from 'react';
import '../styles/Footer.css';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import dagshubIcon from '../assets/icons/dagshub.png';
import phoneIcon from '../assets/icons/telephone.png';
import whatsappIcon from '../assets/icons/whatsapp.png';
import gmailIcon from '../assets/icons/gmail.png';

function Footer() {
  return (
    <footer className="footer">
      <div className='footer-row'>
      <div className="social-icons">
        <a href='https://github.com/vijayakrishna92' target="_blank" rel="noopener noreferrer">
        <div className="icon-box">
          <img src={githubIcon} alt="GitHub" />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/vijaya-krishna-k-139487297/' target="_blank" rel="noopener noreferrer">
        <div className="icon-box">
          <img src={linkedinIcon} alt="LinkedIn" />
          </div>
        </a>
        <a href='https://dagshub.com/vijaykrishnavk92' target="_blank" rel="noopener noreferrer">
        <div className="icon-box">
          <img src={dagshubIcon} alt="DagsHub" />
          </div>
        </a>
        <a href='tel:+919611747756'>
          <div className="icon-box">
          <img src={phoneIcon} alt="Phone" />
          </div>
        </a>
        <a href='https://wa.me/919481194676' target="_blank" rel="noopener noreferrer">
        <div className="icon-box">
          <img src={whatsappIcon} alt="WhatsApp" />
          </div>
        </a>
        <a href='mailto:vijaykrishnavk92@gmail.com'>
          <div className="icon-box">
          <img src={gmailIcon} alt="Gmail" />
          </div>
        </a>
      </div>


      <div className="blog-section">
  <h2 className="blog-heading">BLOGS</h2>
  <ul className="blog-list">
    <li>
      <a href="https://www.linkedin.com/pulse/gateway-advance-llms-embracing-retrieval-augmented-generation-2ofyc/?trackingId=v8%2BkVPjbQ2q7ewcMV%2BKwag%3D%3D" target="_blank" rel="noopener noreferrer">
        Gateway to Advance LLMs: Embracing Retrieval-Augmented Generation
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/pulse/langchain-uprising-unlocking-power-programmable-blockchains-jluie/?trackingId=J69AG1W6Sd6B90%2BU1f%2F6Tw%3D%3D" target="_blank" rel="noopener noreferrer">
        Langchain Uprising: Unlocking the Power of Programmable Blockchains
      </a>
    </li>
  </ul>
</div>


      </div>
      <p>© {new Date().getFullYear()} Vijaya Krishna. All rights reserved.</p>
    </footer>
  );
}

export default Footer;