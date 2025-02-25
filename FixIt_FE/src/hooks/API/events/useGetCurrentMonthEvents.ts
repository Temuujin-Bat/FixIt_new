// Third party
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

// Components
import { useError } from "../../useError";
import { QUERY_KEYS } from "../../../utils/enums";
import { EventsController } from "../../../services";
import { setCurrentMonthEvents } from "../../../store/events/slice";
import { TEventRes } from "../../../types/responses";
import { TEvent } from "../../../types";

export function useGetCurrentMonthEventsAPI() {
  const dispatch = useDispatch();
  const { handleReqError } = useError();

  return useQuery({
    queryKey: [QUERY_KEYS.EVENTS.CURRENT_MONTH_EVENTS],
    queryFn: async () => {
      const rsp = await EventsController().currentMonthEvents<TEventRes>();

      if (rsp?.success && "events" in rsp) {
        dispatch(setCurrentMonthEvents(rsp.events as TEvent[]));
      } else if (rsp?.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! get current month data failed! ${rsp.msg}`);
      }

      return rsp;
    },
  });
}
