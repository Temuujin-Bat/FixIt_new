// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Components
import { useError } from "../../useError";
import { IBaseResponse, TAxiosError } from "../../../types/responses";
import { UserEventsController } from "../../../services";
import { TEditEventReq } from "../../../types/requests";
import { determineMonthKey } from "../../../utils/helpers/CurrentOrNextMonth";
import { updateEvent } from "../../../store/events/slice";
import { MapDBEventToTEvent } from "../../../utils/typeDataTransformers";

// Hooks
import { useGetUserEventsAPI } from "../events";

export function useEditEventAPI() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleReqError } = useError();
  const { refetch: refetchUserEvents } = useGetUserEventsAPI();

  const editEventAPI = async (data: TEditEventReq) => {
    const payload = {
      email: data.email,
      eventId: data.eventId,
      eventData: data.eventData,
    };

    const rsp = await UserEventsController().editEvent<IBaseResponse>(payload);

    return rsp;
  };

  return useMutation({
    mutationFn: editEventAPI,
    onSuccess: async (rsp, variables) => {
      const { eventData, eventId } = variables;
      const updatedEvent = MapDBEventToTEvent(eventData, eventId);
      const monthKey = determineMonthKey(eventData.event_end);

      if (rsp && rsp.success) {
        if (monthKey) {
          dispatch(updateEvent({ month: monthKey, updatedEvent }));
        }

        await refetchUserEvents();

        navigate("/my-events");
      } else if (rsp.error && rsp.error?.response?.status === 406) {
        throw rsp.error;
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! edit event failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(`ERROR! edit event request threw an Exception! ${error}`);
    },
  });
}
