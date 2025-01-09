import React from 'react';
import '../styles/Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div>
      <header>
        <div className="main-bar">
          <img className="logo" src={process.env.PUBLIC_URL + '/images/ramen.png'} alt="logo" />
          <h1>
            Yummy <br />
            Tummy's
          </h1>
          <img className="cart" src={process.env.PUBLIC_URL + '/images/online-shopping.png'} alt="cart" />
          <img className="user" src={process.env.PUBLIC_URL + '/images/user.png'} alt="user" />
        </div>
        <div className="nav">
          <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </header>
      <main>
        {/* Content for main section */}
        <img className="logo" src={process.env.PUBLIC_URL + '/images/ramen.png'} alt="logo" />
        <img className="logo" src={process.env.PUBLIC_URL + '/images/ramen.png'} alt="logo" />
        <img className="logo" src={process.env.PUBLIC_URL + '/images/ramen.png'} alt="logo" />
        <img className="logo" src={process.env.PUBLIC_URL + '/images/ramen.png'} alt="logo" />
      </main>
      <footer className="footer">
        <div className="container">
          <div className="section">
            <h2>Eat</h2>
            <ul>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Recipes</a></li>
            </ul>
          </div>
          <div className="section">
            <h2>Explore</h2>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our History</a></li>
              <li><a href="#">Our Values</a></li>
            </ul>
          </div>
          <div className="section">
            <h2>Work</h2>
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Why Tummy Yummy's</a></li>
            </ul>
          </div>
          <div className="section">
            <h2>Help</h2>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="app-links">
          <a href="https://apps.apple.com" target="_blank" className="app-store-link">
            <img src={process.env.PUBLIC_URL + '/images/apple.webp'} alt="Download on the App Store" />
          </a>
          <a href="https://play.google.com/store" target="_blank" className="google-play-link">
            <img className="google" src={process.env.PUBLIC_URL + '/images/google.png'} alt="Get it on Google Play" />
          </a>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" className="social-icon">
            <img src={process.env.PUBLIC_URL + '/images/instragram.jpg'} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="social-icon">
            <img src={process.env.PUBLIC_URL + '/images/facebook.jpg'} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" className="social-icon">
            <img src={process.env.PUBLIC_URL + '/images/x.png'} alt="X (formerly Twitter)" />
          </a>
          <a href="https://www.youtube.com" target="_blank" className="social-icon">
            <img src={process.env.PUBLIC_URL + '/images/youtube.png'} alt="YouTube" />
          </a>
        </div>
        <div className="copyrights">
          <p>Copyright &copy; Tummy Yummy's South Africa. 2025 All Rights Reserved. build pwa-45-12-18_9f34a1c2</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
