import React, { useState } from 'react';

const BrowseProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 20.00,
      quantity: 0,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.00,
      quantity: 0,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30.00,
      quantity: 0,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 10.00,
      quantity: 0,
      image: 'https://via.placeholder.com/80',
    },
  ]);

  const updateQuantity = (id, action) => {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id === id) {
          let newQuantity = action === 'increase' ? product.quantity + 1 : product.quantity - 1;
          if (newQuantity >= 0) {
            return { ...product, quantity: newQuantity };
          }
        }
        return product;
      })
    );
  };

  const addToCart = (id) => {
    const productToAdd = products.find(product => product.id === id);
    if (productToAdd.quantity > 0) {
      console.log(`Added ${productToAdd.quantity} of ${productToAdd.name} to the cart`);
      // Here you would add the product to the cart (this example just logs the action)
    }
  };

  return (
    <div className="browse-products">
      <h2>Menu</h2>

      <div className="product-cards" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {products.map(product => (
          <div
            className="product-card"
            key={product.id}
            style={{
              width: '30%', // Each card will take up 30% of the container width (3 cards per row)
              margin: '10px 0', // Vertical margin
              textAlign: 'center',
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '8px',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              style={{
                width: '80px',
                height: '80px',
                marginBottom: '10px',
              }}
            />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>

            <div
              className="quantity-controls"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <button onClick={() => updateQuantity(product.id, 'decrease')}>-</button>
              <span style={{ margin: '0 10px' }}>{product.quantity}</span>
              <button onClick={() => updateQuantity(product.id, 'increase')}>+</button>
            </div>

            <p style={{ fontWeight: 'bold' }}>
              Total: ${(product.price * product.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => addToCart(product.id)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseProducts;
