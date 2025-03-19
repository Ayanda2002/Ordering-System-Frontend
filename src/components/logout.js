// src/components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Logout = () => {
  const navigate = useNavigate(); // Initialize navigate hook for redirection

  // Check if the user is logged in by checking if the accessToken exists in localStorage
  let isLoggedIn = !!localStorage.getItem('accessToken');
  
  const logout = () => {
    if (isLoggedIn) {
      // Remove the JWT token from localStorage
      localStorage.removeItem('accessToken');
      
      // Optionally, show an alert or message
      alert('Logged out successfully');

      // Redirect to home page (or sign-in page) after logging out
      navigate('/');
    }
  };

  // If not logged in, don't render anything (or render something else if you prefer)
  if (!isLoggedIn) {
    return null; // Or you could return some alternative content, like a message
  }

  return (
    <a className="cart-container" onClick={logout}>
      <img className="cart" src="images/logout.png" alt="cart" />
    </a>
  );
};

export default Logout;