import React, { useEffect, useState } from 'react';
import '../styles/menu.css'; // Import your CSS file

const Menu = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);

  const accessToken = localStorage.getItem('accessToken');

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/product', {
        headers: {
          //'Authorization': `Bearer ${accessToken}`,
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
    try {
      const response = await fetch('http://127.0.0.1:8000/api/cart', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      setCartCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const increaseQuantity = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const decreaseQuantity = () => {
    setCartCount((prevCount) => Math.max(prevCount - 1, 0));
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
            <a className="cart-container" href="/cart">
              <img className="cart" src="images/online-shopping.png" alt="cart" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
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
        <div className="menu-heading">
          <h1>Hungry? We've Got Your Back <br />(and Your Tummy)!</h1>
        </div>
        <div className="menu">
          <div className="row">
            <div className="image">
              <h1>Product List</h1>
              
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <a href={`/product/${product.id}`}>
                    <img src={`images/user.png`} alt={product.prodName} />
                    <p>{product.prodName}</p><br />
                    <p>R{product.prodPrice}</p>
                  </a>
                  <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  <div className="quantity-controls">
                    <button className="minus" onClick={decreaseQuantity}>-</button>
                    <button className="add" onClick={increaseQuantity}>+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
