import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container sx={{ textAlign: "center", marginTop: "40px" }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h4" sx={{ marginTop: "16px" }}>
        Page Not Found
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: "16px" }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        sx={{ marginTop: "32px" }}
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;
