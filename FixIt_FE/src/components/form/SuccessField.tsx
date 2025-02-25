// MUI
import { CheckCircle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function SuccessField({ text }: { text: string }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: 1.5,
        border: (theme) => `1px solid ${theme.palette.success.main}`,
        borderRadius: 1,
        mb: 5,
      }}
    >
      <CheckCircle sx={{ ml: 2, color: "success.main", fontSize: "2em" }} />
      <Typography
        variant="body2"
        sx={{ ml: 2, color: (theme) => theme.palette.success.main }}
      >
        {text}
      </Typography>
    </Box>
  );
}
