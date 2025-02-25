// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Components
import { IBaseResponse, TAxiosError } from "../../../types/responses/common";
import { useError } from "../../useError";
import { WelcomeController } from "../../../services";

export function useSetPasswordAfterResetAPI() {
  const navigate = useNavigate();
  const { handleReqError } = useError();

  const setPasswordAfterReset = async (data: {
    password: string;
    resetToken: string;
  }) => {
    const payload = {
      password: data?.password,
      resetToken: data?.resetToken,
    };

    const rsp = await WelcomeController().setPasswordAfterReset<IBaseResponse>(
      payload
    );

    return rsp;
  };

  return useMutation({
    mutationFn: setPasswordAfterReset,
    onSuccess: async (rsp) => {
      if (rsp && rsp.success) {
        navigate("/login");
      } else if (rsp.error && rsp.error?.response?.status === 406) {
        throw rsp.error;
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! set password  failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(`ERROR! set password threw an Exception! ${error}`);
    },
  });
}
