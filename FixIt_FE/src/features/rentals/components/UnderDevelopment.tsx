// MUI
import { Box, Container, Typography } from "@mui/material";

// Third party
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

// Components
import underDevelopmentAnimation from "../../../static/animations/UnderDevelopment.json";

export default function UnderDevelopment() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          border: "2px solid",
          borderColor: "primary.main",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Lottie
            animationData={underDevelopmentAnimation}
            loop
            style={{
              height: "250px",
              width: "250px",
            }}
          />
        </Box>

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            marginBottom: "12px",
          }}
        >
          העמוד בפיתוח
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
          אנחנו עובדים קשה כדי לפתח אותו. חזרו אלינו בקרוב!
        </Typography>

        <Box component={Link} to="/events" sx={{ textDecoration: "none" }}>
          <Box
            sx={{
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
            <Typography variant="subtitle2" color={"common.white"}>
              לעמוד אירועים
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
