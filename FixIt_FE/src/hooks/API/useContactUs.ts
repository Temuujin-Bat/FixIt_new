// Third party
import { useMutation } from "@tanstack/react-query";

// Components
import { TContactUsReq } from "../../types/requests/contact.us.type";
import { useError } from "../useError";
import { IBaseResponse, TAxiosError } from "../../types/responses/common";
import { ContactUsController } from "../../services";

export function useContactUsAPI() {
  const { handleReqError } = useError();

  const contactUsAPI = async (contactUsData: TContactUsReq) => {
    const payload = {
      name: contactUsData.name,
      email: contactUsData.email,
      phone: contactUsData.phone,
      category: contactUsData.category,
      message: contactUsData.message,
    };

    const rsp = await ContactUsController().contactUs<IBaseResponse>(payload);

    return rsp;
  };

  return useMutation({
    mutationFn: contactUsAPI,
    onSuccess: async (rsp) => {
      if (rsp && rsp.success) {
      } else if (rsp?.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ("msg" in rsp) {
        console.error(`ERROR! contact us failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(`ERROR! contact us request threw an Exception! ${error}`);
    },
  });
}
