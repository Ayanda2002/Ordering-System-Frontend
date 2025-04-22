import React, { useEffect, useState } from 'react';
import '../styles/menu.css';
import { getCachedProducts } from './cacheComponents/cache-products';
import { addToCart } from './apiComponents/api-cart';

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedProducts = getCachedProducts();
    if (cachedProducts && cachedProducts.length > 0) {
      setProducts(cachedProducts);
    } else {
      console.error('No cached data found.');
      setProducts([]);
    }
    setLoading(false);
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
                  <img src={product.prodImagePath} alt={product.prodName} />
                  <p>{product.prodName}</p>
                  <p>R{product.prodPrice}</p>

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
