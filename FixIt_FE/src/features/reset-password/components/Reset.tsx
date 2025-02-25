// MUI
import { Typography, Avatar, Box, Stack } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

// Components
import ResetForm from "./ResetForm";

// Third party
import { NavigateBackPage } from "../../../components";

export default function Reset() {
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

      <Stack sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ m: 1.5, bgcolor: "primary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h6">איפוס סיסמה</Typography>
        <Typography variant="body2">
          מה המייל שלך? מיד נשלח לך לינק לאיפוס סיסמא
        </Typography>
      </Stack>

      <ResetForm />
    </Box>
  );
}
