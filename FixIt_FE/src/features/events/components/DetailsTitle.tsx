// MUI
import { Box, Stack, Typography } from "@mui/material";
import { ArrowBack, EmojiEvents, Facebook } from "@mui/icons-material";

// Components
import { TEvent } from "../type";

export default function DetailsTitle({ event }: { event?: TEvent }) {
  return (
    <Box mt={1} mb={3}>
      <Typography variant="h2">{event?.eventInfo?.title}</Typography>

      <Typography
        variant="subtitle2"
        color={"#707287"}
        sx={{
          whiteSpace: "break-spaces",
          wordBreak: "break-word",
          alignItems: "baseline",
        }}
      >
        {event?.eventInfo?.subtitle}
      </Typography>

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
              mr: 0.3,
            }}
          />
          <Typography variant="subtitle2" color={"#707287"}>
            פרס:
          </Typography>
          &nbsp;
          <Typography color={"black"} variant="subtitle2">
            {event?.eventInfo?.prizeInfo?.title}
          </Typography>
        </Stack>
      )}

      {event?.eventInfo?.facebookLink && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Facebook sx={{ fontSize: "12px", color: "#707287", mr: 0.5 }} />

          <Typography
            variant="subtitle2"
            color="primary.main"
            component="a"
            href={
              event?.eventInfo?.facebookLink.startsWith("http")
                ? event?.eventInfo?.facebookLink
                : `https://${event?.eventInfo?.facebookLink}`
            }
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            למידע נוסף על האירוע בפייסבוק
          </Typography>

          <ArrowBack sx={{ fontSize: "12px", color: "primary.main" }} />
        </Box>
      )}
    </Box>
  );
}
