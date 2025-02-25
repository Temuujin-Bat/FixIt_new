// MUI
import { Box, Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";

// Components
import Footer from "./Footer";

// Third party
import { Link } from "react-router-dom";

const ApplicationFooter = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "primary.main",
          color: "common.white",
        }}
      >
        <Footer />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "primary.light",
          width: "100%",
          padding: "10px",
          alignItems: "center",
          color: "common.white",
        }}
      >
        <Copyright sx={{ fontSize: "20px", ml: "5px" }} />

        <Typography variant="subtitle2">
          2024 Copyright:{" "}
          <Box
            component={Link}
            to="/events"
            sx={{
              color: "inherit",
              textDecoration: "underline",
            }}
          >
            IsraelAirsoft.com
          </Box>
        </Typography>
      </Box>
    </>
  );
};

export { ApplicationFooter };
