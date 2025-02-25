import { lazy } from "react";

// Third party
import { useParams } from "react-router-dom";

// Components
import { LoadingLinearProgress } from "../../components";
import { isPastEvent } from "../../utils/helpers/date.helper";
const LazyEventDetails = lazy(
  () => import("../../features/events/components/DetailsPage")
);
const LazyPastEventDetails = lazy(
  () => import("../../features/events/components/PastEventDetailsPage")
);
import UserEventDetails from "./userEventDetails";
import { getEventsData } from "../../store/events/selectors";

// Hooks
import { useGetNextMonthEventsAPI } from "../../hooks/API/events";
import { useGetCurrentMonthEventsAPI } from "../../hooks/API/events";

const DynamicEventDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading: isLoadingCurrent } = useGetCurrentMonthEventsAPI();
  const { isLoading: isLoadingNext } = useGetNextMonthEventsAPI();
  const loading = isLoadingCurrent || isLoadingNext;

  const { currentMonthEvents, nextMonthEvents } = getEventsData();

  const events = [...currentMonthEvents, ...nextMonthEvents];

  const event = events.find((e) => e.eventId === Number(id));

  if (loading) {
    return <LoadingLinearProgress />;
  }

  if (!event) {
    return <UserEventDetails id={id!} />;
  }

  const isPast = isPastEvent(event?.eventInfo?.end);

  return isPast ? (
    <LazyPastEventDetails event={event} />
  ) : (
    <LazyEventDetails event={event} />
  );
};

export default DynamicEventDetails;
