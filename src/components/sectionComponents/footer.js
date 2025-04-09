// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'; // Import the CSS file

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="section">
          <Link to="/menu">Menu</Link>
        </div>
        <div className="section">
          <Link to="/values">Our Values</Link>
        </div>
        <div className="section">
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="section">
          <Link to="/about">About Us</Link>
        </div>
      </div>
      {/*
      <div className="links">
        <div className="social-links">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/instragram.jpg`}
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/facebook.jpg`}
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/x.png`}
              alt="X (formerly Twitter)"
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/youtube.png`}
              alt="YouTube"
            />
          </a>
        </div>
      </div>
      */}

      <div className="copyrights">
      <p>
        &copy; {new Date().getFullYear()} Tummy Yummy's. All Rights Reserved. | Developed by JugamSoft Technologies
      </p>
      </div>
    </div>
  );
};

export default Footer;
