import React, { useState } from 'react';
import '../styles/contact.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link for routing
import Logout from './logout'; // Import the Logout component

const Contact = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formPayload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
  
    try {
      const response = await fetch('http://127.0.0.1:8000/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Form Submitted:', data);
        alert('Thank you for reaching out! We will get back to you soon.');
        // Optionally clear the form
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message, please try again later.');
    }
  };

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
            <Logout/>
            <a className="cart-container" href="/cart">
              <img className="cart" src="images/online-shopping.png" alt="cart" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </a>
            <a className="cart-container">
              <div className="user-menu">
                <img className="user" src="images/user.png" alt="user" onClick={toggleUserMenu} />
                {userMenuVisible && (
                  <div className="dropdown active">
                    <a href="/sign-in">Sign In</a>
                    <a href="/sign-up">Sign Up</a>
                  </div>
                )}
              </div>
            </a>
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
        <div className="hello">
          <img src="images/hello.jpg" alt="Hello bord-sign" />
        </div>
        <div className="contact-info">
          <div className="line">
            <span>Get in </span>
            <br />
            <span className="highlight">Touch</span>
          </div>
          <p>
            At Yummy Tummy's, your feedback matters. We welcome your thoughts, suggestions, compliments, and concerns because they inspire us to serve you better every day. Whether you have a unique idea, a kind note, or an issue you'd like to share, we're here to listen and grow. Your input drives our commitment to innovation, ensuring we deliver an unforgettable dining experience every time you visit.
            <br /><br />
            We value every compliment—it fuels our passion to keep delighting our guests. Likewise, complaints are an opportunity for us to learn, improve, and make sure your next visit is even better. Don't hesitate to reach out—your voice helps shape the Yummy Tummy's experience.
            <br /><br />
            Thank you for being part of our journey to create a place where good food and great memories come together. Together, let's make Yummy Tummy's the ultimate destination for deliciousness and happiness!
          </p>
        </div>
        <div className="user-input">
          <form onSubmit={handleSubmit}>
            <div className="left">
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First name"
                value={formData.first_name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last name"
                value={formData.last_name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="subject" style={{ color: 'black' }}>Please choose a subject:</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="" disabled>Please choose a subject</option>
                <option value="complain">Complain</option>
                <option value="compliment">Compliment</option>
                <option value="suggestion">Suggestion</option>
              </select>
            </div>
            <div className="right">
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
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
            Copyright &copy; Tummy Yummy's South Africa. 2025 All Rights Reserved. build pwa-45-12-18_9f34a1c2
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
