// Third party
import { useMutation } from "@tanstack/react-query";

// Components
import { IBaseResponse, TAxiosError } from "../../../types/responses/common";
import { useError } from "../../useError";
import { WelcomeController } from "../../../services";

export function useResetPasswordAPI() {
  const { handleReqError } = useError();

  const resetPasswordAPI = async (data: { email: string }) => {
    const payload = {
      email: data?.email,
    };

    const rsp = await WelcomeController().resetPassword<IBaseResponse>(payload);

    return rsp;
  };

  return useMutation({
    mutationFn: resetPasswordAPI,
    onSuccess: async (rsp) => {
      if (rsp.error && rsp.error?.response?.status === 406) {
        throw rsp.error;
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! reset password failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(
        `ERROR! reset password request threw an Exception! ${error}`
      );
    },
  });
}
