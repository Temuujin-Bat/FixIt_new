// MUI
import { Typography, Box } from "@mui/material";

// Third party
import { Link } from "react-router-dom";

export default function RegisterFormLinks() {
  return (
    <Box
      component={Link}
      to="/login"
      sx={{
        textDecoration: "none",
        color: "primary.main",
        display: "flex",
        justifyContent: "right",
        mt: 1,
      }}
    >
      <Typography variant="subtitle2" sx={{ textDecoration: "underline" }}>
        כבר יש לך חשבון
      </Typography>
      <Typography>?</Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: "primary.main",
          mr: "5px",
        }}
      >
        להתחברות
      </Typography>
    </Box>
  );
}
