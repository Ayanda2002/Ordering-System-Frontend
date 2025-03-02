import React, { useState, useEffect } from 'react';
import { useCart } from "../cart-context";
import Checkout from './checkout';  // Import the Checkout component
import '../styles/cart.css';

const Cart = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState(""); 
  const [cartDetailsPopupMessage, setCartDetailsPopupMessage] = useState(""); 
  const { cart, setCart } = useCart();
  const [isCheckoutPage, setIsCheckoutPage] = useState(false);  // State to control Checkout rendering
  const [showCartPage, setShowCartPage] = useState(true);  // State to control visibility of the cart page

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          setPopupMessage("No access token found. Please log in.");
          return;
        }

        const response = await fetch("http://127.0.0.1:8000/api/cart", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        console.log("Full API Response:", result); // ✅ Log response for debugging

        if (!result || !result.cart) {
          throw new Error("Invalid cart data format. Expected 'cart' object.");
        }

        const cartItems = result.cart;

        const productDetails = await Promise.all(
          Object.keys(cartItems).map(async (productId) => {
            const response = await fetch(`http://127.0.0.1:8000/api/product/${productId}`);
            const product = await response.json();
            return {
              id: product.id,
              name: product.prodName,
              prodPrice: product.prodPrice || 0,
              image: product.image || "default-image.jpg",
              quantity: cartItems[productId] || 1,
            };
          })
        );

        setCart(productDetails); 

      } catch (error) {
        console.error("Error fetching cart:", error);
        setPopupMessage(error.message);
      }
    };

    fetchCartItems();
  }, [setCart]);

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  const modifyCartItem = (id, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + action) }
          : item
      )
    );
  };

  const removeItemFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.prodPrice * item.quantity, 0);
  };

  const goToCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      const subtotal = calculateTotal();
      localStorage.setItem("cartSubtotal", subtotal.toFixed(2)); // Store the subtotal in localStorage
      setShowCartPage(false);  // Hide the cart page
      setIsCheckoutPage(true);  // Show the Checkout page
    }
  };

  useEffect(() => {
    if (popupMessage) {
      const timer = setTimeout(() => {
        setPopupMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popupMessage]);

  return (
    <div>
      <header>
        <div className="main-bar">
          <a href="/#">
            <div className="title">
              <img className="logo" src="images/ramen.png" alt="logo" />
              <h1>Yummy <br /> Tummy's</h1>
            </div>
          </a>
          <div className="icons">
            <a href="/cart">
              <img className="cart" src="images/online-shopping.png" alt="cart" />
            </a>
            <div className="user-menu">
              <img className="user" src="images/user.png" alt="user" onClick={toggleUserMenu} />
              {userMenuVisible && (
                <div className="dropdown active">
                  <a href="/sign-in">Sign In</a>
                  <a href="/sign-up">Sign Up</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>
        {showCartPage && (
          <section className="cart-container">
            <h2>Your Cart</h2>
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
                      <button className="add" onClick={() => modifyCartItem(item.id, 1)}>+</button>
                      <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                      <button className="minus" onClick={() => modifyCartItem(item.id, -1)}>-</button>
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
        )}
      </main>

      {popupMessage && (
        <div className="popup-message">
          <div className="popup-content">
            <span className="close-popup" onClick={() => setPopupMessage("")}>&times;</span>
            <p>{popupMessage}</p>
          </div>
        </div>
      )}

      {isCheckoutPage && <Checkout />}  {/* Conditionally render Checkout page */}
    </div>
  );
};

export default Cart;
