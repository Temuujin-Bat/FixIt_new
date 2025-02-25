// MUI
import { Container, useMediaQuery, useTheme } from "@mui/material";

// Third party
import { Outlet, useLocation } from "react-router-dom";

// Components
import { EventsMobile, EventsDesktop } from "../../features/events";

// Hooks
import {
  useGetNextMonthEventsAPI,
  useGetUserEventsAPI,
  useGetCurrentMonthEventsAPI,
} from "../../hooks/API/events";
import { useAuthentication } from "../../hooks/useAuthenticate";

export default function EventsPage() {
  const location = useLocation();
  const theme = useTheme();
  const { isLoggedIn } = useAuthentication();
  const isSingleEventPage = location.pathname.includes("/events/");
  const { isLoading: currentLoading } = useGetCurrentMonthEventsAPI();
  const { isLoading: nextLoading } = useGetNextMonthEventsAPI();
  const { isLoading: userEventLoading } = isLoggedIn()
    ? useGetUserEventsAPI()
    : { isLoading: false };

  const loading = currentLoading || nextLoading || userEventLoading;

  const isScreenXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {!isSingleEventPage && (
        <Container maxWidth="lg" sx={{ mt: 3, mb: 5 }}>
          {isScreenXS ? (
            <EventsMobile loading={loading} />
          ) : (
            <EventsDesktop loading={loading} />
          )}
        </Container>
      )}

      <Outlet />
    </>
  );
}
