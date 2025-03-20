import React, { useState } from 'react';
import Menu from './menu'; // Import the Menu component
import { Link } from 'react-router-dom'; // Import Link for routing
import '../styles/sign-in.css'; // Import your CSS file
import Header from './header'; // Import Header component
import Footer from './footer'; // Import Footer component

const Sign_In = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in

  const API_URL = 'https://yummytummies.onrender.com';

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  const validateForm = (event) => {
    event.preventDefault();

    const userName = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;

    // API call to token endpoint for logging the user in
    fetch(`${API_URL}/api/token`, {
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
        <Header/>
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
        <Footer/>
      </footer>
    </div>
  );
};

export default Sign_In;
