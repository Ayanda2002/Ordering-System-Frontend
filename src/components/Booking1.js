import React from "react";
import { Box, Button } from "@mui/material";

const Booking = ({ onClose }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "white",
        boxShadow: 24,
        borderRadius: 2,
        width: "90%",
        maxWidth: 600,
        height: "80vh",
        padding: 3,
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Close Button */}
      <Button
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          background: "#f44336",
          color: "white",
          "&:hover": {
            background: "#d32f2f",
          },
        }}
      >
        Close
      </Button>

      {/* Google Form with Scrollable iframe */}
      <Box
        sx={{
          flex: 1,
          marginTop: 4, // Space for the close button
        }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeVTkVVt4Ak256VRE-hi9P0tWdZRu5dnxYshV8tlIifdew7Nw/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{
            border: "none",
            overflowY: "auto", // Enable scrolling inside the iframe
            height: "100%",  // Ensure the iframe takes up full height
          }}
          title="Google Form"
        >
          Loading…
        </iframe>
      </Box>
    </Box>
  );
};

export default Booking;
