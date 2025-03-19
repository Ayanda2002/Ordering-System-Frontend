import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../styles/home.css'; // Import the CSS file
import Logout from './logout'; // Import the Logout component
import Header from './header'; // Import Header component
import Footer from './footer'; // Import Footer component

const Home = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };


  const closeUserMenu = (event) => {
    if (
      event.target.closest('.user-menu') === null &&
      event.target.closest('.user') === null
    ) {
      setUserMenuVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', closeUserMenu);
    return () => {
      window.removeEventListener('click', closeUserMenu);
    };
  }, []);

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <div className="card">
          <div className="circle">
            <img
              src={`${process.env.PUBLIC_URL}/images/ramen.png`}
              alt="Ramen"
              className="logo"
            />
          </div>
          <div className="content">
            <h2>
              Yummy <br /> Tummy's
            </h2>
            <p>
              Craving something delicious? Come to Tummy Yummy's, where every
              bite is packed with flavor! From comfort food to gourmet dishes,
              we've got something for everyone. Fresh, local ingredients and a
              cozy atmosphere make us your new favorite spot to eat.
            </p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/ramen.png`}
            alt="Ramen"
            className="ramen"
          />
        </div>
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
