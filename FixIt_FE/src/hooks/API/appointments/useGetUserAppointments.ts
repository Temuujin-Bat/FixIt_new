// Third party
import { useMutation } from "@tanstack/react-query";

// Components
import { TAppointmentsRes, TAxiosError } from "../../../types/responses";
import { useError } from "../../useError";
import { useAppDispatch, useAppSelector } from "../../useAppStore";
import { getAccessToken } from "../../../store/authenticate/selectors";
import { CustomerAppointmentsController } from "../../../services/appointments.api";
import { appointmentsActions } from "../../../store/appointments/slice";

export function useGetUserAppointmentsAPI() {
  const dispatch = useAppDispatch();
  const { handleReqError } = useError();
  const accessToken = useAppSelector(getAccessToken);

  const getAppointmentsAPI = async (data: { phone: string }) => {
    const payload = {
      phone: data.phone,
    };

    return await CustomerAppointmentsController(
      accessToken,
    ).getUserAppointments<TAppointmentsRes>(payload);
  };

  return useMutation({
    mutationFn: getAppointmentsAPI,
    onSuccess: async (rsp) => {
      if (rsp?.success && "appointments" in rsp) {
        dispatch(appointmentsActions.setUserAppointments(rsp.appointments));
      } else if ("msg" in rsp) {
        console.error(`ERROR! resend verification failed! ${rsp.msg}`);
      }
    },
    onError: async (error: TAxiosError) => {
      console.error(
        `ERROR! get user appointments request threw an Exception! ${error}`,
      );
      await handleReqError(error);
    },
  });
}
