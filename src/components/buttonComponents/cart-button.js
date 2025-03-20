import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCachedCartProducts, setCachedCartProducts } from '../cacheComponents/cache-cart-products';
import { fetchCartItems } from '../apiComponents/api-cart';
import { useCart } from '../../cart-context';

const CartButton = () => {
  const navigate = useNavigate();
  const { setCart } = useCart();
  const [loading, setLoading] = useState(false); // ✅ Loading state
  const [popupMessage, setPopupMessage] = useState(""); // ✅ Error message state
  const isLoggedIn = !!localStorage.getItem('accessToken');

  const openCart = async () => {
    if (!isLoggedIn) {
      alert("You must be logged in to go to your cart");
      return;
    }
    else{
      navigate('/cart');
    }

    
  };

  return (
    <a className="cart-container" onClick={openCart}>
      {loading ? <span>Loading...</span> : <img className="cart" src="images/online-shopping.png" alt="cart" />}
      {popupMessage && <p className="error-message">{popupMessage}</p>}
    </a>
  );
};

export default CartButton;
