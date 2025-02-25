// MUI
import { Box, Stack, Typography } from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";

// Components
import { TEvent } from "../type";

export default function DetailsPrize({ event }: { event?: TEvent }) {
  return (
    <Box mb={3}>
      <Typography variant="h6">פרס</Typography>

      {event?.eventInfo?.isPrizedEvent && (
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <EmojiEvents
            sx={{
              fontSize: "12px",
              color: "#707287",
              marginInlineEnd: "0.5em",
            }}
          />

          <Typography color={"#707287"} variant="subtitle2">
            {event?.eventInfo?.prizeInfo?.title}
          </Typography>
        </Stack>
      )}

      {event?.eventInfo?.prizeInfo?.subtitle && (
        <Typography
          variant="subtitle2"
          color={"#707287"}
          display="flex"
          alignItems="baseline"
          ml={0.4}
        >
          {event?.eventInfo?.prizeInfo?.subtitle}
        </Typography>
      )}
    </Box>
  );
}
