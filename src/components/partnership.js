import React, { useState } from 'react';
import '../styles/partnership.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link for routing

const Partnership = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  return (
    <div>
      <main>
        <div className="partnership-container">
          <div className="heading">
            <h1>In Partnership With<br/></h1>
          </div>
          <div className="logo">
            <img src="images/partnership.png" alt="Partnership" />
          </div>
          <div className="partnership">
            <p>
              At Yummy Tummy's, we are thrilled to announce our strategic partnership with <span style={{ color: 'red', fontWeight: 'bold' }}>The Jugamsoft Group</span>, a renowned software company committed to innovation and excellence. Together, we aim to elevate your dining experience by seamlessly blending technology with culinary art.
              <br /><br />
              The Jugamsoft Group brings cutting-edge solutions to enhance every aspect of our restaurant operations, from streamlining online reservations to providing personalized customer experiences through advanced data insights. Their expertise allows us to focus on what we do best: serving you mouthwatering dishes in a warm, welcoming environment.
              <br /><br />
              This partnership enables us to introduce exciting new features, including a user-friendly mobile app for table bookings, takeaway orders, and exclusive deals tailored to your preferences. With Jugamsoft's technology and our passion for food, we're setting the stage for a dining experience like no other.
              <br /><br />
              Together, Yummy Tummy's and The Jugamsoft Group are redefining how technology and hospitality come together to create unforgettable moments.
            </p>
          </div>
        </div>
        
        <div className="partnership-info">
          <div className="line">
            <span>Our</span>
            <br />
            <span className="highlight">Vision Together</span>
          </div>
          <p  className="commitment">
            Yummy Tummy's and The Jugamsoft Group share a unified vision: to create a dining experience that seamlessly combines technology, sustainability, and exceptional food. Together, we are committed to offering a perfect blend of tradition and innovation, where every customer feels valued and delighted.
            <br /><br />
            Through this partnership, we aim to lead the industry in integrating smart solutions that prioritize customer satisfaction, operational efficiency, and environmental responsibility. From digital loyalty programs to eco-friendly order management systems, we're crafting a future where every meal not only satisfies your taste buds but also contributes to a more sustainable world.
            <br /><br />
            Our vision is simple yet profound: to make Yummy Tummy's your go-to restaurant for exceptional food, unforgettable moments, and groundbreaking innovations—all powered by our collaboration with The Jugamsoft Group.
          </p>
        </div>

        <div className="partnership-info">
          <div className="line">
            <span>What We're</span>
            <br />
            <span className="highlight">Achieving Together</span>
          </div>
          <p className="achievements">
            Revolutionizing Dining: Smart table bookings, real-time order tracking, and AI-driven menu suggestions to personalize your experience. 
            <br />
            Sustainability in Focus: Energy-efficient operations and digital-first solutions to reduce our environmental footprint.
            <br />
            Community-Centric Approach: Supporting local suppliers and offering exclusive features for loyal customers.
            <br /><br />
            With this partnership, the possibilities are endless, and your satisfaction is at the heart of every decision we make.
          </p>
        </div>

        <div className="partnership-info">
          <div className="line">
            <span>Your</span>
            <br />
            <span className="highlight">Role in This Journey</span>
          </div>
          <p className="role">
            At the heart of Yummy Tummy's vision is you—our valued customer. Your feedback and support drive us to innovate and excel. You can share your thoughts and suggestions through our feedback platform, letting us know how we can better serve you. Our upcoming loyalty program will offer exclusive benefits, providing an exciting way to stay connected with our brand. Additionally, spreading the word about our eco-friendly and tech-driven initiatives to friends and family helps amplify our mission to create a sustainable and innovative dining experience.
            <br /><br />
            Together, we can make Yummy Tummy's a beacon of innovation and sustainability in the dining world.
          </p>
        </div>        
      </main>
    </div>
  );
};

export default Partnership;
