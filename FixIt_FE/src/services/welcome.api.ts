// Third party
import axios, { AxiosError } from "axios";

// Components
import { TLoginReq } from "../types/requests";
import { TAxiosError } from "../types/responses";
import { BASE_URL } from "../../config";
import { CONTROLLERS } from "../utils/enums";

const WelcomeController = () => {
  const controllerName = CONTROLLERS.CUSTOMER;

  const login = async <T>(
    data: TLoginReq,
  ): Promise<T | { success: boolean; error: TAxiosError }> => {
    try {
      const res = await axios.post<T>(
        `${BASE_URL}/${controllerName}/auth/login`,
        data,
        { withCredentials: true },
      );

      return res.data;
    } catch (err) {
      console.log("Login request error", err);
      return {
        success: false,
        error: err as AxiosError & TAxiosError,
      };
    }
  };

  const logout = async <T>(): Promise<
    T | { success: boolean; error: TAxiosError }
  > => {
    try {
      const res = await axios.post<T>(
        `${BASE_URL}/${controllerName}/auth/logout`,
        {},
        { withCredentials: true },
      );

      return res.data;
    } catch (err) {
      console.log("Logout request error", err);
      return {
        success: false,
        error: err as AxiosError & TAxiosError,
      };
    }
  };

  return {
    login,
    logout,
  };
};

export { WelcomeController };
