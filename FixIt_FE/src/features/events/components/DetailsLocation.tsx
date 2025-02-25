// MUI
import {
  ArrowBack,
  LocationOn,
  TimeToLeave,
  Stadium,
  Info,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

// Components
import { TEvent } from "../type";

export default function DetailsLocation({ event }: { event?: TEvent }) {
  return (
    <Box mb={3}>
      <Typography variant="h6">מיקום</Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <LocationOn sx={{ fontSize: "12px", color: "#707287", mr: 0.5 }} />

        <Typography variant="subtitle2" color={"#707287"}>
          {event?.locationInfo?.address?.addressString}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <Info
          sx={{
            fontSize: "12px",
            color: "#707287",
            marginInlineEnd: "0.5em",
            mt: 0.55,
          }}
        />

        <Typography variant="subtitle2" color={"#707287"}>
          {event?.locationInfo?.address?.guidance}
        </Typography>
      </Box>

      {event?.locationInfo?.address?.wazeLink && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TimeToLeave sx={{ fontSize: "12px", color: "#707287", mr: 0.5 }} />

          <Typography
            variant="subtitle2"
            color="primary.main"
            component="a"
            href={event?.locationInfo?.address?.wazeLink}
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
            לניווט עם ווייז
          </Typography>

          <ArrowBack sx={{ fontSize: "12px", color: "primary.main" }} />
        </Box>
      )}

      {!event?.locationInfo?.isArena && event?.locationInfo?.name && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography color={"#707287"} variant="subtitle2">
            שם המקום:&nbsp;
          </Typography>
          <Typography variant="subtitle2">
            {event?.locationInfo?.name}
          </Typography>
        </Box>
      )}

      {event?.locationInfo?.isArena && event?.locationInfo?.arena?.name && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Stadium sx={{ fontSize: "12px", color: "#707287", mr: 0.5 }} />
          <Typography color={"#707287"} mr={"5px"} variant="subtitle2">
            {event?.locationInfo?.arena?.name}
          </Typography>
          <Typography
            variant="subtitle2"
            color="primary.main"
            component="a"
            href={`/arenas/${event?.locationInfo?.arena?.name}`}
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
            לזירה
          </Typography>

          <ArrowBack sx={{ fontSize: "12px", color: "primary.main" }} />
        </Box>
      )}
    </Box>
  );
}
