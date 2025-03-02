import React, { useEffect, useState } from 'react';
import '../styles/menu.css'; // Import your CSS file

const Menu = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({}); // Track quantity for each product

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/product', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = async (product) => {
    const quantity = quantities[product.id] || 1; // Use selected quantity or default to 1
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        console.error('Access token not found. User might not be logged in.');
        return;
      }

      const response = await fetch('http://127.0.0.1:8000/api/cart/add', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product.id, quantity }),
      });

      if (response.status === 401) {
        alert('You are not logged in. Please sign in to add to your cart.');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      const data = await response.json();
      console.log('Updated Cart:', data.cart);

      // Update cart count based on total items in cart
      setCartCount(Object.values(data.cart).reduce((a, b) => a + b, 0));

    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const increaseQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1, // Override previous quantity with the new one
    }));
  };

  const decreaseQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 1) - 1, 1), // Override previous quantity with the new one (minimum 1)
    }));
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
            <a className="cart-container" href="#">
              <img className="cart" src="images/logout.png" alt="cart" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </a>
            <a className="cart-container" href="/cart">
              <img className="cart" src="images/online-shopping.png" alt="cart" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
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
        <div className="menu-heading">
          <h1>Menu</h1>
        </div>
        <div className="menu">
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <a href={`/product/${product.id}`}>
                  <img src={`images/user.png`} alt={product.prodName} />
                  <p>{product.prodName}</p><br />
                  <p>R{product.prodPrice}</p>
                </a>
                <div className="quantity-controls">
                  <button className="minus" onClick={() => decreaseQuantity(product.id)}>-</button>
                  <span className="quantity-display">{quantities[product.id] || 1}</span> {/* Display the quantity here */}
                  <button className="add" onClick={() => increaseQuantity(product.id)}>+</button>
                </div>
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        
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
            Copyright &copy; Tummy Yummy's South Africa. 2025 All Rights Reserved. build pwa-45-12-18_9f34a1c2
          </p>
        </div>
      </footer>
      
    </div>
  );
};

export default Menu;
