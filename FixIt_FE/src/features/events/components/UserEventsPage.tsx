// MUI
import { Container } from "@mui/material";

// Third party
import { Outlet, useLocation } from "react-router-dom";

// Hooks
import { useGetUserEventsAPI } from "../../../hooks/API/events";

// Components
import { UserEvents } from "..";
import { LoadingLinearProgress } from "../../../components";

export default function MyEventsPage() {
  const location = useLocation();
  const { isLoading } = useGetUserEventsAPI();

  return (
    <>
      {location.pathname === "/my-events" && (
        <Container maxWidth="md">
          {isLoading ? <LoadingLinearProgress /> : <UserEvents />}
        </Container>
      )}

      <Outlet />
    </>
  );
}
