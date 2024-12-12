import React, { useState } from "react";
import { Box, Card, CardContent, TextField, Button, Typography, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 400,
          boxShadow: 3,
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 3,
            color: "#2c7b2f",
          }}
        >
          Create an Account
        </Typography>
        <CardContent>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField label="Full Name" variant="outlined" fullWidth autoComplete="off" />
            <TextField label="Email" variant="outlined" fullWidth autoComplete="off" />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              autoComplete="off"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              autoComplete="off"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleToggleConfirmPassword} edge="end">
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;
