import React, { useState } from "react";
import "../styles/faq.css"; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link for routing
import Logout from './logout'; // Import the Logout component
import Header from './header'; // Import Header component
import Footer from './footer'; // Import Footer component


const Faq = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [visibleFaqIndex, setVisibleFaqIndex] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  
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
        <Header/>
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
              <div className={`faq ${visibleFaqIndex === index ? "active" : ""}`} key={index}>
              <h3 onClick={() => toggleFaq(index)}>{faq.question}</h3>
              {visibleFaqIndex === index && <p>{faq.answer}</p>}
             </div>          
            ))}
          </div>
        </div>
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
};

export default Faq;
