// Third party
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

// Components
import { useError } from "../../useError";
import { QUERY_KEYS } from "../../../utils/enums";
import { UserEventsController } from "../../../services";
import { TEventRes } from "../../../types/responses";
import { setUserEvents } from "../../../store/userEvents/slice";

export function useGetUserEventsAPI() {
  const dispatch = useDispatch();
  const { handleReqError } = useError();

  return useQuery({
    queryKey: [QUERY_KEYS.EVENTS.USER_EVENTS],
    queryFn: async () => {
      const rsp = await UserEventsController().getEvents<TEventRes>();

      if (rsp?.success && "events" in rsp) {
        dispatch(setUserEvents(rsp.events as TEventRes[]));
      } else if (rsp?.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! get user events data failed! ${rsp.msg}`);
      }

      return rsp;
    },
  });
}
