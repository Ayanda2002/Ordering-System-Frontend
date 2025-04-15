import React, { useState } from 'react';
import Menu from '../menu'; // Import the Menu component
import { Link } from 'react-router-dom'; // Import Link for routing
import '../../styles/sign-in.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import { signIn } from "../apiComponents/api-signIn"; // Import the signIn function

const Sign_In = () => {
  // For navigation to menu page
  const navigate = useNavigate();

  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  const validateForm = async (event) => {
    event.preventDefault();

    const userName = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;

    // API call to token endpoint for logging the user in
    const result = await signIn(userName, userPassword);

    if (result.success) {
      alert('Sign-in successful! Welcome back.');

      // Redirect to menu page after successful login
      navigate('/menu');
    } else {
      alert(result.message); // Show error message if sign-in failed
    }
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  };

  return (
    <div>
      <main className="sign-in">
        <div className="heading">
          <h1>Login</h1>
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
    </div>
  );
};

export default Sign_In;
