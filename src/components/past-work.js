import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const PastWork = () => {
	const works = [
		{
		  title: "Full Stack Educational Resource Sharing Platform",
		  description:
			"Developed a user-friendly platform for sharing educational resources, integrating frontend, backend, and CI/CD. Collaborated in a team to deliver seamless access to learning materials.",
		},
		{
		  title: "Ecommerce Backend with Stripe Payment Gateway Integration",
		  description:
			"Built a secure backend for an e-commerce platform with Stripe integration for smooth payment processing. Optimized for high-volume transactions and a seamless shopping experience.",
		},
		{
		  title: "Landscaping and Outdoor Services Website",
		  description:
			"Created a professional website for a landscaping business, enhancing their online presence. Delivered user-friendly navigation to expand reach and attract more customers.",
		},
	  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={3}>
        {works.map((work, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                backgroundColor: "#f5f5f5",
                "&:hover": {
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
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
                    marginBottom: 1,
                    textAlign: "center",
                  }}
                >
                  {work.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'Roboto', sans-serif",
                    color: "#4a4a4a",
                    lineHeight: 1.6,
                    textAlign: "justify",
                  }}
                >
                  {work.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PastWork;
