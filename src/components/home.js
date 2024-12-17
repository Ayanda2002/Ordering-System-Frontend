import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle, ArrowUpward, ShoppingCart } from "@mui/icons-material";
import AboutUs from "./about-us.js";
import Services from "./services.js";
import Contact from "./contact.js";
import PastWork from "./past-work.js";
import SignUp from "./sign-up.js";
import SignIn from "./sign-in.js";
import Checkout from "./checkout.js";
import Cart from "./cart.js";
import BrowseProducts from "./browse-products.js";
import "./style.css";

// Assuming the image is in the "public" folder or imported directly
import logoImage from './images/ramen.png'; // Adjust the path to your image

const Home = () => {
  const [activeSection, setActiveSection] = useState("menu");
  const [activeButton, setActiveButton] = useState("menu");
  const [anchorEl, setAnchorEl] = useState(null); // For user icon menu

  const sections = {
    "sign-up": <SignUp />,
    "sign-in": <SignIn />,
    "checkout": <Checkout />,
    "cart": <Cart setActiveSection={setActiveSection} setActiveButton={setActiveButton} />,
    "menu": <BrowseProducts />,
  };

  const handleUserIconClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleMenuItemClick = (section) => {
    setActiveSection(section); // Navigate to the selected section
    setActiveButton(section);
    handleMenuClose(); // Close the menu
  };

  const backgroundImage = "url('j.jpg')";

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
<AppBar position="fixed" sx={{ bgcolor: "#1e293b", zIndex: 1100 }}>
  <Toolbar
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2px",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* Image next to the name */}
      <img src={logoImage} alt="Logo" style={{ width: "40px", height: "40px", marginRight: "8px" }} />
      
      {/* Text Container */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
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
            marginTop: "4px",
            fontSize: "1rem",
          }}
        >
          Yummy Sensations
        </Typography>
      </Box>
    </Box>

    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* Cart Icon */}
      <IconButton
        color="inherit"
        onClick={() => {
          setActiveSection("cart");
          setActiveButton("cart");
        }}
        sx={{
          marginRight: "16px",
          "&:hover": {
            backgroundColor: "#2d3748",
          },
        }}
      >
        <ShoppingCart fontSize="large" />
      </IconButton>

      {/* User Icon */}
      <IconButton
        color="inherit"
        sx={{
          "&:hover": {
            backgroundColor: "#2d3748",
          },
        }}
        onClick={handleUserIconClick}
      >
        <AccountCircle fontSize="large" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            backgroundColor: "#1e293b",
            color: "#ffffff",
          },
        }}
      >
        {["Sign In", "Sign Up"].map((option) => (
          <MenuItem
            key={option}
            onClick={() => handleMenuItemClick(option.toLowerCase().replace(" ", "-"))}
            sx={{
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "black",
              },
              padding: "10px 16px",
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  </Toolbar>
</AppBar>


      {/* Diagonal Navigation Menu */}
      <Box
  sx={{
    display: "flex",
    alignItems: "center",
    backgroundColor: "#334155",
    padding: "8px",
   paddingTop: "30px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    position: "fixed", // Make it fixed
    top: "64px", // Position it below the AppBar
    left: 0,
    right: 0,
    zIndex: 1000, // Ensure it stays above the content
  }}
>
  {["menu"].map((section) => (
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
        background:
          activeButton === section
            ? "#2d3748"
            : "linear-gradient(145deg, #4a5568, #2d3748)",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        transform: "skew(-20deg)",
        "&:hover": {
          background:
            activeButton === section
              ? "#1e293b"
              : "linear-gradient(145deg, #1e293b, #4a5568)",
        },
      }}
      onClick={() => {
        setActiveSection(section);
        setActiveButton(section);
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
    flex: 1,
    overflowY: "auto",
    backgroundImage: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "16px",
    paddingTop: "170px",
    paddingBottom: "72px", // Space for the footer height
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
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1e293b",
    color: "white",
    padding: "16px 16px",
    textAlign: "center",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    zIndex: 1000, // Ensure it stays on top of other elements
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
