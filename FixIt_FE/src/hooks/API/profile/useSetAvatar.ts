// Third party
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

// Components
import { useGetProfileAPI } from "./useGetProfile";
import { useError } from "../../useError";
import { ProfileController } from "../../../services";
import { TAxiosError, TSetAvatarRes } from "../../../types/responses";

export function useSetAvatarAPI({
  setIsOpen,
}: {
  setIsOpen?: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  const { refetch } = useGetProfileAPI();
  const { handleReqError } = useError();

  const setAvatarAPI = async (data: { email: string; b64I: string }) => {
    const rsp = await ProfileController().setAvatar<TSetAvatarRes>(data);

    return rsp;
  };

  return useMutation({
    mutationFn: setAvatarAPI,
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
        console.error(`ERROR! set avatar failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(`ERROR! set avatar request threw an Exception! ${error}`);
    },
  });
}
