import React, { useState } from 'react';
import '../styles/faq.css'; // Import your CSS file

const Faq = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
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
                <div className="dropdown">
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
              <a href="/menu" className="menu">Menu</a>
            </li>
            <li>
              <a href="/partnerships" className="partnerships">Partnerships</a>
            </li>
            <li>
              <a href="/about" className="about-us">About Us</a>
            </li>
            <li>
              <a href="/contact" className="contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="faq-info">
          <div className="line">
            <span>Frequently</span>
            <br />
            <span>Asked</span>
            <br />
            <span className="highlight">Questions?</span>
          </div>
          <div className="faq-section">
            <div className="faq">
              <h3>1. What is Yummy Tummy's?</h3>
              <p>Yummy Tummy's is a restaurant specializing in delicious, freshly prepared meals inspired by global cuisines.</p>
            </div>
            <div className="faq">
              <h3>2. Do you offer delivery services?</h3>
              <p>Yes, we offer delivery services. You can place your orders online or through our mobile app.</p>
            </div>
            <div className="faq">
              <h3>3. What are your operating hours?</h3>
              <p>We are open every day from 9:00 AM to 10:00 PM.</p>
            </div>
            <div className="faq">
              <h3>4. Do you cater for special dietary requirements?</h3>
              <p>Yes, we offer vegetarian, vegan, and gluten-free options. Please inform our staff about any allergies or dietary restrictions.</p>
            </div>
            <div className="faq">
              <h3>5. Do you host private events?</h3>
              <p>Yes, we host private events for birthdays, anniversaries, and corporate gatherings. Contact us for more details and booking options.</p>
            </div>
            <div className="faq">
              <h3>6. What payment methods do you accept?</h3>
              <p>We accept cash, credit cards, debit cards, and popular mobile payment options like Apple Pay and Google Pay.</p>
            </div>
            <div className="faq">
              <h3>7. Are your ingredients locally sourced?</h3>
              <p>We prioritize using locally sourced and fresh ingredients to ensure quality and support local farmers.</p>
            </div>
            <div className="faq">
              <h3>8. Is your restaurant family-friendly?</h3>
              <p>Yes, our restaurant is family-friendly, and we offer a special kids’ menu for our younger guests.</p>
            </div>
          </div>
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
            Copyright &copy; Tummy Yummy's South Africa. 2025 All Rights
            Reserved. build pwa-45-12-18_9f34a1c2
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Faq;
