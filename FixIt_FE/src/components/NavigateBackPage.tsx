// MUI
import { KeyboardArrowRight } from "@mui/icons-material";
import { Typography, Box, Link } from "@mui/material";

// Third party
import { useNavigate } from "react-router-dom";

export default function NavigateBackPage() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        mb: "30px",
      }}
    >
      <Link
        component="button"
        underline="none"
        sx={{
          display: "flex",
          alignItems: "center",
          color: "primary.main",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={navigateHandler}
      >
        <KeyboardArrowRight />
        <Typography variant="subtitle1">לחזרה</Typography>
      </Link>
    </Box>
  );
}
