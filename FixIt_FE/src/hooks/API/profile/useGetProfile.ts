// Third party
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

// Components
import { useError } from "../../useError";
import { QUERY_KEYS } from "../../../utils/enums";
import { TGetProfileRes } from "../../../types/responses";
import { setUserInfo } from "../../../store/authenticate/slice";
import { ProfileController } from "../../../services";

export function useGetProfileAPI() {
  const dispatch = useDispatch();
  const { handleReqError } = useError();

  return useQuery({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: async () => {
      const rsp = await ProfileController().getProfile<TGetProfileRes>();

      if (rsp?.success && "user" in rsp) {
        const { password, ...userWithoutPassword } = rsp.user;

        dispatch(setUserInfo(userWithoutPassword));
      } else if (rsp?.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! get profile data failed! ${rsp.msg}`);
      }

      return rsp;
    },
    enabled: false,
  });
}
