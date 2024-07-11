import React from "react";
import { Container } from "@mui/material";
const date = new Date();

function Footer() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexFlow: "row",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <p className="footer">Copyright©{date.getFullYear()}</p>
    </Container>
  );
}

export default Footer;
