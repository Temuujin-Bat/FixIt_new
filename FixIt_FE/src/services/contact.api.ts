// Hooks
import { useRequest } from "../lib/hooks/index.ts"; // We make here HTTP requests

// Components
import { CONTROLLERS } from "../data/constants.ts";
import { TAxiosError } from "../types/responses";
import { TContactUsReq } from "../types/requests";

export function ContactUsController() {
  const { axiosRequest, initRequestOptions } = useRequest();

  const controllerName = CONTROLLERS.COMMON;

  const contactUs = <T>(
    data: TContactUsReq
  ): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/contact_us`, requestOptions);
  };

  return {
    contactUs,
  };
}
