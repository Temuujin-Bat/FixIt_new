// MUI
import { AccessTime, CalendarMonth } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

// Components
import { TEvent } from "../type";

export default function DetailsDate({ event }: { event?: TEvent }) {
  return (
    <Box mb={3}>
      <Typography variant="h6">תאריך ושעה</Typography>

      <Box sx={{ display: "flex", alignItems: "center", ml: 0.1 }}>
        <CalendarMonth sx={{ fontSize: "12px", color: "#707287", mr: 0.5 }} />

        <Typography variant="subtitle2" color={"#707287"}>
          {event?.eventInfo?.start.split("T")[0]}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", ml: 0.1 }}>
        <AccessTime sx={{ fontSize: "12px", color: "#707287", mr: 0.5 }} />
        <Typography variant="subtitle2" color={"#707287"}>
          {event?.eventInfo?.start.split("T")[1].slice(0, 5)}
        </Typography>
        &nbsp;-&nbsp;
        <Typography variant="subtitle2" color={"#707287"}>
          {event?.eventInfo?.end.split("T")[1].slice(0, 5)}
        </Typography>
      </Box>
    </Box>
  );
}
