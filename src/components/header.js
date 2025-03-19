// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './logout'; // Import Logout component
import HeaderIcons from './headerIcons'; // Import the HeaderIcons component

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
          <HeaderIcons/>
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
