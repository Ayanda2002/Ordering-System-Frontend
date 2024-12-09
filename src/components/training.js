import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const Training = () => {
  const trainings = [
    { title: "Basic Landscaping Techniques", description: "Learn the fundamentals of landscaping and design." },
    { title: "Advanced Gardening Skills", description: "Master advanced planting and gardening methods." },
    { title: "Outdoor Maintenance 101", description: "Essential training for outdoor maintenance and upkeep." },
    { title: "Sustainable Gardening", description: "Eco-friendly practices for sustainable gardening." },
    { title: "Seasonal Plant Care", description: "Tips and tricks for caring for plants year-round." },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ fontFamily: "'Lora', serif", marginBottom: 2, fontWeight: "bold" }}>
        Training Programs
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Explore our range of training programs designed to help you master the art of landscaping and outdoor services.
      </Typography>
      <List>
        {trainings.map((training, index) => (
          <ListItem key={index} sx={{ marginBottom: 2 }}>
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4caf50" }}>
                  {training.title}
                </Typography>
              }
              secondary={
                <Typography variant="body2" sx={{ color: "#555" }}>
                  {training.description}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Training;
