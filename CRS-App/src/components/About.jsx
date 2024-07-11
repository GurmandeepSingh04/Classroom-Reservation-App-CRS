import React, { useState, useContext } from "react";
import axios from "axios";
import { Box, Container, Fab, Paper, Typography } from "@mui/material";

const Login = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Paper
          elevation={24}
          sx={{
            paddingBlock: "20px",
            backgroundColor: "#1f2833",
            borderRadius: "10px",
            color: "white",
            minWidth: "300px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              overflowWrap: "anywhere",
              textAlign: "center",
              marginLeft: { xs: "10px", md: "50px" },
              marginRight: { xs: "10px", md: "50px" },
            }}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#939292",
              marginBlock: "10px",
              overflowWrap: "break-word",
              textAlign: "center",
              marginLeft: { xs: "10px", md: "50px" },
              marginRight: { xs: "10px", md: "50px" },
            }}
          >
            The Classroom Reservation App is a user-friendly platform that
            allows students, faculty, and staff to effortlessly reserve
            classrooms for their desired time slots. Users can securely log in
            with their institutional credentials, view real-time availability of
            classrooms, and book a room for a specific hour they need. The app
            provides a streamlined interface for selecting dates and times,
            ensuring that users can quickly find and reserve the perfect space
            for their lectures, meetings, or study sessions.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
