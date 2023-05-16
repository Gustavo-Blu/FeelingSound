import React from 'react';
import './footer.css';

const Footer = (props) => {
  return (
    <div id="footer">
      <div className="author">Luis Feliz</div>
      <div className="links">
        <a href="https://github.com/Luis-Feliz">
          <img src="/images/github.svg" />
        </a>
        <a href="https://www.linkedin.com/mwlite/in/luis-feliz-4b1285173">
          <img src="/images/linkedin.svg" id="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
