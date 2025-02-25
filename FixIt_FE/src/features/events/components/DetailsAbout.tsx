// MUI
import { Box, Typography } from "@mui/material";

// Components
import { TEvent } from "../type";

export default function DetailsAbout({ event }: { event?: TEvent }) {
  return (
    <Box mb={3}>
      <Typography variant="h6">פרטים נוספים</Typography>

      <Typography
        variant="subtitle2"
        sx={{
          display: "flex",
          whiteSpace: "break-spaces",
          wordBreak: "break-word",
          alignItems: "baseline",
          ml: 0.4,
          color: "#707287",
        }}
      >
        {event?.eventInfo?.description}
      </Typography>
    </Box>
  );
}
