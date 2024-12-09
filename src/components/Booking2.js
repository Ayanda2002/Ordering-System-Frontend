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
        overflow: "hidden",
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

      {/* Google Form Embed */}
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8K0LCNQBn8x7dovvdFWG6hadxylOmtM8AL4mteEjpRS9v5Q/viewform?embedded=true" width="640" height="982" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </Box>
  );
};

export default Booking;
