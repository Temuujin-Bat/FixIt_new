// Third party
import { useSnackbar } from "notistack";

// Components
import { TAxiosError } from "../types/responses/common";
import { useCommon } from "./useCommon";

export function useError() {
  const { enqueueSnackbar } = useSnackbar();
  const { handleLogout } = useCommon();

  const handleReqError = (error: TAxiosError) => {
    console.error(`${error.request.responseURL}: ${error.response?.data?.msg}`);

    if (error?.response?.status === 400) {
      enqueueSnackbar("הבקשה נכשלה", {
        variant: "error",
      });
    }

    if (error?.response?.status === 401 || error.code === "ERR_NETWORK") {
      handleLogout();
    }

    return false;
  };

  return {
    handleReqError,
  };
}
