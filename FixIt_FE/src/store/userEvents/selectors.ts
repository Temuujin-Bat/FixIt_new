// Third party
import { useSelector } from "react-redux";

// Components
import { RootState } from "..";

export function getUserEventsData() {
  const { userEvents } = useSelector(
    (state: RootState) => state.userEventsReducer
  );

  return { userEvents };
}
