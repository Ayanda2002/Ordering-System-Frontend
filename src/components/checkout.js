import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, List, ListItem, ListItemText, Radio, RadioGroup, FormControlLabel, TextField, FormControl, Grid, Avatar } from '@mui/material';

const Checkout = () => {
  // Example items in the cart
  const cartItems = [
    { id: 1, name: 'Item 1', price: 29.99, imageUrl: 'https://via.placeholder.com/80' },
    { id: 2, name: 'Item 2', price: 15.99, imageUrl: 'https://via.placeholder.com/80' },
    { id: 3, name: 'Item 3', price: 45.00, imageUrl: 'https://via.placeholder.com/80' },
  ];

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  // State to handle selected payment method
  const [paymentMethod, setPaymentMethod] = useState('cash');

  // Handle payment method change
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Box
      sx={{
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 600,
          boxShadow: 3,
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 3,
            color: '#2c7b2f',
          }}
        >
          Checkout
        </Typography>
        <CardContent>
          {/* Cart items list */}
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <Avatar
                  src={item.imageUrl}
                  alt={item.name}
                  sx={{ width: 80, height: 80, marginRight: 2 }}
                />
                <Box>
                  <ListItemText primary={item.name} secondary={`R${item.price.toFixed(2)}`} />
                </Box>
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" sx={{ textAlign: 'right', marginTop: 2 }}>
            Total: R{totalPrice}
          </Typography>

          {/* Payment method selection */}
          <FormControl component="fieldset" sx={{ marginTop: 3 }}>
            <RadioGroup
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <FormControlLabel value="cash" control={<Radio />} label="Cash On Delivery" />
              <FormControlLabel value="card" control={<Radio />} label="Debit/Credit Card" />
            </RadioGroup>
          </FormControl>

          {/* Display Card Details Form if Debit/Credit Card is selected */}
          {paymentMethod === 'card' && (
            <Box sx={{ marginTop: 2 }}>
              <TextField
                label="Card Number"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Expiration Date (MM/YY)"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="CVV"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 2 }}
              />
            </Box>
          )}

          {/* Confirm Order Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              marginTop: 3,
              width: '100%',
            }}
          >
            Place Order
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Checkout;
