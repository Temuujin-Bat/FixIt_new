// Third party
import { useQuery } from "@tanstack/react-query";

// Components
import { TAppointmentsRes } from "../../../types/responses";
import { useError } from "../../useError";
import { useAppDispatch, useAppSelector } from "../../useAppStore";
import {
  getAccessToken,
  getCustomerInfo,
} from "../../../store/authenticate/selectors";
import { CustomerAppointmentsController } from "../../../services/appointments.api";
import { appointmentsActions } from "../../../store/appointments/slice";
import { QUERY_KEYS } from "../../../utils/enums";

export function useGetUserAppointmentsAPI() {
  const { handleReqError } = useError();
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(getAccessToken);
  const selectedCustomer = useAppSelector(getCustomerInfo);

  return useQuery({
    queryKey: [QUERY_KEYS.USER_APPOINTMENTS],
    queryFn: async () => {
      const rsp = await CustomerAppointmentsController(
        accessToken,
      ).getUserAppointments<TAppointmentsRes>({
        phone: selectedCustomer.phone,
      });

      console.log(rsp);

      if (rsp?.success && "userAppointments" in rsp) {
        dispatch(appointmentsActions.setUserAppointments(rsp.userAppointments));
      } else if (rsp?.error && rsp.error?.response?.status) {
        await handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! get appointments data failed! ${rsp.msg}`);
      }

      return rsp;
    },
  });
}
