// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './logout'; // Import Logout component

const Header = ({ cartCount }) => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const toggleUserMenu = () => setUserMenuVisible((prev) => !prev);

  return (
    <div>
      <header>
        <div className="main-bar">
          <Link to="/">
            <div className="title">
              <img
                className="logo"
                src={`${process.env.PUBLIC_URL}/images/ramen.png`}
                alt="logo"
              />
              <h1>
                Yummy <br />
                Tummy's
              </h1>
            </div>
          </Link>
          <div className="icons">
            <Logout /> {/* Logout component will be shown only if the user is logged in */}
            <a className="cart-container" href="/cart">
              <img className="cart" src="images/online-shopping.png" alt="cart" />
            </a>
            <a className="cart-container">
              <div className="user-menu">
                <img className="user" src="images/user.png" alt="user" onClick={toggleUserMenu} />
                {userMenuVisible && (
                  <div className="dropdown active">
                    <a href="/sign-in">Sign In</a>
                    <a href="/sign-up">Sign Up</a>
                  </div>
                )}
              </div>
            </a>
          </div>
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/menu" className="menu">
                Menu
              </Link>
            </li>

          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
