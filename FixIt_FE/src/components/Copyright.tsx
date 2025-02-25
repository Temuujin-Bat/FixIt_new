// MUI
import { Typography, Link } from "@mui/material";

export default function Copyright() {
  return (
    <Typography
      color="common.black"
      align="center"
      sx={{ mt: 5 }}
      variant="subtitle1"
    >
      {"."}
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
      >
        IsraelAirsoft.com
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}
