// MUI
import { Typography } from "@mui/material";

export default function AirsoftReplicasTitle({ title }: { title: string }) {
  return (
    <Typography variant="h3" mb={2}>
      {title}
    </Typography>
  );
}
