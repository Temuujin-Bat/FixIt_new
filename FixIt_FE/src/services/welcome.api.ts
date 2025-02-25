// Hooks
import { useRequest } from "../lib/hooks/index.ts"; // We make here HTTP requests

// Components
import { CONTROLLERS } from "../data/constants.ts";
import { TAxiosError } from "../types/responses";
import { TLoginReq, TRegisterReq } from "../types/requests";

export function WelcomeController() {
  const { axiosRequest, initRequestOptions } = useRequest();

  const controllerName = CONTROLLERS.LOGIN;

  const login = <T>(
    data: TLoginReq
  ): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/authenticate`, requestOptions);
  };

  const register = <T>(
    data: TRegisterReq
  ): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/register`, requestOptions);
  };

  const resetPassword = <T>(data: {
    email: string;
  }): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/reset`, requestOptions);
  };

  const setPasswordAfterReset = <T>(data: {
    password: string;
    resetToken: string;
  }): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/set_password`, requestOptions);
  };

  const resendVerificationEmail = <T>(data: {
    email: string;
  }): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(
      `${controllerName}/resend_verification_email`,
      requestOptions
    );
  };

  return {
    login,
    register,
    resetPassword,
    setPasswordAfterReset,
    resendVerificationEmail,
  };
}
