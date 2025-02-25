// MUI
import { LinearProgress } from "@mui/material";

export default function LoadingLinearProgress() {
  return (
    <LinearProgress
      sx={{
        position: "fixed",
        left: 0,
        width: "100%",
        height: 8,
        zIndex: 1000,
        top: { xs: "64px", sm: "64px" },
        transform: "scaleX(-1)",
        backgroundColor: (theme) => theme.palette.grey[300],
        "& .MuiLinearProgress-bar": {
          backgroundColor: (theme) => theme.palette.primary.dark,
        },
      }}
    />
  );
}
