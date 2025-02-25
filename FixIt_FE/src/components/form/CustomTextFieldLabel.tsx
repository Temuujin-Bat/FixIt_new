// MUI
import { Box, Typography } from "@mui/material";

export default function CustomTextFieldLabel({ title }: { title: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="subtitle2" ml="10px">
        {title}
      </Typography>
      <Typography variant="subtitle2" color="error" ml="1px">
        *
      </Typography>
    </Box>
  );
}
