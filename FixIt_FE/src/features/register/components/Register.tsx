// MUI
import { Typography, Avatar, Box, Stack } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

// Components
import { RegisterForm } from "..";

// Third party
import { NavigateBackPage } from "../../../components";

export default function Register() {
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
      <Stack sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ m: 1.5, bgcolor: "primary.main" }}>
          <LockOutlined />
        </Avatar>

        <Typography variant="h6">ספרו לנו קצת על עצמכם</Typography>
      </Stack>

      {/* Register Form */}
      <RegisterForm />
    </Box>
  );
}
