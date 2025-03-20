import React, { useState } from 'react';
import '../styles/about.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link for routing

const About = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  return (
    <div>
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
    </div>
  );
};

export default About;
