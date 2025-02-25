// MUI
import { Box, Container, Stack, Typography, Button } from "@mui/material";

// Third party
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

// Components
import NotFound from "../../../static/animations/NoActiveEvents.json";

export default function NoActiveEvents() {
  return (
    <Container maxWidth="sm" sx={{ mt: "100px", px: "20px" }}>
      <Box
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Lottie
          animationData={NotFound}
          loop={true}
          style={{
            height: "150px",
            textAlign: "center",
          }}
        />

        <Stack
          sx={{
            width: "50%",
            backgroundColor: "#ccc",
            height: "1px",
            borderRadius: "5px",
            my: "20px",
          }}
        />

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#666",
            fontSize: "16px",
            lineHeight: "1.6",
            maxWidth: "90%",
            mx: "auto",
          }}
        >
          נראה שלא יצרת אירוע עדיין. תוכל ליצור אירוע חדש, להגדיר מיקום, תאריך
          ושעת התחלה ולהזמין שחקנים נוספים להצטרף.
        </Typography>

        <Button
          component={Link}
          to="/events/add"
          sx={{
            mt: "40px",
            mb: "30px",
            backgroundColor: "primary.main",
            borderRadius: "30px",
            padding: "12px 25px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            textTransform: "uppercase",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "#fff" }}>
            הוספת אירוע
          </Typography>
        </Button>
      </Box>
    </Container>
  );
}
