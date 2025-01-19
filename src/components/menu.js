import React, { useState } from 'react';
import '../styles/menu.css'; // Import your CSS file

const Menu = () => {
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
        <div className="menu-heading">
          <h1>Hungry? We've Got Your Back <br />(and Your Tummy)!</h1>
        </div>
        <div className="menu">
          <div className="row">
            <div className="image">
              <a href="images/garlic-bread.webp" target="_blank">
                <img src="images/garlic-bread.webp" alt="Garlic Breadsticks" />
                <p>Crispy Garlic Breadsticks</p><br />
                <p>R59.99</p>
              </a>
            </div>
            <div className="image">
              <a href="images/Poppers.png" target="_blank">
                <img src="images/Poppers.png" alt="Jalapeño Poppers" />
                <p>Cheesy Jalapeño Poppers</p><br />
                <p>R64.99</p>
              </a>
            </div>
            <div className="image">
              <a href="images/rolls.jpg" target="_blank">
                <img src="images/rolls.jpg" alt="Spring Rolls" />
                <p>Mini Spring Rolls</p><br />
                <p>R69.99</p>
              </a>
            </div>
            <div className="image">
              <a href="images/sticks.jpg" target="_blank">
                <img src="images/sticks.jpg" alt="Mozzarella Sticks" />
                <p>Golden Mozzarella Sticks</p><br />
                <p>R58.99</p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="image">
              <a href="images/pasta.jpg" target="_blank">
                <img src="images/pasta.jpg" alt="Pasta" />
                <p>Pasta Paradise</p><br />
                <p>R89.99</p>
              </a>
            </div>
            <div className="image">
              <a href="images/wrap.jpg" target="_blank">
                <img src="images/wrap.jpg" alt="Chicken Wrap" />
                <p>Fiesta Chicken Wrap</p><br />
                <p>R99.99</p>
              </a>
            </div>
            <div className="image">
              <a href="images/veggie.jpg" target="_blank">
                <img src="images/veggie.jpg" alt="Veggie Bowl" />
                <p>Veggie Power Bowl</p><br />
                <p>R119.99</p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="image">
              <a href="images/cake.avif" target="_blank">
                <img src="images/cake.avif" alt="Choco-Lava Cake" />
                <p>Choco-Lava Delight</p><br />
                <p>R69.99</p>
              </a>
            </div>
            <div className="image">
              <a href="images/fruits.jpg" target="_blank">
                <img src="images/fruits.jpg" alt="Fruit Parfait" />
                <p>Fruit Bliss Parfait</p><br />
                <p>R79.99</p>
              </a>
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

export default Menu;
