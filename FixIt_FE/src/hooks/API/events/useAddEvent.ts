// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Components
import { useError } from "../../useError";
import { IBaseResponse, TAxiosError } from "../../../types/responses";
import { TEventsReq } from "../../../types/requests";
import { UserEventsController } from "../../../services";
import { determineMonthKey } from "../../../utils/helpers/CurrentOrNextMonth";

// Hooks
import {
  useGetCurrentMonthEventsAPI,
  useGetUserEventsAPI,
  useGetNextMonthEventsAPI,
} from "../events";

export function useAddEventAPI() {
  const navigate = useNavigate();
  const { handleReqError } = useError();
  const { refetch: refetchCurrentMonth } = useGetCurrentMonthEventsAPI();
  const { refetch: refetchNextMonth } = useGetNextMonthEventsAPI();
  const { refetch: refetchUserEvents } = useGetUserEventsAPI();

  const addEventAPI = async ({ eventData }: { eventData: TEventsReq }) => {
    const rsp = await UserEventsController().addEvent<IBaseResponse>({
      eventData,
    });

    return rsp;
  };

  return useMutation({
    mutationFn: addEventAPI,
    onSuccess: async (rsp, variables) => {
      const { eventData } = variables;
      const monthKey = determineMonthKey(eventData.event_end);

      if (rsp && rsp.success) {
        if (monthKey === "CURRENT_MONTH_EVENTS") {
          await refetchCurrentMonth();
        } else {
          await refetchNextMonth();
        }

        await refetchUserEvents();

        navigate("/events");
      } else if (rsp.error && rsp.error?.response?.status === 406) {
        throw rsp.error;
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! add event failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(`ERROR! add event request threw an Exception! ${error}`);
    },
  });
}
