// Third party
import { useMutation } from "@tanstack/react-query";

// Components
import { useError } from "../../useError";
import { EventsController } from "../../../services";
import { IBaseResponse, TAxiosError } from "../../../types/responses";
import { TEnrollEventReq } from "../../../types/requests";

export function useEnrollEventAPI(handleClose: () => void) {
  const { handleReqError } = useError();

  const enrollEventAPI = async (data: TEnrollEventReq) => {
    const rsp = await EventsController().enrollEvent<IBaseResponse>(data);

    return rsp;
  };

  return useMutation({
    mutationFn: enrollEventAPI,
    onSuccess: async (rsp) => {
      if (rsp && rsp.success) {
        handleClose();
      } else if (rsp.error && rsp.error?.response?.status === 406) {
        throw rsp.error;
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! enroll event failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(`ERROR! enroll event request threw an Exception! ${error}`);
    },
  });
}
