import React, { useEffect, useState } from 'react';
import '../styles/menu.css';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { getCachedProducts } from './cacheComponents/cache-products';
import { addToCart } from './apiComponents/api-cart'; // Restored API function

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get cached products (no API call here)
    const cachedProducts = getCachedProducts();
    if (cachedProducts) {
      setProducts(cachedProducts);
      setLoading(false);
    } else {
      console.error('No cached data found. This should not happen.');
    }
  }, []);

  const increaseQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }));
  };

  const decreaseQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 1) - 1, 1),
    }));
  };

  const handleAddToCart = async (productId, quantity) => {
    const accessToken = !!localStorage.getItem("accessToken")
    if(accessToken){
      const result = await addToCart(productId, quantity);
      if (result.success) {
        alert("Item added to cart!");
      } else {
        alert(result.message || "Failed to add item.");
      }
    }
    else{
      alert("You must be logged in to add to cart")
    }

  };

  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        {loading ? (
          <div className="loading-container">
            <p>Loading menu...</p>
          </div>
        ) : (
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
                    <span className="quantity-display">{quantities[product.id] || 1}</span>
                    <button className="add" onClick={() => increaseQuantity(product.id)}>+</button>
                  </div>
                  <button className="add-to-cart" onClick={() => handleAddToCart(product.id, quantities[product.id] || 1)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Menu;
