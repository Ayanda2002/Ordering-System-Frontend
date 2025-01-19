import React, { useState } from "react";
import "../styles/faq.css"; // Import your CSS file

const Faq = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [visibleFaqIndex, setVisibleFaqIndex] = useState(null);

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  const toggleFaq = (index) => {
    setVisibleFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "1. What is Yummy Tummy's?",
      answer:
        "Yummy Tummy's is a restaurant specializing in delicious, freshly prepared meals inspired by global cuisines.",
    },
    {
      question: "2. Do you offer delivery services?",
      answer:
        "Yes, we offer delivery services. You can place your orders online or through our mobile app.",
    },
    {
      question: "3. What are your operating hours?",
      answer: "We are open every day from 9:00 AM to 10:00 PM.",
    },
    {
      question: "4. Do you cater for special dietary requirements?",
      answer:
        "Yes, we offer vegetarian, vegan, and gluten-free options. Please inform our staff about any allergies or dietary restrictions.",
    },
    {
      question: "5. Do you host private events?",
      answer:
        "Yes, we host private events for birthdays, anniversaries, and corporate gatherings. Contact us for more details and booking options.",
    },
    {
      question: "6. What payment methods do you accept?",
      answer:
        "We accept cash, credit cards, debit cards, and popular mobile payment options like Apple Pay and Google Pay.",
    },
    {
      question: "7. Are your ingredients locally sourced?",
      answer:
        "We prioritize using locally sourced and fresh ingredients to ensure quality and support local farmers.",
    },
    {
      question: "8. Is your restaurant family-friendly?",
      answer:
        "Yes, our restaurant is family-friendly, and we offer a special kids’ menu for our younger guests.",
    },
  ];

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
              <a href="/menu" className="menu">
                Menu
              </a>
            </li>
            <li>
              <a href="/partnerships" className="partnerships">
                Partnerships
              </a>
            </li>
            <li>
              <a href="/about" className="about-us">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="contact-us">
                Contact Us
              </a>
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
            {faqData.map((faq, index) => (
              <div className="faq" key={index}>
                <h3 onClick={() => toggleFaq(index)}>{faq.question}</h3>
                {visibleFaqIndex === index && <p>{faq.answer}</p>}
              </div>
            ))}
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
