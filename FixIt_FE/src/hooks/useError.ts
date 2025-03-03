// Third party
import { useSnackbar } from "notistack";

// Components
import { TAxiosError } from "../types/responses";
import { useCommon } from "./useCommon";

export function useError() {
  const { enqueueSnackbar } = useSnackbar();
  const { handleLogout } = useCommon();

  const handleReqError = async (error: TAxiosError) => {
    console.error(`${error.request.responseURL}: ${error.response?.data?.msg}`);

    const errorMessage = error.response?.data?.msg;

    if (error?.response?.status === 400) {
      if (errorMessage.includes("Invalid phone number or password")) {
        enqueueSnackbar("Утасны дугаар эсвэл нууц үг буруу байна", {
          variant: "error",
        });
      } else {
        enqueueSnackbar(errorMessage, { variant: "error" });
      }
    }

    if (error?.response?.status === 401 || error.code === "ERR_NETWORK") {
      // console.warn("401 Unauthorized detected. Trying to refresh token...");
      //
      // try {
      //   const newAccessToken = await refreshAccessToken();
      //
      //   if (newAccessToken) {
      //     console.log("Token refreshed successfully.");
      //     return true;
      //   }
      // } catch (refreshError) {
      //   console.error("Failed to refresh token:", refreshError);
      // }

      enqueueSnackbar("Системээс гарлаа. Дахин нэвтэрнэ үү.", {
        variant: "warning",
      });
      await handleLogout();
      return false;
    }

    return false;
  };

  return {
    handleReqError,
  };
}
