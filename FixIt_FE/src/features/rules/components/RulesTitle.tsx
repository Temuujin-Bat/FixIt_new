// MUI
import { Typography } from "@mui/material";

export default function RulesTitle({ title }: { title: string }) {
  return (
    <Typography
      variant="h3"
      sx={{
        color: "primary.darker",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        textDecoration: "underline",
        mt: 2.5,
        mb: 1.5,
      }}
    >
      {title}
    </Typography>
  );
}
