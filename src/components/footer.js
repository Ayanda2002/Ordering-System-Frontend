// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="section">
          <h2>Eat</h2>
          <ul>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>Explore</h2>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/values">Our Values</Link>
            </li>
            <li>
              <Link to="/partnerships">Partnerships</Link>
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>Help</h2>
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="links">
        <div className="app-links">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="app-store-link"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/apple.webp`}
              alt="Download on the App Store"
            />
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="google-play-link"
          >
            <img
              className="google"
              src={`${process.env.PUBLIC_URL}/images/google.png`}
              alt="Get it on Google Play"
            />
          </a>
        </div>
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
      <div className="copyrights">
        <p>
          Copyright &copy; Tummy Yummy's South Africa. 2025 All Rights
          Reserved. build pwa-45-12-18_9f34a1c2
        </p>
      </div>
    </footer>
  );
};

export default Footer;
