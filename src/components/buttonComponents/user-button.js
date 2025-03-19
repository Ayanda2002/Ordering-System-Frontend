// UserButton.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const UserButton = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook for redirection

  // Toggle the visibility of the user menu
  const toggleUserMenu = () => {
    setUserMenuVisible(!userMenuVisible);
  };

  // Handle navigation to the Sign In page
  const handleSignIn = () => {
    navigate('/sign-in'); // Navigate to the Sign In page
  };

  // Handle navigation to the Sign Up page
  const handleSignUp = () => {
    navigate('/sign-up'); // Navigate to the Sign Up page
  };

  
  return (
    <a className="cart-container">
      <div className="user-menu">
        <img
          className="user"
          src="images/user.png"
          alt="user"
          onClick={toggleUserMenu}
        />
        {userMenuVisible && (
          <div className="dropdown active">
            <a onClick={handleSignIn}>Sign In</a>
            <a onClick={handleSignUp}>Sign Up</a>
          </div>
        )}
      </div>
    </a>
  );
};

export default UserButton;
