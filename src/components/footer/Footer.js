import React from 'react';
import './footer.css';

const Footer = (props) => {
  return (
    <div id="footer">
      <div className="author">Project by Luis Feliz</div>
      <div className="links">
        <a href="https://www.linkedin.com/mwlite/in/luis-feliz-4b1285173">
          LinkedIn
        </a>
        <a href="https://github.com/Luis-Feliz">Github</a>
      </div>
    </div>
  );
};

export default Footer;
