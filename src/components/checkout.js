import React from 'react';
import { Box, Card, CardContent, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const Checkout = () => {
  // Example items in the cart
  const cartItems = [
    { id: 1, name: 'Item 1', price: 29.99 },
    { id: 2, name: 'Item 2', price: 15.99 },
    { id: 3, name: 'Item 3', price: 45.00 },
  ];

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

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
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id}>
                <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" sx={{ textAlign: 'right', marginTop: 2 }}>
            Total: ${totalPrice}
          </Typography>
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
            Complete Checkout
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Checkout;
