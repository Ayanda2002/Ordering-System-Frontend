import React, { useState, useEffect } from 'react';
import { useCart } from "../cart-context"; // Import cart context
import { useNavigate } from "react-router-dom";
import '../styles/checkout.css'; // Import your CSS file

const Checkout = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const { cart } = useCart();  // Get cart from context
  const [collectDeliveryOption, setCollectDeliveryOption] = useState("collect");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [deliveryFee] = useState(20); // fixed delivery fee
  const [showCardFields, setShowCardFields] = useState(false); // State to control card fields visibility
 
  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  useEffect(() => {
    setShowCardFields(paymentMethod === "card"); // Show/hide card fields based on payment method
  }, [paymentMethod]);

  const renderCart = () => {
    let subtotal = 0;
    cart.forEach(item => {
      const total = item.price * item.quantity;
      subtotal += total;
    });

    const totalPrice = subtotal + deliveryFee;

    return { subtotal, totalPrice };
  };

  // useEffect(() => {
  //   togglePaymentFields(); // Update payment fields visibility based on selected payment method
  // }, [paymentMethod]);

  const { subtotal, totalPrice } = renderCart();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      // Handle checkout logic and navigation
      // navigate("/confirmation"); // Assuming "/confirmation" is where order confirmation happens
      alert("Order Set!");
    }
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
        <div className="nav">
          <ul>
            <li>
              <a href="/menu" className="menu">Menu</a>
            </li>
            <li>
              <a href="/partnerships" className="partnerships">Partnerships</a>
            </li>
            <li>
              <a href="/about" className="about-us">About Us</a>
            </li>
            <li>
              <a href="/contact" className="contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <h2>Checkout</h2>
        <section className="checkout-container">
          <form className="checkout-form">
            <div className="section">
              <h3>Collect/Delivery</h3>
              <select
                value={collectDeliveryOption}
                onChange={(e) => setCollectDeliveryOption(e.target.value)}
              >
                <option value="collect">Collect</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>
            <div className="section">
              <h3>Payment Method</h3>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="cash">Cash</option>
                <option value="card">Card</option>
              </select>
            </div>
            {paymentMethod === "card" && (
              <div id="card-fields" className="section">
                <h3>Card Details</h3>
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Expiration Date" />
                <input type="text" placeholder="CVV" />
              </div>
            )}
            <div className="cart-summary">
              <p><strong>Subtotal:</strong> <span>{subtotal}</span></p>
              <p><strong>Delivery Fee:</strong> <span>{deliveryFee}</span></p>
              <p><strong>Total Price:</strong> <span>{totalPrice}</span></p>
            </div>
            <button type="button" onClick={handleCheckout}>Place Order</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Checkout;
