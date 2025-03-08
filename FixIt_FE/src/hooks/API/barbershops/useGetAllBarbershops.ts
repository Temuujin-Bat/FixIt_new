// Third party
import { useQuery } from "@tanstack/react-query";

// Components
import { useError } from "../../useError";
import { QUERY_KEYS } from "../../../utils/enums";
import { BarbershopsController } from "../../../services";
import { useAppDispatch, useAppSelector } from "../../useAppStore";
import { getAccessToken } from "../../../store/authenticate/selectors";
import { TBarbershopRes } from "../../../types/responses";
import { barbershopsActions } from "../../../store/barbershops/slice";

export function useGetAllBarbershopsAPI() {
  const { handleReqError } = useError();
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(getAccessToken);

  return useQuery({
    queryKey: [QUERY_KEYS.BARBER_SHOPS],
    queryFn: async () => {
      const rsp =
        await BarbershopsController(
          accessToken,
        ).getAllBarbershops<TBarbershopRes>();

      if (rsp?.success && "barbershops" in rsp) {
        dispatch(
          barbershopsActions.setBarbershops(
            rsp.barbershops as TBarbershopRes[],
          ),
        );
      } else if (rsp?.error && rsp.error?.response?.status) {
        await handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! get profile data failed! ${rsp.msg}`);
      }

      return rsp;
    },
  });
}
