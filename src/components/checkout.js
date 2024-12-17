import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, Radio, RadioGroup, FormControlLabel, TextField, FormControl } from '@mui/material';

const Checkout = () => {
  // State to handle selected payment method
  const [paymentMethod, setPaymentMethod] = useState('cash');

  // Handle payment method change
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  // Example total price
  const totalPrice = 90.98; // You can replace this with dynamic data as needed

  return (
    <Box
      sx={{
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff', // Matches the Menu page
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 600,
          boxShadow: 3,
          padding: 3,
          borderRadius: 2,
          border: '1px solid #ccc', // Matches the Menu card border
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 3,
            color: '#4CAF50', // Matches the Menu page button color
          }}
        >
          Checkout
        </Typography>
        <CardContent>
          {/* Total Price */}
          <Typography
            variant="h6"
            sx={{
              textAlign: 'right',
              marginBottom: 2,
              color: '#000', // Neutral text color
            }}
          >
            Total: R{totalPrice.toFixed(2)}
          </Typography>

          {/* Payment method selection */}
          <FormControl component="fieldset" sx={{ marginTop: 3 }}>
            <RadioGroup
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <FormControlLabel
                value="cash"
                control={<Radio sx={{ color: '#4CAF50' }} />}
                label="Cash On Delivery"
              />
              <FormControlLabel
                value="card"
                control={<Radio sx={{ color: '#4CAF50' }} />}
                label="Debit/Credit Card"
              />
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
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              marginTop: 3,
              width: '100%',
              backgroundColor: '#4CAF50', // Matches the Menu page button color
              color: 'white',
              '&:hover': {
                backgroundColor: '#45a049', // Slightly darker shade on hover
              },
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
