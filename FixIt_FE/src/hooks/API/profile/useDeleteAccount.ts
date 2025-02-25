// Third party
import { useMutation } from "@tanstack/react-query";

// Components
import { useError } from "../../useError";
import { ProfileController } from "../../../services";
import { IBaseResponse, TAxiosError } from "../../../types/responses";
import { useCommon } from "../../useCommon";

export function useDeleteAccountAPI({
  setIsOpen,
}: {
  setIsOpen: (open: boolean) => void;
}) {
  const { handleReqError } = useError();
  const { handleLogout } = useCommon();

  const deleteAccountAPI = async (data: { email: string }) => {
    const rsp = await ProfileController().deleteAccount<IBaseResponse>(data);

    return rsp;
  };

  return useMutation({
    mutationFn: deleteAccountAPI,
    onSuccess: async (rsp) => {
      if (rsp && rsp.success) {
        setIsOpen(false);

        handleLogout();
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! delete account failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(
        `ERROR! delete account request threw an Exception! ${error}`
      );
    },
  });
}
