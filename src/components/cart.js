import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const CartPage = ({ setActiveSection, setActiveButton }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 20.0,
      quantity: 2,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.0,
      quantity: 1,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30.0,
      quantity: 3,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 10.0,
      quantity: 1,
      image: 'https://via.placeholder.com/80',
    },
  ]);

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: '#f9f9f9', // Similar background color
        borderRadius: '8px', // Adds some consistent styling
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow for elevation
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          marginBottom: 3,
          color: '#2c7b2f', // Green color for heading
          fontWeight: 'bold',
        }}
      >
        Cart
      </Typography>

      {/* Product List */}
      {products.map((product) => (
        <Box
          key={product.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 2,
            padding: 2,
            backgroundColor: '#ffffff', // Card background
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
            <Typography variant="h6" sx={{ color: '#333', fontWeight: '600' }}>
              {product.name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Price: ${product.price}
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Quantity: {product.quantity}
            </Typography>
          </Box>
        </Box>
      ))}

      {/* Total Price */}
      <Typography
        variant="h5"
        sx={{
          marginTop: 3,
          color: '#2c7b2f', // Matches theme
          fontWeight: 'bold',
        }}
      >
        Total: ${calculateTotalPrice().toFixed(2)}
      </Typography>

      {/* Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#2c7b2f',
            color: '#2c7b2f',
            ':hover': {
              borderColor: '#216623',
              backgroundColor: '#f1f8f3', // Light green hover effect
            },
          }}
          onClick={() => {
            setActiveSection('menu');
            setActiveButton('menu');
          }}
        >
          Continue Shopping
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2c7b2f',
            color: '#fff',
            ':hover': {
              backgroundColor: '#216623', // Darker green hover effect
            },
          }}
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
