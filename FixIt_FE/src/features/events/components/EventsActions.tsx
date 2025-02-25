// MUI
import { Box, Typography } from "@mui/material";

// Third party
import { Link } from "react-router-dom";

export default function EventsActions() {
  return (
    <Box
      component={Link}
      to="/events/add"
      sx={{
        backgroundColor: "primary.main",
        borderRadius: "20px",
        height: "45px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        mt: 2,
        mb: 5,
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "primary.dark",
        },
      }}
    >
      <Typography variant="subtitle1" color={"common.white"}>
        הוספת אירוע
      </Typography>
    </Box>
  );
}
