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
      } else if (
        errorMessage?.includes("You can only change your name twice.")
      ) {
        enqueueSnackbar("Хэрэглэгч нэрээ 2 удаагаас илүү өөрчлөх боломжгүй.", {
          variant: "error",
        });
      } else {
        enqueueSnackbar(errorMessage, { variant: "error" });
      }
    }

    if (error?.response?.status === 401 || error.code === "ERR_NETWORK") {
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
