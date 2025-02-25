// MUI
import { Box, Stack, Typography } from "@mui/material";

// Third party
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        textDecoration: "none",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          letterSpacing: ".4em",
          color: "common.white",
          display: { xs: "none", sm: "flex", lg: "none" },
        }}
      >
        Israel Airsoft
      </Typography>

      <Stack
        sx={{
          height: "50px",
          display: { xs: "none", lg: "flex" },
          border: "1px solid white",
        }}
      >
        <Box
          component={"img"}
          loading="lazy"
          decoding="async"
          src="/assets/Logo/logo.png"
          sx={{ height: "100%" }}
        />
      </Stack>
    </Box>
  );
}
