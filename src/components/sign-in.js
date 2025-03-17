import React, { useState } from 'react';
import Menu from './menu'; // Import the Menu component
import { Link } from 'react-router-dom'; // Import Link for routing

import '../styles/sign-in.css'; // Import your CSS file

const Sign_In = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  const validateForm = (event) => {
    event.preventDefault();

    const userName = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;

    // API call to token endpoint for logging the user in
    fetch('http://127.0.0.1:8000/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userName, password: userPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access) {
          // Store the access token and the refresh token locally
          localStorage.setItem('accessToken', data.access);
          localStorage.setItem('refreshToken', data.refresh);
          alert('Sign-in successful! Welcome back.');

          // Change the state to show the Menu page
          setIsLoggedIn(true); // Set to true to show the Menu component
        } else {
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
        alert('Something went wrong. Please try again.');
      });
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  };

  if (isLoggedIn) {
    // If the user is logged in, render the Menu component
    return <Menu />;
  }

  return (
    <div>
      <header>
        <div className="main-bar">
          <a href="/#">
            <div className="title">
              <img className="logo" src="images/ramen.png" alt="logo" />
              <h1>
                Yummy <br />
                Tummy's
              </h1>
            </div>
          </a>
          <div className="icons">
            <a href="/cart">
              <img className="cart" src="images/online-shopping.png" alt="cart" />
            </a>
            <div className="user-menu">
              <img
                className="user"
                src="images/user.png"
                alt="user"
                onClick={toggleUserMenu}
              />
              {userMenuVisible && (
                <div className="dropdown active">
                  <a href="/sign-in">Sign In</a>
                  <a href="/sign-up">Sign Up</a>
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

      <main className="sign-in">
        <div className="heading">
          <h1>Sign In</h1>
        </div>
        <fieldset>
          <form id="sign-in-form" onSubmit={validateForm}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              minLength="6"
              required
            />

            <div className="show-password">
              <input
                type="checkbox"
                id="show-password"
                onClick={togglePasswordVisibility}
              />
              <label htmlFor="show-password">Show Password</label>
            </div>

            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </fieldset>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="section">
            <h2>Eat</h2>
            <ul>
              <li>
                <a href="menu">Menu</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Explore</h2>
            <ul>
              <li>
                <a href="about">About Us</a>
              </li>
              <li>
                <a href="values">Our Values</a>
              </li>
              <li>
                <a href="partnerships">Partnerships</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Help</h2>
            <ul>
              <li>
                <a href="contact">Contact Us</a>
              </li>
              <li>
                <a href="faq">FAQ</a>
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

export default Sign_In;
