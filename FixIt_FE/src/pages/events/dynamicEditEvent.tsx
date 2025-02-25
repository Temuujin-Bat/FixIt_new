import { lazy } from "react";

// MUI
import { Box, Skeleton } from "@mui/material";

// Third party
import { useParams } from "react-router-dom";

// Components
import { getUserEventsData } from "../../store/userEvents/selectors";
import { LoadingLinearProgress } from "../../components";
const LazyEditEvent = lazy(
  () => import("../../features/edit-event/components/EditEventPage")
);
const LazyEditPastEvent = lazy(
  () => import("../../features/edit-past-event/components/EditEventPage")
);

// Hooks
import { useGetUserEventsAPI } from "../../hooks/API/events";

const DynamicEditEvent = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading } = useGetUserEventsAPI();

  const { userEvents } = getUserEventsData();

  const event = userEvents.find(
    (event) => Number(event.eventId) === Number(id)
  );

  const isPastEvent = event?.eventInfo?.end
    ? new Date(event.eventInfo.end) < new Date()
    : false;

  if (isLoading) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Box
            sx={{
              height: "50px",
              width: "50px",
              ml: { xs: "10px", md: "20px" },
              mr: { xs: "10px", md: "20px" },
            }}
          >
            <Box
              component={"img"}
              sx={{ height: "100%", width: "100%" }}
              src="/assets/Logo/logo.png"
            />
          </Box>
          <Skeleton width={100} height={30} />
        </Box>
        <LoadingLinearProgress />
      </>
    );
  }

  return isPastEvent ? (
    <LazyEditPastEvent event={event} />
  ) : (
    <LazyEditEvent event={event} />
  );
};

export default DynamicEditEvent;
