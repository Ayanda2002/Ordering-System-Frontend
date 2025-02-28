import React, { useState, useEffect  } from 'react';
import { useCart } from "../cart-context";
import { useNavigate } from "react-router-dom";
import '../styles/cart.css'; // Import your CSS file

const Cart = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/cart', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Include token for authentication
          },
        });
        const result = await response.json();
  
        if (!result.success) {
          console.error("Error fetching cart items:", result.error);
          return;
        }
  
        const cartData = result.data.map((cartItem) => ({
          id: cartItem.cart_item.id,
          name: cartItem.product.name,
          price: Number(cartItem.product.price) || 0,
          quantity: cartItem.menu_item.id in cartItem.user.menuCartItems 
            ? cartItem.user.menuCartItems[cartItem.menu_item.id]
            : 1, // Get quantity from `menuCartItems`
        }));
  
        setCart(cartData);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
  
    if (cart.length === 0) {
      fetchCartItems();
    }
  }, [cart, setCart]);
  

  // Toggles the visibility of the user menu
  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  // Removes an item from the cart
  const removeItemFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  // Increases the quantity of an item in the cart
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decreases the quantity of an item in the cart
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  // Handles the checkout process
  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      navigate("api/checkout");
    }
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 1;
      return total + price * quantity;
    }, 0);
  };

  return (
    <div>
      <header>
        <div className="main-bar">
          <a href="/#">
            <div className="title">
              <img className="logo" src="images/ramen.png" alt="logo" />
              <h1>
                Yummy <br />
                Tummy's
              </h1>
            </div>
          </a>
          <div className="icons">
            <a href="/cart">
              <img className="cart" src="images/online-shopping.png" alt="cart" />
            </a>
            <div className="user-menu">
              <img
                className="user"
                src="images/user.png"
                alt="user"
                onClick={toggleUserMenu}
              />
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
        <section className="cart-container">
          <h2>Your Cart</h2>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="content">{item.name}</td>
                  <td className="content">{item.quantity}</td>
                  <td className="content">{item.price}</td>
                  <td className="content">{item.quantity * item.price}</td>
                  <td>
                    <div className="actions">
                      <button className="add" onClick={() => increaseQuantity(item.id)}>+</button>
                      <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                      <button className="minus" onClick={() => decreaseQuantity(item.id)}>-</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <p><strong>Subtotal:</strong> <span id="cart-subtotal">R {calculateTotal().toFixed(2)}</span></p>
            <button className="checkout-btn" onClick={checkout}>Checkout</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
