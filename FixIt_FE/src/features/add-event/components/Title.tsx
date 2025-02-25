// MUI
import { Typography } from "@mui/material";

export default function Title({
  title,
  titleNumber,
}: {
  title: string;
  titleNumber?: number;
}) {
  return (
    <Typography color={"primary.dark"} variant="h4" mb={1}>
      {titleNumber}. {title}
    </Typography>
  );
}
