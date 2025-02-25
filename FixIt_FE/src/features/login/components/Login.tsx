// MUI
import { LockOutlined } from "@mui/icons-material";
import { Typography, Avatar, Box, Stack } from "@mui/material";

// Components
import { LoginForm } from "./LoginForm";
import { NavigateBackPage } from "../../../components";

const Login = () => {
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
      <NavigateBackPage />

      {/* Header  */}
      <Stack sx={{ alignItems: "center" }}>
        <Avatar sx={{ m: 1.5, bgcolor: "primary.main" }}>
          <LockOutlined />
        </Avatar>

        <Typography variant="h6">היי, טוב לראות אותך!</Typography>
      </Stack>

      {/* Login Form */}
      <LoginForm />
    </Box>
  );
};

export { Login };
