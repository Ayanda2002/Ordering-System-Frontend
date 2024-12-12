import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, Radio, RadioGroup, FormControlLabel, TextField, FormControl } from '@mui/material';

const Checkout = () => {
  // Example total price (static for simplicity)
  const totalPrice = 90.98;

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
          {/* Total Price */}
          <Typography variant="h6" sx={{ textAlign: 'right', marginBottom: 3 }}>
            Total: R{totalPrice.toFixed(2)}
          </Typography>

          {/* Payment method selection */}
          <FormControl component="fieldset">
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
            Confirm Order
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Checkout;
