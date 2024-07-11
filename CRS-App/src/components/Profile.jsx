import React, { useState, useContext } from "react";
import { Box, Container, Fab, Paper, Typography, Avatar } from "@mui/material";
import { UserContext } from "./UserContext";

const Profile = () => {
  const user = useContext(UserContext);
  return (
    <Container
      sx={{
        position: "relative",
        top: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ padding: "5px" }}>
        <Paper
          elevation={24}
          sx={{
            paddingBlock: "20px",
            backgroundColor: "#1f2833",
            borderRadius: "10px",
            color: "white",
            minWidth: "300px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                // marginBlockStart: { xs: "0px", md: "-45px" },
                marginBlockEnd: "20px",
              }}
            >
              <Avatar
                alt="Me"
                src={user.img}
                sx={{
                  height: { xs: "50px", md: "100px" },
                  width: { xs: "50px", md: "100px" },
                }}
              />
            </Box>
            <Typography
              variant="h4"
              sx={{
                overflowWrap: "anywhere",
                textAlign: "center",
                marginLeft: { xs: "10px", md: "50px" },
                marginRight: { xs: "10px", md: "50px" },
              }}
            >
              Name:
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginBlockEnd: "10px",
                overflowWrap: "anywhere",
                textAlign: "center",
                marginLeft: { xs: "10px", md: "50px" },
                marginRight: { xs: "10px", md: "50px" },
              }}
            >
              {user.fullname}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                overflowWrap: "anywhere",
                textAlign: "center",
                marginLeft: { xs: "10px", md: "50px" },
                marginRight: { xs: "10px", md: "50px" },
              }}
            >
              Email:
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginBlockEnd: "10px",
                overflowWrap: "anywhere",
                textAlign: "center",
                marginLeft: { xs: "10px", md: "50px" },
                marginRight: { xs: "10px", md: "50px" },
              }}
            >
              Email : {user.email}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Profile;
