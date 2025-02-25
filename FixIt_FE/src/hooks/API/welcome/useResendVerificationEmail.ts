// Third party
import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

// Components
import { IBaseResponse, TAxiosError } from "../../../types/responses/common";
import { useError } from "../../useError";
import { WelcomeController } from "../../../services";

export function useResendVerificationEmailAPI() {
  const { handleReqError } = useError();
  const { enqueueSnackbar } = useSnackbar();

  const resendVerificationEmail = async (data: { email: string }) => {
    const payload = {
      email: data?.email,
    };

    const rsp =
      await WelcomeController().resendVerificationEmail<IBaseResponse>(payload);

    return rsp;
  };

  return useMutation({
    mutationFn: resendVerificationEmail,
    onSuccess: async (
      rsp,
      variables: {
        email: string;
        setEmailNotConfirmedError: React.Dispatch<
          React.SetStateAction<boolean>
        >;
      }
    ) => {
      const { setEmailNotConfirmedError } = variables;

      if (rsp && rsp.success) {
        setEmailNotConfirmedError(false);

        enqueueSnackbar("המייל נשלח בהצלחה", {
          variant: "success",
          autoHideDuration: 2000,
        });
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! resend verification failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(
        `ERROR! resend verification request threw an Exception! ${error}`
      );
    },
  });
}
