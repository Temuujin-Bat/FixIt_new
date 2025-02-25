// MUI
import { Box, Typography } from "@mui/material";

export default function MarketplaceTitle() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">אני רוצה לפרסם מודעה בלוח...</Typography>
    </Box>
  );
}
