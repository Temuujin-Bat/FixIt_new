// MUI
import { Box } from "@mui/material";

const Wallpaper = () => (
  <Box sx={{ height: "100vh", width: "50vw", position: "fixed" }}>
    <Box
      component="img"
      src="/assets/ContactUs/ContactUsWallpaper.png"
      sx={{ height: "100%", width: "100%", objectFit: "cover" }}
    />
  </Box>
);

export { Wallpaper };
