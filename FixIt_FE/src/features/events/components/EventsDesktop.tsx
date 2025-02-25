// MUI
import {
  Box,
  Typography,
  Tooltip,
  CircularProgress,
  Paper,
} from "@mui/material";
import { MilitaryTech } from "@mui/icons-material";
import { styled } from "@mui/system";

// Third party
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/daygrid";
import { useNavigate } from "react-router-dom";

// Components
import { getEventsData } from "../../../store/events/selectors";
import {
  getNext45Days,
  getPrev15Days,
} from "../../../utils/helpers/date.helper";
import { getUserEventsData } from "../../../store/userEvents/selectors";
import { getUserData } from "../../../store/authenticate/selectors";

export default function EventsDesktop({ loading }: { loading: boolean }) {
  const navigate = useNavigate();
  const { currentMonthEvents, nextMonthEvents } = getEventsData();
  const { userEvents } = getUserEventsData();
  const { userInfo } = getUserData();

  const events = [
    ...currentMonthEvents.filter((event) => event.isPublic),
    ...nextMonthEvents.filter((event) => event.isPublic),
    ...userEvents.filter(
      (event) =>
        event.contactInfo.email === userInfo?.email &&
        event.isPublished === true
    ),
  ];
  const start = getPrev15Days();
  const end = getNext45Days();

  return (
    <Paper elevation={10} sx={{ borderRadius: "20px" }}>
      <CalendarStyles sx={{ mt: "5px", position: "relative" }}>
        {loading && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            <CircularProgress />
          </Box>
        )}

        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          locale="he"
          direction="rtl"
          validRange={{
            start: start,
            end: end,
          }}
          customButtons={{
            addEventButton: {
              text: "+",
              click: () => navigate("/events/add"),
              icon: "custom-add",
            },
          }}
          headerToolbar={{
            left: "prev,next,addEventButton",
            center: "",
            right: "title",
          }}
          events={events.map((event) => ({
            id: String(event?.eventId),
            start: event?.eventInfo?.start,
            title: event?.eventInfo?.title,
            extendedProps: {
              subtitle: event?.eventInfo?.subtitle,
              address: event?.locationInfo?.address?.addressString,
            },
          }))}
          displayEventTime={false}
          eventClick={(info) => {
            navigate(`/events/${info.event.id}`);
          }}
          eventDidMount={(info) => (info.el.style.cursor = "pointer")}
          eventContent={(val) => (
            <Tooltip
              title={
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Typography color={"primary.main"} variant="h6" gutterBottom>
                    {val?.event?.title}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {val?.event?.extendedProps?.subtitle}
                  </Typography>
                  <Typography variant="body1">
                    &nbsp;
                    {val?.event?.extendedProps?.address}
                  </Typography>
                </Box>
              }
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  wordBreak: "break-word",
                  textAlign: "center",
                }}
              >
                <MilitaryTech sx={{ fontSize: { xs: "15px", md: "20px" } }} />
                <Typography
                  variant="caption"
                  fontWeight={"bold"}
                  sx={{
                    whiteSpace: "normal",
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  {val.event.title}
                </Typography>
              </Box>
            </Tooltip>
          )}
        />
      </CalendarStyles>
    </Paper>
  );
}

const CalendarStyles = styled(Box)(() => ({
  width: "100%",
  maxWidth: "100vw",
  ".fc": {
    overflow: "hidden",
    padding: "25px !important",
  },
  ".fc-toolbar": {
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },

  ".fc-toolbar-title": {
    fontSize: "44px !important",
    color: "rgba(17, 128, 106, 1) !important",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3) !important",
  },
  ".fc-today-button": {
    display: "none !important",
  },
  ".fc-prev-button, .fc-next-button": {
    backgroundColor: "rgba(26, 188, 156, 1) !important",
    color: "white !important",
    border: "1px solid rgba(26, 188, 156, 1) !important",
    marginRight: "5px !important",
    fontSize: "1em !important",
    height: "44px",
    width: "44px",
    borderRadius: "30px !important",
  },
  ".fc-prev-button:hover, .fc-next-button:hover": {
    backgroundColor: "rgba(64, 200, 172, 0.6) !important",
    color: "white !important",
  },
  ".fc-addEventButton-button": {
    backgroundColor: "rgba(26, 188, 156, 1) !important",
    color: "white !important",
    border: "1px solid rgba(26, 188, 156, 1) !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "44px",
    width: "164px",
    borderRadius: "10px !important",
    marginRight: "10px !important",
    "&:hover": {
      backgroundColor: "rgba(64, 200, 172, 0.6) !important",
    },
    "&::before": {
      content: '"הוספת אירוע"',
      fontSize: "15px",
      fontWeight: "bold",
      lineHeight: 1,
      marginLeft: "15px",
    },
  },
  ".fc-day-today": {
    fontWeight: "bold",
    color: "rgba(26, 188, 156, 1)",
    border: "3px solid rgba(26, 188, 156, 1) !important",
    backgroundColor: "#f5f5f5 !important",
  },
  ".fc-daygrid-event": {
    background:
      "linear-gradient(135deg, rgba(26, 188, 156, 0.9), rgba(17, 128, 106, 0.9)) !important",
    display: "flex",
    flexDirection: "column",
    marginTop: "8px !important",
  },
  ".fc-event:hover": {
    backgroundColor: "rgba(17, 128, 106, 1) !important",
  },
  ".fc-day-past": {
    backgroundColor: "lightgray !important",
    height: "120px !important",
  },
  ".fc-day-future": {
    backgroundColor: "white !important",
    height: "120px !important",
  },
  ".fc-event-past": {
    backgroundColor: "rgba(150, 150, 150, 1) !important",
    color: "white !important",
    textDecoration: "line-through",
    border: "1px solid rgba(150, 150, 150, 1)",
    opacity: 0.7,
    transition: "opacity 0.3s ease-in-out",
    fontWeight: "bold",
  },
  ".fc-event-past:hover": {
    backgroundColor: "black !important",
    fontWeight: "bold",
  },
}));
