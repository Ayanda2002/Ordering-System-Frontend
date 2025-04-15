import React, { useState, useEffect } from 'react';
import '../styles/values.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link for routing
import valuesData from './jsonData/valuesData.json'; // Import the values data from the JSON file

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
          {valuesData.values.map((value, index) => (
            <div key={index} className="value">
              <img className={value.title.toLowerCase()} src={value.image} alt={value.alt} />
              <p>{value.content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Values;
