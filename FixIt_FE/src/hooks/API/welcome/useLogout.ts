// Third party
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Components
import { WelcomeController } from "../../../services";
import { IBaseResponse, TAxiosError } from "../../../types/responses";
import { useError } from "../../useError";
import { persist } from "../../../store";
import { useAppDispatch } from "../../useAppStore";
import { authenticateActions } from "../../../store/authenticate/slice";

export function useLogoutAPI() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { handleReqError } = useError();

  const logoutAPI = async () => {
    return await WelcomeController().logout<IBaseResponse>();
  };

  return useMutation({
    mutationFn: logoutAPI,
    onSuccess: async (rsp) => {
      if (rsp?.success) {
        localStorage.clear();
        dispatch(authenticateActions.resetAuthState());
        await persist.purge();
        queryClient.removeQueries();
        navigate("/");
      }
    },
    onError: async (error: TAxiosError) => {
      console.error(`ERROR! logout request threw an Exception! ${error}`);
      await handleReqError(error);
    },
  });
}
