import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
         <h3>A passionate developer building the future</h3>
      <div className="footer-content">
       
        <div className="social-icons">
          <a href="https://github.com/karthigayani" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/karthi-k/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>&copy; 2023 Karthigayani K. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
