// MUI
import { Box } from "@mui/material";

// Components
import {
  UserEventsCard,
  UserEventsTitle,
  NoActiveEvents,
  UserEventsAction,
} from "../index";
import { getUserEventsData } from "../../../store/userEvents/selectors";
import {
  getPastEvents,
  getUpcomingEvents,
} from "../../../utils/helpers/date.helper";

export default function UserEvents() {
  const { userEvents } = getUserEventsData();
  const pastEvents = getPastEvents(userEvents);
  const upcomingEvents = getUpcomingEvents(userEvents);

  return (
    <>
      {upcomingEvents.length === 0 && pastEvents.length === 0 && (
        <NoActiveEvents />
      )}

      {/* Upcoming events */}
      {upcomingEvents.length > 0 && (
        <>
          <UserEventsTitle title="האירועים שלי" />

          {upcomingEvents.map((event) => (
            <Box key={event.eventId}>
              <UserEventsCard event={event} />
            </Box>
          ))}
        </>
      )}

      {/* Past events */}
      {pastEvents.length > 0 && (
        <>
          <UserEventsTitle title="אירועים שהסתיימו" />

          {pastEvents.map((event) => (
            <Box key={event.eventId}>
              <UserEventsCard event={event} />
            </Box>
          ))}
        </>
      )}

      {(upcomingEvents.length > 0 || pastEvents.length > 0) && (
        <UserEventsAction />
      )}
    </>
  );
}
