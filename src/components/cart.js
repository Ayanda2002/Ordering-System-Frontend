import React, { useState, useEffect } from 'react';
import { useCart } from "../cart-context";
import Checkout from './checkout';  
import '../styles/cart.css';
import { Link } from 'react-router-dom'; 
import {fetchCartItems, incrementCartItemAPI, decrementCartItemAPI, removeItemFromCartAPI} from './apiComponents/api-cart';

const Cart = () => {
  const [popupMessage, setPopupMessage] = useState(""); 
  const [loading, setLoading] = useState(true); 
  const { cart, setCart } = useCart();
  const [isCheckoutPage, setIsCheckoutPage] = useState(false);
  const [showCartPage, setShowCartPage] = useState(true);

  useEffect(() => {
    fetchCartItems(setCart, setLoading, setPopupMessage);
  }, [setCart]);

  const modifyCartItem = (id, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + action) }
          : item
      )
    );
  };

  //increment specific products quantity in user cart
  const incrementCartItem = async (productId) => {
    const result = await incrementCartItemAPI(productId);
    if (!result.success) {
      alert(result.message);
      return;
    }
  
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  //decrement specific products quantity in user cart
  const decrementCartItem = async (productId) => {
    const result = await decrementCartItemAPI(productId);
    if (!result.success) {
      alert(result.message);
      return;
    }
  
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  //remove specific product from users cart
  const removeItemFromCart = async (id) => {
    const result = await removeItemFromCartAPI(id);
    if (!result.success) {
      alert(result.message);
      return;
    }
  
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.prodPrice * item.quantity, 0);
  };

  const goToCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      localStorage.setItem("cartSubtotal", calculateTotal().toFixed(2));
      setShowCartPage(false);
      setIsCheckoutPage(true);
    }
  };

  return (
    <div>
      <main>
        {loading ? (
          <div className="loading-container">
            <p>Loading cart...</p>
          </div>
        ) : showCartPage ? (
          <section className="cart-container">
            <h2>Your Cart</h2>

            {popupMessage && <p className="error-message">{popupMessage}</p>}

            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="cart-grid">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img className="item-image" src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>R {item.prodPrice}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Total: R {(item.quantity * item.prodPrice)}</p>
                    </div>
                    <div className="actions">
                      <button className="add" onClick={() => incrementCartItem(item.id)}>+</button>
                      <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                      <button className="minus" onClick={() => decrementCartItem(item.id)}>-</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="cart-summary">
              <p><strong>Subtotal:</strong> <span id="cart-subtotal">R {calculateTotal().toFixed(2)}</span></p>
              <button className="checkout-btn" onClick={goToCheckout}>Checkout</button>
            </div>
          </section>
        ) : (
          isCheckoutPage && <Checkout />
        )}
      </main>
    </div>
  );
};

export default Cart;
