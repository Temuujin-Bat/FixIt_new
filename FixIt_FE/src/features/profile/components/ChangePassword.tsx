// MUI
import { Typography, Stack, Box } from "@mui/material";
import { Key } from "@mui/icons-material";

// Third party
import { Link } from "react-router-dom";

export default function ChangePassword() {
  return (
    <Box
      component={Link}
      sx={{
        textDecoration: "none",
        color: "primary.main",
        display: "flex",
        alignItems: "center",
        mb: "20px",
        "&:hover": {
          "& .key-icon": {
            color: "white",
            backgroundColor: "primary.main",
          },
          "& .typography-background": {
            color: "primary.main",
          },
        },
      }}
      to="/profile/updatePassword"
    >
      <Key
        className="key-icon"
        fontSize="large"
        sx={{
          color: "primary.main",
          backgroundColor: "primary.lighter",
          borderRadius: "20px",
          padding: "5px",
          mr: 1,
        }}
      />

      <Stack>
        <Typography className="typography-background" variant="subtitle2">
          החלפת סיסמה
        </Typography>
        <Typography className="typography-background" variant="body2">
          אבטחה
        </Typography>
      </Stack>
    </Box>
  );
}
