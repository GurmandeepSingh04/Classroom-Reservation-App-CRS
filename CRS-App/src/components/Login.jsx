import React, { useState, useContext } from "react";
import axios from "axios";
import { Box, Container, Fab, Paper, Typography } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const str = "http://localhost:3000/auth/user/id/google";
      window.open(str, "_self");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

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
            CRS
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
            CRS App lets you reserve the classrooms for a given hour
            seamlessly!!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginBlock: "10px",
              overflowWrap: "anywhere",
              textAlign: "center",
              marginLeft: { xs: "10px", md: "50px" },
              marginRight: { xs: "10px", md: "50px" },
            }}
          >
            Please Sign up or Login to continue
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBlockStart: "15px",
            }}
          >
            <Fab variant="extended" color="primary" onClick={handleSubmit}>
              <Typography sx={{ width: "100px" }} variant="h6">
                Sign In
              </Typography>
            </Fab>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
