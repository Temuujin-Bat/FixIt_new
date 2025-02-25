// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Components
import { IBaseResponse, TAxiosError } from "../../../types/responses/common";
import { useError } from "../../useError";
import { WelcomeController } from "../../../services";
import { TRegisterReq } from "../../../types/requests";

export function useRegisterAPI() {
  const navigate = useNavigate();
  const { handleReqError } = useError();

  const registerAPI = async (data: TRegisterReq) => {
    const payload = {
      name: data?.name,
      displayName: data?.displayName,
      email: data?.email,
      password: data?.password,
    };

    const rsp = await WelcomeController().register<IBaseResponse>(payload);

    return rsp;
  };

  return useMutation({
    mutationFn: registerAPI,
    onSuccess: async (rsp) => {
      if (rsp && rsp.success) {
        navigate("/login");
      } else if (rsp.error && rsp.error?.response?.status === 406) {
        throw rsp.error;
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! login failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(`ERROR! register request threw an Exception! ${error}`);
    },
  });
}
