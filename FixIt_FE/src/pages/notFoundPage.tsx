// MUI
import { Box, Container, Typography } from "@mui/material";

// Third party
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

// Components
import NotFound from "../static/animations/NotFoundPage.json";

export default function NotFoundPage() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mb: 5,
      }}
    >
      <Lottie
        animationData={NotFound}
        loop={true}
        style={{
          height: "450px",
          textAlign: "center",
        }}
      />

      <Box
        component={Link}
        to="/events"
        sx={{
          textDecoration: "none",
          mt: "20px",
          backgroundColor: "primary.main",
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease",
          padding: "8px 16px",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        <Typography
          textAlign={"center"}
          variant="subtitle2"
          color={"common.white"}
        >
          לעמוד אירועים
        </Typography>
      </Box>
    </Container>
  );
}
