// Hooks
import { useRequest } from "../lib/hooks";

// Components
import { CONTROLLERS } from "../data/constants";
import { TAxiosError } from "../types/responses/common";
import { TUpdateProfileReq } from "../types/requests";

export function ProfileController() {
  const { axiosRequest, initRequestOptions } = useRequest();

  const controllerName = CONTROLLERS.PROFILE;

  const getProfile = <T>(): Promise<
    T | { success: boolean; error: TAxiosError }
  > => {
    const requestOptions = initRequestOptions(null, { method: "POST" });

    return axiosRequest(`${controllerName}/get`, requestOptions);
  };

  const updatePassword = <T>(data: {
    password: string;
  }): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/updatePassword`, requestOptions);
  };

  const updateProfile = <T>(
    data: TUpdateProfileReq
  ): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/update`, requestOptions);
  };

  const setAvatar = <T>(data: {
    email: string;
    b64I: string;
  }): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/setAvatar`, requestOptions);
  };

  const deleteAccount = <T>(data: {
    email: string;
  }): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/delete`, requestOptions);
  };

  return {
    getProfile,
    updatePassword,
    updateProfile,
    setAvatar,
    deleteAccount,
  };
}
