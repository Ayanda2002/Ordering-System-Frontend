// CartButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // If you want to navigate programmatically

const CartButton = () => {
  const navigate = useNavigate(); // Initialize navigate hook for redirection

  // Function to open the cart (navigate to /cart page)
  const openCart = () => {
    navigate('/cart'); // Redirect to the cart page
  };

  return (
    <a className="cart-container" onClick={openCart}>
      <img className="cart" src="images/online-shopping.png" alt="cart" />
    </a>
  );
};

export default CartButton;
