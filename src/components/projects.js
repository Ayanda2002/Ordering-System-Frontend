import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot Development",
      description: "Building an AI-powered chatbot for customer support automation.",
    },
    {
      title: "Blockchain Application",
      description: "Developing a decentralized application for secure transactions.",
    },
    {
      title: "Cloud Migration",
      description: "Assisting a client in migrating their infrastructure to the cloud.",
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 2 }}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                backgroundColor: "#f5f5f5",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
