// HeaderIcons.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './logout'; // Assuming Logout component is in the same directory
import CartButton from './buttonComponents/cart-button'; // Import CartButton component
import UserButton from './buttonComponents/user-button'; // Import UserButton component

const HeaderIcons = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuVisible((prevState) => !prevState);
  };

  return (
    <div className="icons">
      <Logout /> {/* Logout component will be shown only if the user is logged in */}
      <CartButton/>
      <UserButton/>
    </div>
  );
};

export default HeaderIcons;
