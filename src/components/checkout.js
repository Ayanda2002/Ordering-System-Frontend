import React, { useState, useEffect } from 'react';
import '../styles/checkout.css'; // Import your CSS file

const Checkout = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [cart, setCart] = useState([
    { id: 1, name: "Chicken Ramen", price: 80, quantity: 1 },
    { id: 2, name: "Vegetarian Sushi", price: 60, quantity: 2 },
  ]);
  const [collectDeliveryOption, setCollectDeliveryOption] = useState("collect");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [address, setAddress] = useState("");
  const [deliveryFee] = useState(20); // fixed delivery fee

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  const togglePaymentFields = () => {
    if (paymentMethod === "card") {
      document.getElementById("card-fields").style.display = "block";
    } else {
      document.getElementById("card-fields").style.display = "none";
    }
  };

  const useCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Nominatim Reverse Geocoding API
        const geocodeUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

        fetch(geocodeUrl)
          .then(response => response.json())
          .then(data => {
            if (data && data.display_name) {
              setAddress(data.display_name);
            } else {
              alert("Unable to retrieve address. Please enter it manually.");
            }
          })
          .catch(error => {
            console.error("Error fetching address:", error);
            alert("Could not fetch address. Please enter it manually.");
          });
      }, function(error) {
        alert("Geolocation error: " + error.message);
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const renderCart = () => {
    let subtotal = 0;
    cart.forEach(item => {
      const total = item.price * item.quantity;
      subtotal += total;
    });

    const totalPrice = subtotal + deliveryFee;

    return {
      subtotal,
      totalPrice
    };
  };

  useEffect(() => {
    togglePaymentFields(); // Update payment fields visibility based on selected payment method
  }, [paymentMethod]);

  const { subtotal, totalPrice } = renderCart();

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
              <h3>Collect/Delivery Information</h3>
              <label htmlFor="collect-delivery-option">Select Option:</label>
              <select
                id="collect-delivery-option"
                name="collect-delivery-option"
                value={collectDeliveryOption}
                onChange={(e) => setCollectDeliveryOption(e.target.value)}
                required
              >
                <option value="collect">Collect</option>
                <option value="delivery">Delivery</option>
              </select>

              {collectDeliveryOption === "delivery" && (
                <div id="delivery-info">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your delivery address"
                    required
                  />
                  <button type="button" onClick={useCurrentLocation}>
                    Use My Current Location
                  </button>
                </div>
              )}

              {collectDeliveryOption === "collect" && (
                <div id="collect-info">
                  <label htmlFor="collect-location">Collection Location:</label>
                  <input
                    type="text"
                    id="collect-location"
                    name="collect-location"
                    placeholder="Enter your collection location"
                    required
                  />
                </div>
              )}
            </div>

            <div className="section">
              <h3>Payment Options</h3>
              <label htmlFor="payment">Select Payment Method:</label>
              <select
                id="payment"
                name="payment"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="cash">Cash</option>
                <option value="card">Card Payment</option>
              </select>
            </div>

            <div id="card-fields" style={{ display: paymentMethod === "card" ? "block" : "none" }}>
              <h3>Card Details</h3>
              <label htmlFor="card-number">Card Number:</label>
              <input type="text" id="card-number" name="card-number" placeholder="Enter card number" required />
              <label htmlFor="expiry-date">Expiry Date:</label>
              <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required />
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required />
            </div>

            <div className="cart-summary">
              <h3>Cart Summary</h3>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    const total = item.price * item.quantity;
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>R {item.price.toFixed(2)}</td>
                        <td>R {total.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="summary">
                <p><strong>Subtotal:</strong> R {subtotal.toFixed(2)}</p>
                <p><strong>Delivery Fee:</strong> R {deliveryFee.toFixed(2)}</p>
                <p><strong>Total:</strong> R {totalPrice.toFixed(2)}</p>
              </div>
            </div>

            <button className="place-order-btn" type="submit">Place Order</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="section">
            <h2>Eat</h2>
            <ul>
              <li>
                <a href="menu">Menu</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Explore</h2>
            <ul>
              <li>
                <a href="about">About Us</a>
              </li>
              <li>
                <a href="values">Our Values</a>
              </li>
              <li>
                <a href="partnerships">Partnerships</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Help</h2>
            <ul>
              <li>
                <a href="contact">Contact Us</a>
              </li>
              <li>
                <a href="faq">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="links">
          <div className="app-links">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="app-store-link"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/apple.webp`}
                alt="Download on the App Store"
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="google-play-link"
            >
              <img
                className="google"
                src={`${process.env.PUBLIC_URL}/images/google.png`}
                alt="Get it on Google Play"
              />
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/instragram.jpg`}
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/facebook.jpg`}
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/x.png`}
                alt="X (formerly Twitter)"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/youtube.png`}
                alt="YouTube"
              />
            </a>
          </div>
        </div>
        <div className="copyrights">
          <p>
            Copyright &copy; Tummy Yummy's South Africa. 2025 All Rights
            Reserved. build pwa-45-12-18_9f34a1c2
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
