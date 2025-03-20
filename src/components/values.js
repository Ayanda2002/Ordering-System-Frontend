import React, { useState } from 'react';
import '../styles/values.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link for routing

const Values = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  return (
    <div>
      <main>
        <div className="info">
          <div className="heading">
            <h1>Our Values</h1>
          </div>
          <div className="value">
            <img className="heart" src="images/serve.avif" alt="Serve" />
            <p>
              Serve: At the heart of everything we do is our commitment to serving others. Whether it’s through our delicious meals or community outreach, we strive to exceed expectations and bring joy to those we serve.
            </p>
          </div>
          <div className="value">
            <img className="inclusion" src="images/inclusion.jpg" alt="Inclusion" />
            <p>
              Inclusion: We celebrate diversity and embrace people from all walks of life. Our environment fosters inclusivity, ensuring everyone feels valued and welcome.
            </p>
          </div>
          <div className="value">
            <img className="intergrity" src="images/intergrity.png" alt="Integrity" />
            <p>
              Integrity: Honesty and transparency guide our actions. We are committed to upholding the highest ethical standards in every aspect of our business.
            </p>
          </div>
          <div className="value">
            <img className="community" src="images/community.avif" alt="Community" />
            <p>
              Community: We believe in giving back and building strong connections. Supporting and uplifting our community is integral to our mission.
            </p>
          </div>
          <div className="value">
            <img className="family" src="images/famiily.avif" alt="Family" />
            <p>
              Family: Our workplace feels like home because we treat each other like family. Together, we create a supportive and nurturing environment.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Values;
