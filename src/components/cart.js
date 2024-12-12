import React, { useState } from 'react';

const CartPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 20.00,
      quantity: 2, // Set quantity based on user's previous selection
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.00,
      quantity: 1,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30.00,
      quantity: 3,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 10.00,
      quantity: 1,
      image: 'https://via.placeholder.com/80',
    },
  ]);

  // Calculate the total cost for all products
  const totalCost = products.reduce((total, product) => total + (product.price * product.quantity), 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      <div className="product-cards">
        {products.map(product => (
          <div 
            className="product-card" 
            key={product.id} 
            style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image" 
              style={{ width: '80px', height: '80px', marginRight: '20px' }} 
            />
            <div className="product-details" style={{ flex: 1 }}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
        <button 
          className="checkout-button" 
          style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
