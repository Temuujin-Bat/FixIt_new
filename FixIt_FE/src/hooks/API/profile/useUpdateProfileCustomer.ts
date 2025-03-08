// Third party
import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

// Components
import { IBaseResponse, TAxiosError } from "../../../types/responses";
import { useError } from "../../useError";
import { CustomerProfileController } from "../../../services";
import { useAppDispatch, useAppSelector } from "../../useAppStore";
import { authenticateActions } from "../../../store/authenticate/slice";
import {
  getAccessToken,
  getCustomerInfo,
} from "../../../store/authenticate/selectors";

export function useUpdateProfileCustomerAPI({
  onClose,
}: {
  onClose: () => void;
}) {
  const dispatch = useAppDispatch();
  const { handleReqError } = useError();
  const { enqueueSnackbar } = useSnackbar();
  const accessToken = useAppSelector(getAccessToken);
  const selectedCustomer = useAppSelector(getCustomerInfo);

  const updateAPI = async (data: { name: string }) => {
    const payload = {
      name: data.name,
    };

    return await CustomerProfileController(
      accessToken,
    ).updateProfile<IBaseResponse>(payload);
  };

  return useMutation({
    mutationFn: updateAPI,
    onSuccess: async (rsp, variables) => {
      if (rsp && rsp?.success) {
        dispatch(
          authenticateActions.setCustomerInfo({
            ...selectedCustomer,
            name: variables.name,
            name_changes: (selectedCustomer.name_changes || 0) + 1,
          }),
        );
        onClose();
        enqueueSnackbar(`Мэдээллийг амжилттай өөрчиллөө`, {
          variant: "success",
        });
      } else if ("msg" in rsp) {
        console.error(`ERROR! resend verification failed! ${rsp.msg}`);
      }
    },
    onError: async (error: TAxiosError) => {
      console.error(
        `ERROR! update customer profile request threw an Exception! ${error}`,
      );
      await handleReqError(error);
    },
  });
}
