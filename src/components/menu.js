import React, { useEffect, useState } from 'react';
import '../styles/menu.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import Link for routing
import Logout from './logout'; // Import the Logout component
import Header from './header'; // Import Header component
import Footer from './footer'; // Import Footer component


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
        alert('Please log in to Add to Cart');
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
        <Header/>
      </header>

      <main>
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
        <Footer/>
      </footer>
      
    </div>
  );
};

export default Menu;
