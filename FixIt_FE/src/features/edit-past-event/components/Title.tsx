// MUI
import { Typography } from "@mui/material";

export default function Title({
  title,
  titleNumber,
  color,
}: {
  title: string;
  titleNumber?: number;
  color?: string;
}) {
  return (
    <Typography color={color || "primary.dark"} variant="h4" mb={1}>
      {titleNumber}. {title}
    </Typography>
  );
}
