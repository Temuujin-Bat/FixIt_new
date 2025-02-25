import { lazy } from "react";

// Components
import { isPastEvent } from "../../utils/helpers/date.helper";
import { LoadingLinearProgress } from "../../components";
import { getUserEventsData } from "../../store/userEvents/selectors";
import NotFoundPage from "../notFoundPage";
const LazyEventDetails = lazy(
  () => import("../../features/events/components/DetailsPage")
);
const LazyPastEventDetails = lazy(
  () => import("../../features/events/components/PastEventDetailsPage")
);

// Hooks
import { useGetUserEventsAPI } from "../../hooks/API/events";

export default function UserEventDetails({ id }: { id: string }) {
  const { isLoading: isLoadingUserEvents } = useGetUserEventsAPI();
  const { userEvents } = getUserEventsData();

  if (isLoadingUserEvents) {
    return <LoadingLinearProgress />;
  }

  const event = userEvents.find((e) => e.eventId === Number(id));

  if (!event) {
    return <NotFoundPage />;
  }

  const isPast = isPastEvent(event?.eventInfo?.end);

  return isPast ? (
    <LazyPastEventDetails event={event} />
  ) : (
    <LazyEventDetails event={event} />
  );
}
