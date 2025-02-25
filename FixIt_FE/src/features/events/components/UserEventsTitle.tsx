// MUI
import { Typography } from "@mui/material";

export default function UserEventsTitle({ title }: { title: string }) {
  return (
    <Typography
      variant="h3"
      sx={{
        color: "primary.darker",
        textDecoration: "underline",
        mt: 2.5,
        mb: 1.5,
      }}
    >
      {title}
    </Typography>
  );
}
