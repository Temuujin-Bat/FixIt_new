// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Components
import { IBaseResponse, TAxiosError } from "../../../types/responses/common";
import { useError } from "../../useError";
import { ProfileController } from "../../../services";
import { useGetProfileAPI } from "./useGetProfile";
import { TUpdateProfileReq } from "../../../types/requests";

export function useUpdateProfileAPI({
  setIsOpen,
}: {
  setIsOpen?: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  const { refetch } = useGetProfileAPI();
  const { handleReqError } = useError();

  const updateNameAPI = async (data: TUpdateProfileReq) => {
    const rsp = await ProfileController().updateProfile<IBaseResponse>(data);

    return rsp;
  };

  return useMutation({
    mutationFn: updateNameAPI,
    onSuccess: async (rsp) => {
      if (rsp && rsp.success) {
        await refetch();

        if (setIsOpen) {
          setIsOpen(false);
        }

        navigate("/profile");
      } else if (rsp.error && rsp.error?.response?.status === 406) {
        throw rsp.error;
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! update profile failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(
        `ERROR! update profile request threw an Exception! ${error}`
      );
    },
  });
}
