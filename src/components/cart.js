import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const CartPage = ({ setActiveSection, setActiveButton }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 20.00,
      quantity: 2,
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

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Cart
      </Typography>

      {products.map((product) => (
        <Box
          key={product.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 2,
            padding: 2,
            border: '1px solid #ddd',
            borderRadius: '8px',
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '80px', height: '80px', marginRight: '16px' }}
          />
          <Box>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body2">Price: ${product.price}</Typography>
            <Typography variant="body2">Quantity: {product.quantity}</Typography>
          </Box>
        </Box>
      ))}

      <Typography variant="h5" sx={{ marginTop: 3 }}>
        Total: ${calculateTotalPrice().toFixed(2)}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
        <Button
          variant="outlined"
          onClick={() => {
            setActiveSection('menu');
            setActiveButton('menu');
          }}
        >
          Continue Shopping
        </Button>
        
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setActiveSection('checkout');
            setActiveButton('checkout');
          }}
        >
          Checkout
        </Button>

      </Box>
    </Box>
  );
};

export default CartPage;
