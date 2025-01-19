import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../styles/home.css'; // Import the CSS file

const Home = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  const closeUserMenu = (event) => {
    if (
      event.target.closest('.user-menu') === null &&
      event.target.closest('.user') === null
    ) {
      setUserMenuVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', closeUserMenu);
    return () => {
      window.removeEventListener('click', closeUserMenu);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="main-bar">
          <Link to="/">
            <div className="title">
              <img
                className="logo"
                src={`${process.env.PUBLIC_URL}/images/ramen.png`}
                alt="logo"
              />
              <h1>
                Yummy <br />
                Tummy's
              </h1>
            </div>
          </Link>
          <div className="icons">
            <Link to="/cart">
              <img
                className="cart"
                src={`${process.env.PUBLIC_URL}/images/online-shopping.png`}
                alt="cart"
              />
            </Link>
            <div className="user-menu">
              <img
                className="user"
                src={`${process.env.PUBLIC_URL}/images/user.png`}
                alt="user"
                onClick={toggleUserMenu} 
              />
              {userMenuVisible && (
                <div className="dropdown active" id="user-dropdown">
                  <Link to="/sign-in">Sign In</Link>
                  <Link to="/sign-up">Sign Up</Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/menu" className="menu">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/partnerships" className="partnerships">
                Partnerships
              </Link>
            </li>
            <li>
              <Link to="/about" className="about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="card">
          <div className="circle">
            <img
              src={`${process.env.PUBLIC_URL}/images/ramen.png`}
              alt="Ramen"
              className="logo"
            />
          </div>
          <div className="content">
            <h2>
              Yummy <br /> Tummy's
            </h2>
            <p>
              Craving something delicious? Come to Tummy Yummy's, where every
              bite is packed with flavor! From comfort food to gourmet dishes,
              we've got something for everyone. Fresh, local ingredients and a
              cozy atmosphere make us your new favorite spot to eat.
            </p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/ramen.png`}
            alt="Ramen"
            className="ramen"
          />
        </div>
      </main>
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
              <li>
                <Link to="/faq">FAQ</Link>
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
    </div>
  );
};

export default Home;
