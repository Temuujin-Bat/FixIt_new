// Third party
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Components
import { useError } from "../../useError";
import { IBaseResponse, TAxiosError } from "../../../types/responses";
import { UserEventsController } from "../../../services";
import { determineMonthKey } from "../../../utils/helpers/CurrentOrNextMonth";
import { deleteEvent } from "../../../store/events/slice";

// Hooks
import { useGetUserEventsAPI } from "../events";

export function useDeleteEventAPI() {
  const navigate = useNavigate();
  const { handleReqError } = useError();
  const dispatch = useDispatch();
  const { refetch: refetchUserEvents } = useGetUserEventsAPI();

  const deleteEventAPI = async ({ eventId }: { eventId: number }) => {
    const rsp = await UserEventsController().deleteEvent<IBaseResponse>({
      eventId,
    });

    return rsp;
  };

  return useMutation({
    mutationFn: deleteEventAPI,
    onSuccess: async (
      rsp,
      variables: { eventId: number; eventEnd: string }
    ) => {
      const { eventEnd, eventId } = variables;
      const monthKey = determineMonthKey(eventEnd);

      if (rsp && rsp.success) {
        if (monthKey) {
          dispatch(deleteEvent({ month: monthKey, eventId }));
        }

        await refetchUserEvents();

        navigate("/my-events");
      } else if (rsp.error && rsp.error?.response?.status === 406) {
        throw rsp.error;
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! delete event failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(`ERROR! delete event request threw an Exception! ${error}`);
    },
  });
}
