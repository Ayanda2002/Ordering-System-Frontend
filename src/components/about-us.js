import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ padding: 2 }}>
      {/* Content Card */}
      <Card
        sx={{
          boxShadow: 3,
          "&:hover": {
            transform: "scale(1.05)",
            transition: "transform 0.3s ease",
          },
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Lora', serif",
              fontWeight: "bold",
              color: "#2c7b2f",
              textAlign: "center",
              marginBottom: 3,
            }}
          >
            About Us
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            At JugamSoft Technologies, we specialize in delivering high-quality, tailored web and software solutions designed to elevate your digital presence. Whether you’re an individual, a startup, or a growing business, we provide comprehensive services to meet your unique needs:
          </Typography>
          <Typography variant="body1" component="ul" sx={{ marginBottom: 2, paddingLeft: 2 }}>
            <li>Frontend Development: Crafting visually appealing, responsive, and user-friendly interfaces.</li>
            <li>Backend Development: Building robust and secure server-side solutions to power your applications.</li>
            <li>Full-Stack Development: Seamlessly integrating frontend and backend for scalable and efficient web applications.</li>
            <li>Database Setup & Migrations: Ensuring your data is structured, secure, and accessible.</li>
            <li>Integrations: Connecting your systems and third-party tools for a cohesive and streamlined experience.</li>
          </Typography>
          <Typography variant="body1">
            At JugamSoft, we are more than just developers—we are collaborators. Our passionate team works closely with clients to understand their goals and deliver solutions that combine technical excellence with business insight.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Let us bring your vision to life and drive your business forward with our expert services. Together, we’ll create innovative, user-friendly applications that help you stay ahead in the digital age.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutUs;
