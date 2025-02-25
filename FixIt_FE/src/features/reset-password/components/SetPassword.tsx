// MUI
import { Typography, Avatar, Box, Stack, Link } from "@mui/material";
import { KeyboardArrowRight, LockOutlined } from "@mui/icons-material";

// Components
import SetPasswordForm from "./SetPasswordForm";

// Third party
import { useNavigate } from "react-router-dom";

export default function SetPassword() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        px: 2,
        maxWidth: "400px",
        width: "100%",
        mx: "auto",
      }}
    >
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
          onClick={() => navigate("/login")}
        >
          <KeyboardArrowRight />
          <Typography variant="subtitle1">לחזרה</Typography>
        </Link>
      </Box>

      <Stack sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ m: 1.5, bgcolor: "primary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h6">איפוס סיסמה</Typography>
        <Typography variant="body2">יש להזין סיסמה חדשה</Typography>
      </Stack>

      <SetPasswordForm />
    </Box>
  );
}
