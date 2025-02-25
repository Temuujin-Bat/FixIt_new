// Third party
import { useSelector } from "react-redux";

// Components
import { RootState } from "./type";

export function getEventsData() {
  const { currentMonthEvents, nextMonthEvents } = useSelector(
    (state: RootState) => state.eventsReducer
  );

  return { currentMonthEvents, nextMonthEvents };
}
