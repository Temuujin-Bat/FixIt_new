// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Components
import { TAxiosError } from "../../../types/responses/common";
import { useError } from "../../useError";
import { encryptData } from "../../../utils/crypto_util";
import { TOKEN_KEY } from "../../../data/constants";
import { TLoginRes } from "../../../types/responses";
import { WelcomeController } from "../../../services";
import { useGetProfileAPI } from "../profile/useGetProfile";
import { TLoginReq } from "../../../types/requests";

export function useLoginAPI() {
  const navigate = useNavigate();
  const { handleReqError } = useError();
  const { refetch } = useGetProfileAPI();

  const loginAPI = async (data: TLoginReq) => {
    const payload = {
      email: data?.email.toLocaleLowerCase(),
      password: data?.password,
    };

    const rsp = await WelcomeController().login<TLoginRes>(payload);

    if ("authToken" in rsp && rsp.success) {
      const token = rsp.authToken as string;

      encryptData(TOKEN_KEY, token, "localStorage");
    }

    return rsp;
  };

  return useMutation({
    mutationFn: loginAPI,
    onSuccess: async (rsp) => {
      if (rsp && rsp.success) {
        await refetch();

        navigate("/");
      } else if (rsp.error && rsp.error?.response?.status === 406) {
        throw { type: "loginError" };
      } else if (rsp.error && rsp.error?.response?.status === 403) {
        throw { type: "emailNotConfirmed" };
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! login failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(`ERROR! login request threw an Exception! ${error}`);
    },
  });
}
