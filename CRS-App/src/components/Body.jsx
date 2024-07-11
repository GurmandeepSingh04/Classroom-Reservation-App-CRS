import { WrapText } from "@mui/icons-material";
import { Container, Fade, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Body(props) {
  const user = useContext(UserContext);
  return (
    <Fade in={true} style={{ transitionDuration: "1000ms" }}>
      <Container
        sx={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            display: { xs: "none", md: "flex" },
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "#66fcf1",
            overflowWrap: "anywhere",
            marginBlockStart: "150px",
          }}
        >
          Welcome {user.fullname}!
        </Typography>
        <Typography
          variant="h2"
          sx={{
            display: { xs: "flex", md: "none" },
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "#66fcf1",
            overflowWrap: "anywhere",
            marginBlockStart: "100px",
          }}
        >
          Welcome {user.fullname}!
        </Typography>
      </Container>
    </Fade>
  );
}

export default Body;
