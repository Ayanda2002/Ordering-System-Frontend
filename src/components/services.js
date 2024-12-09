import React, { useState } from "react";
import { Typography, Box, Grid, Card, CardContent, Button } from "@mui/material";
import Booking1 from "./Booking1";
import Booking2 from "./Booking2";
import Booking3 from "./Booking3";

const Services = () => {
  // Define the list of services and their descriptions, prices, hosting, and service fees
  const services = [
    {
      title: "Standard Website",
      description:
        "A simple, user-friendly website for individuals looking to establish an online presence. Includes a clean layout with essential features like a contact form and portfolio or service listings. Perfect for personal blogs, portfolios, or showcasing work.",
      price: "R3000",
      hostingPrice: "R250/year",
      serviceFee: "R100/update or change",
      bookingComponent: <Booking1 onClose={() => setOpenBooking(null)} />,
    },
    {
      title: "Business Starter Website",
      description:
        "An entry-level solution for small businesses to establish a professional online presence. This package includes a functional, user-friendly website with essential features at an affordable price.",
      price: "R5000",
      hostingPrice: "R250/year",
      serviceFee: "R150/update or change",
      bookingComponent: <Booking2 onClose={() => setOpenBooking(null)} />,
    },
    {
      title: "Premium Business Website",
      description:
        "Custom, feature-rich website designed for growing businesses. Includes advanced functionality, integrations, and a modern, responsive design for an engaging, seamless user experience across devices.",
      price: "R8000",
      hostingPrice: "R250/year",
      serviceFee: "R200/update or change)",
      bookingComponent: <Booking3 onClose={() => setOpenBooking(null)} />,
    },
  ];

  // State to manage booking component visibility
  const [openBooking, setOpenBooking] = useState(null);

  const handleOpenBooking = (index) => {
    setOpenBooking(index);
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* Services Grid */}
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: 3,
                borderRadius: 2,
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Lora', serif",
                    fontWeight: "bold",
                    color: "#2c7b2f",
                    textAlign: "center",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: 1,
                    textAlign: "center",
                    color: "#555",
                  }}
                >
                  {service.description}
                </Typography>

                {/* Price, Hosting, and Service Fee */}
                <Box sx={{ marginTop: 2, textAlign: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#2c7b2f", fontWeight: "bold" }}
                  >
                    Price: {service.price}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    Hosting: {service.hostingPrice}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    Service Fee: {service.serviceFee}
                  </Typography>
                </Box>
              </CardContent>

              {/* Button to book consultation */}
              <Box sx={{ textAlign: "center", paddingBottom: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "none",
                  }}
                  onClick={() => handleOpenBooking(index)}
                >
                  Book for Consultation
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Booking Component */}
      {openBooking !== null && services[openBooking].bookingComponent}
    </Box>
  );
};

export default Services;
