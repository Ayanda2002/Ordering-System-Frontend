import React, { useState } from 'react';
import '../styles/about.css'; // Import your CSS file

const About = () => {
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
        <div className="about-container">
          <div className="heading">
            <img src="images/ramen.png" alt="ramen" />
            <h1>About Us</h1>
          </div>
          <div className="about-us">
            <p>
              Welcome to Yummy Tummy's, where food is more than just sustenance—it's a celebration of flavor, connection, and community. Our journey began with a simple yet powerful idea: to create a place where people can come together to enjoy exceptional food in a warm and welcoming atmosphere.
              <br /><br />
              At Yummy Tummy's, we believe that every meal tells a story. From the sizzling of fresh ingredients on the grill to the vibrant colors of carefully plated dishes, our team is dedicated to crafting experiences that delight the senses. Whether you're here for a quick bite, a family dinner, or a celebration with friends, our goal is to make every visit special.
              <br /><br />
              Whether you're exploring new tastes or indulging in familiar favorites, Yummy Tummy's is here to satisfy your cravings and warm your heart. Come join us, and discover the magic of great food, good company, and unforgettable moments.
            </p>
          </div>
        </div>
        <div className="about-info">
            <div className="line">
                <span>Our</span>
                <br />
                <span className="highlight">Vision</span>
            </div>
            <p className="about">
                At Yummy Tummy's, our vision is to become more than just a restaurant—we aspire to be a cherished destination where people gather to enjoy great food and create lasting memories. We believe that a meal is not just about satisfying hunger but about sharing moments, building connections, and celebrating the joy of togetherness.
                <br /><br />
                Our goal is to bring people closer through a shared love of delicious food, served with warmth and care. We strive to create a space where every guest feels welcome, whether they're joining us for a family dinner, a celebration, or simply a moment of comfort on a busy day.
                <br /><br />
                We also envision Yummy Tummy's as a leader in culinary creativity, blending tradition with innovation to craft dishes that excite the palate and inspire the soul. By embracing sustainability, supporting local communities, and prioritizing fresh, high-quality ingredients, we aim to make every bite not only delicious but meaningful.
                <br /><br />
                In everything we do, we are guided by a desire to bring joy to your life—one plate at a time. Together, we're creating a world where good food leads to great memories and where everyone leaves with a happy heart and a full tummy.
            </p>
        </div>

        <div className="about-info">
            <div className="line">
                <span>What</span>
                <br />
                <span>Makes Us</span>
                <br />
                <span className="highlight">Special?</span>
            </div>
             <p className="special">
                <span style={{color: 'red'}}>Freshness You Can Taste</span><br />
                We believe that great food starts with great ingredients. That's why we source the freshest produce, finest meats, and highest-quality spices to craft every dish. Each plate is a testament to our commitment to delivering authentic, fresh flavors that you'll savor with every bite.
                <br /><br />
                <span style={{color: 'red'}}>A Welcoming Atmosphere</span><br />
                We've created a space that's as inviting as the food we serve. From cozy seating to warm, friendly service, Yummy Tummy's is a place where families, friends, and individuals can gather to share meals and create memories.
                <br /><br />
                <span style={{color: 'red'}}>Sustainability Matters</span><br />
                We care about the planet as much as we care about our food. Whenever possible, we use eco-friendly practices and locally sourced ingredients to minimize our environmental impact while supporting local farmers and suppliers.
                <br /><br />
                <span style={{color: 'red'}}>Made for Everyone</span><br />
                At Yummy Tummy's, everyone is welcome. Whether you're stopping by for a quick lunch, a family dinner, or a celebration, our goal is to ensure you leave with a full stomach and a happy heart.
            </p>
        </div>
        
        <div className="about-info">
            <div className="line">
                <span>Our</span>
                <br />
                <span className="highlight">Commitment</span>
            </div>
            <p className="commitment">
                At Yummy Tummy's, our commitment goes beyond serving delicious meals; it's about creating an experience that you'll cherish every time you visit. From the moment you step through our doors, our friendly staff ensures you feel welcome, valued, and cared for. We believe great food starts with high-quality ingredients, which is why we source only the freshest produce, meats, and spices to craft every dish with care.
                <br /><br />
                Our chefs are dedicated to perfecting every recipe, ensuring that each meal is consistently delicious and beautifully presented. We've created a warm and inviting atmosphere where you can relax, connect with loved ones, and enjoy your time with us, whether you're celebrating a special occasion or stopping by for a quick bite.
            </p>
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

export default About;
