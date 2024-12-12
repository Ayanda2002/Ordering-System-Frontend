import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Container, IconButton } from "@mui/material";
import AboutUs from "./about-us.js";
import Services from "./services.js";
import Contact from "./contact.js";
import PastWork from "./past-work.js";
import SignUp from "./sign-up.js";
import SignIn from "./sign-in.js";
import Checkout from "./checkout.js";
import Cart from "./cart.js"; // Import the Cart component
import BrowseProducts from "./browse-products.js"; // Import the BrowseProducts component
import { ArrowUpward } from "@mui/icons-material"; // Import the icon for the button
import "./style.css";

const Home = () => {
  // Set initial active section to "browse-products"
  const [activeSection, setActiveSection] = useState("browse-products");
  const [activeButton, setActiveButton] = useState("browse-products");

  const sections = {
    "services": <Services />,
    "past-work": <PastWork />,
    "contact": <Contact />,
    "about-us": <AboutUs />,
    "sign-up": <SignUp />,
    "sign-in": <SignIn />,
    "checkout": <Checkout />,
    "cart": <Cart />, // Add Cart page to sections
    "browse-products": <BrowseProducts /> // Add BrowseProducts page to sections
  };

  const backgroundImage = "url('j.jpg')";

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* AppBar */}
      <AppBar position="static" sx={{ bgcolor: "#1e293b" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2px",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: "bold",
              color: "#ffffff",
              letterSpacing: "0.05em",
            }}
          >
            Yummy Tummy's
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#9ca3af",
              fontStyle: "italic",
              marginLeft: "0px",
              fontSize: "1rem",
            }}
          >
            Yummy Sensations
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Diagonal Navigation Menu */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#334155",
          padding: "8px",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        {["browse-products", "sign-in", "sign-up", "checkout", "cart"].map((section) => (
          <Button
            key={section}
            sx={{
              margin: "0 16px",
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "1rem",
              position: "relative",
              padding: "8px 16px",
              background: activeButton === section
                ? "#2d3748" // Color for active button
                : "linear-gradient(145deg, #4a5568, #2d3748)", // Default color
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              transform: "skew(-20deg)",
              "&:hover": {
                background: activeButton === section
                  ? "#1e293b"  // Hover color for active button
                  : "linear-gradient(145deg, #1e293b, #4a5568)", // New hover color for other buttons
              },
            }}
            onClick={() => {
              setActiveSection(section);
              setActiveButton(section); // Set clicked button as active
            }}
          >
            <span style={{ transform: "skew(20deg)" }}>
              {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
            </span>
          </Button>
        ))}
      </Box>

      {/* Section Content */}
      <Box
        sx={{
          flex: 1, // This ensures the content takes up remaining space
          overflowY: "auto",
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "16px",
        }}
      >
        {activeSection && (
          <Container
            sx={{
              padding: 4,
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {sections[activeSection]}
          </Container>
        )}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#1e293b",
          color: "white",
          padding: "16px 16px",
          textAlign: "center",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} JugamSoft. All rights reserved.
        </Typography>
      </Box>

      {/* Scroll to Top Button */}
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#2d3748",
          color: "white",
          borderRadius: "50%",
          padding: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            backgroundColor: "#1e293b",
          },
        }}
      >
        <ArrowUpward />
      </IconButton>
    </Box>
  );
};

export default Home;
