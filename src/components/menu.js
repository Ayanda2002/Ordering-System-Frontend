import React, { useEffect, useState } from 'react';
import '../styles/menu.css';
import { Link } from 'react-router-dom';
import { getCachedProducts } from './cacheComponents/cache-products';
import { addToCart } from './apiComponents/api-cart'; // Restored API function

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedProducts = getCachedProducts();
    if (cachedProducts && cachedProducts.length > 0) {
      setProducts(cachedProducts);
    } else {
      console.error('No cached data found. This should not happen.');
      setProducts([]); // fallback to empty list to avoid hanging
    }
    setLoading(false); // ✅ Always stop loading
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
    const accessToken = !!localStorage.getItem("accessToken");
    if (accessToken) {
      const result = await addToCart(productId, quantity);
      if (result.success) {
        alert("Item added to cart!");
      } else {
        alert(result.message || "Failed to add item.");
      }
    } else {
      alert("You must be logged in to add to cart");
    }
  };

  return (
    <div>
      <main>
        {loading ? (
          <div className="loading-container">
            <p>Loading menu...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="loading-container">
            <p>No products available at the moment.</p>
          </div>
        ) : (
          <div className="menu">
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <a href={`/product/${product.id}`}>
                    <img src={product.prodImagePath} alt={product.prodName} />
                    <p>{product.prodName}</p><br />
                    <p>R{product.prodPrice}</p>
                  </a>
                  <div className="quantity-controls">
                    <button className="minus" onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span className="quantity-display">{quantities[product.id] || 1}</span>
                    <button className="add" onClick={() => increaseQuantity(product.id)}>+</button>
                  </div>
                  <button
                    className="add-to-cart"
                    onClick={() => handleAddToCart(product.id, quantities[product.id] || 1)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Menu;
