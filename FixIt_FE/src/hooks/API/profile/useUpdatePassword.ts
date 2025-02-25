// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Components
import { IBaseResponse, TAxiosError } from "../../../types/responses/common";
import { useError } from "../../useError";
import { ProfileController } from "../../../services";
import { hashPassword } from "../../../utils/helpers/common.helper";

export function useUpdatePasswordAPI() {
  const navigate = useNavigate();
  const { handleReqError } = useError();

  const updatePasswordAPI = async (newPassword: string) => {
    const password = hashPassword(newPassword);

    const rsp = await ProfileController().updatePassword<IBaseResponse>({
      password,
    });

    return rsp;
  };

  return useMutation({
    mutationFn: updatePasswordAPI,
    onSuccess: async (rsp) => {
      if (rsp && rsp.success) {
        navigate("/profile");
      } else if (rsp.error && rsp.error?.response?.status === 406) {
        throw rsp.error;
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! update password failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(
        `ERROR! update password request threw an Exception! ${error}`
      );
    },
  });
}
