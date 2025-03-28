import React, { useState } from 'react';
import '../../styles/sign-up.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link for routing
import { useNavigate } from 'react-router-dom';

const Sign_Up = () => {

  //for naivagtion to menu page
  const navigate = useNavigate();

  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  const validateSignUpForm = (event) => {
    event.preventDefault();

    const firstName = document.getElementById("name").value;
    const lastName = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const username = firstName + " " + lastName;

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }

    const API_URL = 'https://yummytummies-backend.onrender.com';

    // Register the new user
    fetch(`${API_URL}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          confirm_password: confirmPassword // Match backend naming
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    alert("Form submitted successfully!");

    // Redirect to login page after successful user registration
    navigate('/sign-in');

    return;

    
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    confirmPasswordInput.type = type;
  };

  return (
    <div>
      <main className="sign-up">
        <div className="heading">
          <h1>Sign Up</h1>
        </div>
        <fieldset>
          <form id="sign-up-form" onSubmit={validateSignUpForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" required />
            
            <label htmlFor="surname">Surname:</label>
            <input type="text" name="surname" id="surname" placeholder="Enter your surname" required />
    
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" required />
            
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              minLength="6"
              required
            />
            
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm your password"
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
            
            <button type="submit" className="sign-up-button">Sign Up</button>
          </form>
        </fieldset>
      </main>
    </div>
  );
};

export default Sign_Up;
