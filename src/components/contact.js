import React from "react";
import { Typography, Box, Grid, Card } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ padding: 4, maxWidth: "1200px", margin: "auto" }}>
      {/* Header */}
      <Grid container spacing={4}>
        {/* Embedded Google Form */}
        <Grid item xs={12} md={12}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#f5f5f5",
              padding: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                marginBottom: 2,
                fontFamily: "'Lora', serif",
                fontWeight: "bold",
                color: "#2c7b2f",
                textAlign: "center",
              }}
            >
              Have a Question? Fill Out the Form Below.
            </Typography>
            <Box sx={{ height: "600px" }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf8z9cVAKxmGRDhYa4GIb5X9i_sYRahU_9dTPfu9fF9qSeobA/viewform?embedded=true"
                width="80%"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </Box>
          </Card>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={12}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#f5f5f5",
              padding: 3,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                marginBottom: 2,
                fontFamily: "'Lora', serif",
                fontWeight: "bold",
                color: "#2c7b2f",
              }}
            >
              Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              <strong>Email:</strong> jugamsoft.tech@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              <strong>Phone:</strong> +27 79 172 9467
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
