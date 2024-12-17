import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
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
          Sign In
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
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "#2c7b2f",
                ":hover": {
                  backgroundColor: "#216623", // Darker green for hover effect
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignIn;
